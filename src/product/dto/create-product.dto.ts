/* eslint-disable prettier/prettier */
// src/product/dto/create-product.dto.ts
import { IsString, IsNumber } from 'class-validator';

export class CreateProductDto {
  @IsString()
  nombre: string;

  @IsString()
  descripcion: string;

  @IsNumber()
  precio: number;
}
