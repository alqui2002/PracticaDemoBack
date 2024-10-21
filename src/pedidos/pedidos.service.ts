/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { Pedido } from './entities/pedido.entity';
import { User } from 'src/users/entities/user.entity'; // Asegúrate de que la ruta sea correcta

@Injectable()
export class PedidosService {
  constructor(
    @InjectRepository(Pedido)
    private readonly pedidoRepository: Repository<Pedido>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createPedidoDto: CreatePedidoDto): Promise<Pedido> {
    // Busca el usuario por su ID
    const user = await this.userRepository.findOne({ where: { id: createPedidoDto.userId } });

    // Si el usuario no existe, lanza un error
    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    // Crea una nueva instancia de Pedido
    const pedido = this.pedidoRepository.create({
      user, // Asocia el usuario encontrado
      fecha: new Date(), // Asignamos la fecha actual
      // Aquí puedes añadir otros campos si es necesario
    });

    // Guarda el nuevo pedido en la base de datos
    return await this.pedidoRepository.save(pedido);
  }

  // Aquí puedes agregar más métodos según sea necesario
}
