/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: string;
  @Column({ type: 'varchar' })
  fileUrl: string;
  @ManyToOne((type) => User, (user) => user.photos)
  user: User;
}
