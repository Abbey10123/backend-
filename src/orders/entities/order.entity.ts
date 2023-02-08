import { Order } from "../interfaces/order.interface";
import {Column, PrimaryGeneratedColumn, Entity} from "typeorm"

@Entity({name:'orders'}) 
export class OrderEntity implements Order{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string;

    @Column()
    product: string;

    @Column()
    quantity: number;

    @Column()
    price: number;

    @Column()
    deliveryAddress: string;

    @Column()
    deliveryStatus: string;

}