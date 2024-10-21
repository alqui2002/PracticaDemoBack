/* eslint-disable prettier/prettier */
// src/pedido/entities/pedido.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Product } from 'src/product/entities/product.entity';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.pedidos, { eager: true })
  user: User;

  @Column()
  fecha: Date;

  @ManyToMany(() => Product, product => product.pedidos, { eager: true })
  @JoinTable() // Esto se usa para definir la tabla de unión
  productos: Product[];
}

