/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProtegidaModule } from './protegida/protegida.module';
import { ProductModule } from './product/product.module';
import { PedidosModule } from './pedidos/pedidos.module';
import * as dotenv from 'dotenv';


dotenv.config();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', 
      host: process.env.DB_HOST, 
      port: parseInt(process.env.DB_PORT, 10), 
      username: process.env.DB_USERNAME, 
      password: process.env.DB_PASSWORD, 
      database: process.env.DB_DATABASE, 
      autoLoadEntities: true,
      synchronize: true, 
    }),
    UsersModule,
    AuthModule,
    ProtegidaModule,
    ProductModule,
    PedidosModule,
  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
