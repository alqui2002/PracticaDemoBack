/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { Pedido } from './entities/pedido.entity';
import { User } from 'src/users/entities/user.entity'; 
import { Product } from 'src/product/entities/product.entity'; 

@Injectable()
export class PedidosService {
  constructor(
    @InjectRepository(Pedido)
    private readonly pedidoRepository: Repository<Pedido>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(createPedidoDto: CreatePedidoDto): Promise<Pedido> {
    
    const user = await this.userRepository.findOne({ where: { id: createPedidoDto.userId } });
    const productos = await this.productRepository.findByIds(createPedidoDto.productos);
    
    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    
    const pedido = this.pedidoRepository.create({
      user, 
      productos,
      fecha: new Date(), 
      
    });

   
    return await this.pedidoRepository.save(pedido);
  }
  async findAll(): Promise<Pedido[]> {
    return await this.pedidoRepository.find({ relations: ['user', 'productos'] }); 
  }
  
}
