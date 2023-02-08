import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderEntity } from './entities/order.entity';
import { Order } from './interfaces/order.interface';
const orders: Array<Order> = []

@Injectable()
export class OrdersService {
    constructor (@InjectRepository(OrderEntity)private readonly ordersRepo: Repository<OrderEntity> ){}

    getOrder(orderId: number) {
        return this.ordersRepo.findOne({ where: { id: orderId } })
    }

    getAllOrders(order:Order){
        return this.ordersRepo.find({select:{id:true, email:true, deliveryAddress:true, deliveryStatus:true, price:true, product:true, quantity:true}})
    }

    createOrder(order : Order) {
        if (order.email){
           order.id = orders.length;
            orders.push(order)
        }
        return this.ordersRepo.save(order);
    }

    updateOrder(recordId: number, updatesToBeApplied: Order) {
        //const order = orders[recordId]
        // orders[recordId] = {
        //     id: order.id,
        //     email :updatesToBeApplied.email || order.email,
        //     product :updatesToBeApplied.product || order.product,
        //     quantity: updatesToBeApplied.quantity || order.quantity,
        //     price : updatesToBeApplied.price || order.price,
        //     deliveryAddress: updatesToBeApplied.deliveryAddress || order.deliveryAddress,
        //     deliveryStatus: updatesToBeApplied.deliveryStatus || order.deliveryStatus,

        // }
        return this.ordersRepo.update({id:recordId}, updatesToBeApplied)
    }
    cancelOrder(id:number){

        const order = orders.filter((order) => order.email.toLowerCase().includes(order.email.toLowerCase()));
        return this.ordersRepo.delete(id)

    }
}       