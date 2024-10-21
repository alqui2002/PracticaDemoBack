/* eslint-disable prettier/prettier */
import { Pedido } from 'src/pedidos/entities/pedido.entity';
import { Entity, Column, OneToMany } from 'typeorm';

@Entity()
export class User {
  @Column({ primary: true, generated: true })
  id: number;
  
  @Column({ length: 500 })
  name: string;
  
  @Column({ length: 500 })
  last_name: string;

  @Column({ unique: true, nullable: false })
  email: string;
  
  @Column({ nullable: false })
  password: string;

  
  @OneToMany(() => Pedido, pedido => pedido.user)
  pedidos: Pedido[];

}
