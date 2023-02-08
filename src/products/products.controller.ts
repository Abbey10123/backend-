import { Controller, Param, Body, Get, Post, Patch, Delete } from '@nestjs/common';
import { get } from 'http';
import { ProductEntity } from './enitities/product.entity';
import { Product } from './interfaces/product.interface';
import { ProductsService } from './products.service';


@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}
    @Get()
    getProduct( @Body () product: Product){
       return this.productsService.getProduct(product);
    }

    @Post()
    createProduct( @Body() product: Product) {
        return this.productsService.createProduct(product);
    }

    @Get(":id")
    viewOneProduct(@Param("id")id: number){
        return this.productsService.viewOneProduct(Number(id))
    }
    @Get(":isAvailable")
    listAvailable(@Param ("isAvailable") isAvailable : Boolean) {
      return this.productsService.listAvailableProducts(Boolean(isAvailable));
    }

    @Patch(":id")
    updateProductInfo( @Body() changes: Product, @Param("id") recordId: number ){
        return this.productsService.updateProductInfo(Number(recordId),changes);
    }
    
    @Delete(":id")
    delProduct( @Param ("id") id:number){
        return this.productsService.delProduct(Number(id))

    }
    


}
