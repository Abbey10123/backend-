import { Param, Body, Controller, Get, Post, Patch, Delete } from '@nestjs/common';
import { Order } from './interfaces/order.interface';

import { get } from 'http';
import { OrdersService } from './orders.service';


@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}
    @Get(':id')
    getOrder( @Param('id') id:number) {
        return this.ordersService.getOrder(Number(id));
    }

    @Get()
    getAllOrders(@Body () order:Order){
        return this.ordersService.getAllOrders(order)

    }

    @Post()
    createOrder(@Body () order:Order ) {
        return this.ordersService.createOrder(order);
    }

    @Patch(":id")
    updateOrder(@Body() updatesToBeApplied: Order, @Param("id") recordId: number) {
        return this.ordersService.updateOrder(Number(recordId),updatesToBeApplied);
    }

    @Delete(":id")
    cancelOrder(@Body() data:any, @Param("id") id:number) {
        return this.ordersService.cancelOrder(Number(id));
    }
}

