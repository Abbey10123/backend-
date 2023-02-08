import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Otp, OtpReason } from '../interfaces/otp.interface';
import { UserEntity } from './user.entity';

@Entity()
export class OtpEntity implements Otp {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int', name: 'user_id' })
    userId: number;

    @Column()
    code: string;

    @Column({type: "timestamp" })
    expiryDate: Date;

    @Column({ type: 'enum', enum: OtpReason, default: OtpReason['verify-email'], nullable: false })
    reason: OtpReason;
}