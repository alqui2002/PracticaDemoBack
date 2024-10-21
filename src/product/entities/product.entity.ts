/* eslint-disable prettier/prettier */
import { Pedido } from 'src/pedidos/entities/pedido.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany,} from 'typeorm';


@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column('decimal')
  precio: number;
  
  @ManyToMany(() => Pedido, pedido => pedido.productos) // Relación con Pedido
  pedidos: Pedido[]; // Propiedad para establecer la relación inversa

}
