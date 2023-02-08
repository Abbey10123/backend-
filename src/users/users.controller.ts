import { Param, Request,Body,Controller, Get, Post, Patch, UseGuards} from '@nestjs/common';
import { get } from 'http';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { User } from './interfaces/user.interface';
import { LoginUserDto} from './dtos/login-user.dto'
import { UsersService } from './users.service';
import { NotVerifiedEmailGuard } from './guards/not-verified-email.guard';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    // // @Get(":id")
    // getOneUser(@Param ("id") id : Number) {
    //     return this.usersService.getOneUser(Number(id))
    // }
    @Get()
    getUsers(@Body () user:User){
        return this.usersService.getUser(user)
    }
    

    @Post()
    createUser(@Body () user:CreateUserDto) {
        return this.usersService.createUser(user);
    }

    @Post(":login")
    loginUser(@Body () loginDetails:LoginUserDto) {
        return this.usersService.loginUser(loginDetails);
    }

    @UseGuards(NotVerifiedEmailGuard)
    @Get('profile')
    getProfile(){
        return "Profile is accessible";
    }

    @UseGuards(NotVerifiedEmailGuard)
    @Patch("verify-email/:otp")
    verifyEmail(@Param ("otp") otp:string, @Request() req:any){
       return this.usersService.verifyEmail(req.user, otp)
    }

   


    @Patch(":id")
    updateUser(@Body () changes: User, @Param("id") recordId: Number) {
        return this.usersService.updateUser(Number(recordId), changes);
    }


}
