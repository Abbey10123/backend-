import { Product } from "../interfaces/product.interface";
import { Column, PrimaryGeneratedColumn, Entity} from "typeorm"

@Entity({name:'products'})
export class ProductEntity implements Product{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string;

    @Column()
    model: string;

    @Column()
    price: number;

    @Column()
    color: string;
    

    @Column()
    isAvailable: boolean;
}