/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.pedidos, { eager: true })
  @JoinColumn({ name: 'userId' }) // columna en la tabla de pedidos que hace referencia al usuario
  user: User;

  @Column()
  fecha: Date;

  // Aquí puedes añadir otros campos según lo necesites
}
