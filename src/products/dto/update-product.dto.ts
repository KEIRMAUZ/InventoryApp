export class UpdateProductDto {
    name_product?: string;
    marca?:string;
    precio_compra?: number;
    precio_venta?: number;    
    fecha_compra?: string;
    fecha_caducidad?: string; 
    codigo_barras?:string;
    stock?:number;
}   