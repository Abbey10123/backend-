import { IsEmail, MinLength} from 'class-validator';

export class CreateUserDto{
    @IsEmail()
    email:string;
    
    @MinLength(2)
    firstName:string;
    @MinLength(2)
    lastName:string;
    @MinLength(8)
    password:string;
}