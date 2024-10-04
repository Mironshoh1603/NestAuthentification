/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Photo } from './photo.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;
  @Column({ type: 'varchar' })
  name: string;
  @Column({ type: 'int' })
  age: number;
  @OneToMany((type) => Photo, (photo) => photo.user)
  photos: Photo[];
}
