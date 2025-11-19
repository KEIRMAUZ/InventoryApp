import { Controller, Get,Post,Patch,Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Controller('products')
export class ProductsController {   
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    async findAll() {
        return this.productsService.findAll();
    }   
    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.productsService.findOne(id);
    }
    @Post()
    async createProduct(@Body() newProduct: CreateProductDto): Promise<Product> {
        return this.productsService.create(newProduct);
    }
    @Patch(':id')
    async update(@Param('id',ParseIntPipe) id: number, @Body() updateProduct: UpdateProductDto) {
        return this.productsService.update(id, updateProduct);
    }
    @Delete(':id')
    async remove(@Param('id',ParseIntPipe) id: number) {
        return this.productsService.delete(id);
    }
}
