import {Column, PrimaryGeneratedColumn, Entity} from "typeorm"
import { User } from "../interfaces/user.interface";

@Entity({name:'users'})
export class UserEntity implements User{
  
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  email: string

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column()
  password: string

  @Column({type:"boolean" ,default:false})
  emailVerified: boolean


}