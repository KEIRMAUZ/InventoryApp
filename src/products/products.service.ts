import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm'; 
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductDto } from './dto/create-product.dto';


@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ) {}

    async findAll(): Promise<Product[]> {
        return this.productRepository.find();
    }

    async findOne(id: number){
        return this.productRepository.findOne({
            where:{
                id,
            }
        });
    }

    async create(product: CreateProductDto) {
        return this.productRepository.save(product);
    }

    async update(id: number, product: UpdateProductDto) {
        await this.productRepository.update({id}, product);
    }

    async delete(id: number) {
        await this.productRepository.delete({id});
    }
}
