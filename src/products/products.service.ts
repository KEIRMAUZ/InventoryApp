import { HttpException, Injectable,Module } from '@nestjs/common';
import { Product,ProductSchema } from './entities/product.schema';
import { InjectModel,MongooseModule } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CodigoFind } from './Response/productoCodigo.response';

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel(Product.name) private productModel: Model<Product>,
    ){}

    async create(createProductDto: CreateProductDto): Promise<Product> {
        return this.productModel.create(createProductDto);
    }
    async findAll(): Promise<Product[]> {
        return this.productModel.find().exec();
    }
    
    async findOne(id:string){ 
        return this.productModel.findById(id);

    }
    async update(id: string, updateProductDto: UpdateProductDto) {
        return this.productModel.findByIdAndUpdate(id, updateProductDto);
    }
    async remove(id:string) {
        return this.productModel.findByIdAndDelete(id);
    }
    async findCode(code:CodigoFind){
        const productFind = await this.productModel.findOne({
            codigo_barras: code.codigo_barras
        }).exec();
        if(!productFind){
            throw new HttpException('Producto no encontrado',404);
        }
        return productFind
    }
}
