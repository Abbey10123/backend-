import { User } from "./user.interface";
export enum OtpReason {
    "verify-email",
    "confirm-order",
}

export interface Otp{
    userId: number;
    code:string;
    expiryDate: Date;
    reason:OtpReason;
}