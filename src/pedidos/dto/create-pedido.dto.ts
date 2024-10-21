/* eslint-disable prettier/prettier */
// src/pedido/dto/create-pedido.dto.ts
import { IsNotEmpty, IsNumber, IsArray } from 'class-validator';

export class CreatePedidoDto {
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @IsArray()
  @IsNumber({}, { each: true })
  productos: number[]; // Aquí se reciben los IDs de los productos
}

