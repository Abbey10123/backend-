import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';



@Module({

  imports: [ OrdersModule, ProductsModule, UsersModule, TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'phone_sales',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    })],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
