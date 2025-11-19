import {Column, PrimaryGeneratedColumn} from 'typeorm'

export class Product {
    @PrimaryGeneratedColumn()
    id: number; 
    @Column()
    name_product: string;
    @Column()
    marca:string;
    @Column()
    precio_compra: number;
    @Column()
    precio_venta: number;    
    @Column()
    fecha_compra: string;
    @Column()
    fecha_caducidad: string; 
    @Column()
    codigo_barras:string;
    @Column()
    stock:number;
}