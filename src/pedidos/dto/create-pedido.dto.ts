/* eslint-disable prettier/prettier */
// src/pedido/dto/create-pedido.dto.ts
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePedidoDto {
  @IsNumber()
  @IsNotEmpty()
  userId: number;

}
