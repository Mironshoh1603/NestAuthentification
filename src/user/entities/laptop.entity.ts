/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Laptop {
  @PrimaryGeneratedColumn()
  id: string;
  @Column({ type: 'varchar' })
  model: string;
  @OneToOne((type) => User, (laptop) => laptop.user)
  user: User;
  laptop: any;
}
