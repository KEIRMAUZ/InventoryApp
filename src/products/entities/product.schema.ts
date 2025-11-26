import { Schema,Prop,SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Product {
    
    @Prop({required: true})
    name_product: string;
    @Prop({required: true})
    marca:string;
    @Prop({required: true})
    precio_compra: number;
    @Prop({required: true})
    precio_venta: number;
    @Prop({required: true})
    fecha_compra: Date;
    @Prop({required: false})
    fecha_caducidad?: Date; 
    @Prop( {required: true})
    codigo_barras:string;
    @Prop( {required: true})
    stock:number;
    @Prop()
    proveedor: string;

}
export const ProductSchema = SchemaFactory.createForClass(Product);
