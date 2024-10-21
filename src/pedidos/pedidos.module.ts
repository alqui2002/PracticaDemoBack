/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidosService } from './pedidos.service';
import { PedidosController } from './pedidos.controller';
import { Pedido } from './entities/pedido.entity';
import { User } from 'src/users/entities/user.entity';
import { Product } from 'src/product/entities/product.entity'; // Asegúrate de que la ruta sea correcta


@Module({
  imports: [
    TypeOrmModule.forFeature([Pedido, User, Product]), // Asegúrate de que los repositorios estén aquí
  ],
  controllers: [PedidosController],
  providers: [PedidosService],
})
export class PedidosModule {}
