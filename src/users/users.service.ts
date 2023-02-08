import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { request } from 'express';
import { Repository, MoreThanOrEqual } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { User } from './interfaces/user.interface';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from './dtos/login-user.dto';
import {JwtService} from "@nestjs/jwt";
import { generateOtp } from './helpers/otp.helper';
import { OtpEntity } from './entities/otp.entity';
import { OtpReason } from './interfaces/otp.interface';




const users: Array<User> = []

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserEntity) private readonly usersRepo: Repository<UserEntity>, 
    @InjectRepository(OtpEntity) private readonly otpRepo: Repository<OtpEntity>,
    private jwtService: JwtService,) { }

    async isEmailRegistered(email: string) {
        const userEmail = await this.usersRepo.findOne({ where: { email } });
        if (userEmail) {
            return userEmail
        }
        return false;
    }


    async createUser(user: CreateUserDto) {
        try {
            if (await this.isEmailRegistered(user.email)) {
                throw "This email is already registered";
            }
            const hiddenPassword = await bcrypt.hash(user.password, 10);
            user.password = hiddenPassword;

            const savedUser = await this.usersRepo.save(user);
            const otp = generateOtp();
            const expiry = new Date();
            expiry.setMinutes(expiry.getMinutes()+30);
            await this.otpRepo.save({
                code: otp.toString(),
                userId : savedUser.id,
                reason : OtpReason['verify-email'],
                expiryDate : expiry,
            })

            delete savedUser.password;
            return {
                token:this.jwtService.sign({
                    id : savedUser.id,
                    firstName: savedUser.firstName,
                    lastName: savedUser.lastName,
                    email: savedUser.email,
                    emailVerified: savedUser.emailVerified   
                }),
                userDetails: savedUser,
                message: "Registration succesful!"
            }
        }
        catch (error) {
            throw new BadRequestException(error);
        }
    }
    async verifyEmail(user:User, otp: string){
        if (user.emailVerified){
            return {
                message: "Already Verified"
            }
        }
        
        const otpRecord = await this.otpRepo.findOne({
            where:{userId:user.id,
            code: otp,
            expiryDate: MoreThanOrEqual( new Date()),
            reason: OtpReason['verify-email']}
        })
        if (!otpRecord){
            throw new BadRequestException({
                message: "Invalid Otp"
            })

        }
        await this.usersRepo.update(user.id,{emailVerified: true})
        return {
            message: 'Verification completed'
        }


    
    }


    async loginUser(loginDetails: LoginUserDto) {
        try {
            const user = await this.isEmailRegistered(loginDetails.email);

            if (!user) {
                throw 'This user does not exist! Please register';
            }
            if (!(await bcrypt.compare(loginDetails.password, user.password))) {
                throw 'Invalid password, please try again!'
            }

       
            delete user.password;
            return {
                token:this.jwtService.sign({...user}),
                user,
                message: "You've successfully logged in"
            };
        } catch (error) {
            throw new BadRequestException(error)
        }
    }
    




    //   const hiddenPassword = Bcrypt.hash(user.password, 10);
    //   user.password = hiddenPassword;
    //   return this.usersRepo.save(user)}
    //   catch
    // }

    // if(user.email && user.password && user.name){
    //     user.id = users.length;
    //     users.push(user);
    // }}return this.usersRepo.save(user);

    // return users;



    getUser(user: User) {
        return this.usersRepo.find({ select: { id: true, email: true, firstName: true, lastName: true } })
    }

    getOneUser(userId: number) {
        // {const user = users.filter(u => u.email = request.params.email)} 
        return this.usersRepo.findOne({ where: { id: userId } });
    }




    updateUser(recordId: number, changes: User) {
        return this.usersRepo.update({ id: recordId }, changes)
    }
}

