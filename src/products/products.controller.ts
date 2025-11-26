import { Controller, Get,Post,Patch,Delete, Param, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.schema';
import { CodigoFind } from './Response/productoCodigo.response';

@Controller('products')
export class ProductsController {   
    constructor(private productsService: ProductsService) {}

    @Post()
    async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
        return this.productsService.create(createProductDto);
    }
    @Get()
    async findAll(): Promise<Product[]> {
        return this.productsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id' ) id: string) {
        return this.productsService.findOne(id);
    }

    @Patch(":id")
    async updateProduct(@Param('id') id:string,@Body() updateProductDto: UpdateProductDto) {
        return this.productsService.update(id, updateProductDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.productsService.remove(id);
    }

    @Get('code/:code')
    async findByCode(@Param('code') code:string ) {
        return this.productsService.findCode({codigo_barras: code});
    }
}
