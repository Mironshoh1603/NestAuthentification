/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Photo } from './photo.entity';
import { Laptop } from './laptop.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;
  @Column({ type: 'varchar' })
  name: string;
  @Column({ type: 'int' })
  age: number;
  @Column({ type: 'varchar' })
  photo: string;
  // @OneToMany((type) => Photo, (photo) => photo.user)
  // photos: Photo[];
  @OneToOne((type) => Laptop, (user) => user.laptop)
  user: User;
  // @ManyToMany((type) => Follower, (user) => user.followers)
  // followers: Follower[];
}
