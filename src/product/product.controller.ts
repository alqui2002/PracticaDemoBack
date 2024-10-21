/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('productos')
export class ProductController {
  constructor(private readonly productoService: ProductService) {}

  @Get()
  findAll(): Promise<Product[]> {
    return this.productoService.findAll();
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productoService.create(createProductDto);
  }
}
