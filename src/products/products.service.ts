import {Injectable} from '@nestjs/common';
import { ok } from 'assert';
import { Product } from './interfaces/product.interface';
import {InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from './enitities/product.entity';

const products: Array<Product> = [];

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(ProductEntity)private readonly productsRepo: Repository <ProductEntity>){}
    createProduct(product: Product){
        
        // product.id = products.length;
        // product.isAvailable = true;
        // products.push(product);
        
 
    return this.productsRepo.save(product)
}


    getProduct(product: Product){
        return this.productsRepo.find()
    }


    
    listAvailableProducts(isAvailable : Boolean){
       //return products.filter((p) => p.isAvailable === true)
       return this.productsRepo.findOne({where: {isAvailable: true}})
    }

    viewOneProduct(productId:number){
        // return products.filter((p) => p.id === id);
        return this.productsRepo.findOne({where:{id: productId}})
    }


    updateProductInfo(recordId:number, changes: Product){
        
        // const product = products[id]
        
        // products[id] = {
        //     id: product.id,
        //     name :changes.name || product.name,
        //     model : changes.model || product.model,
        //     price : changes.price || product.price,
        //     color :changes.color || product.color,
        //     isAvailable : changes.isAvailable=== true || changes.isAvailable === false? changes.isAvailable: product.isAvailable,
        // }
        return this.productsRepo.update({id:recordId}, changes);
        
    }

    delProduct(productId:number){
        return this.productsRepo.delete({id:productId});
    }
    
}   
