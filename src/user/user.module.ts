import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Laptop } from './entities/laptop.entity';
import { Photo } from './entities/photo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Laptop, Photo])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
