import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestController } from './app.test.controller';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { ProductModule } from './product/product.module';
import { Laptop } from './user/entities/laptop.entity';
import { Photo } from './user/entities/photo.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'nt9',
      entities: [User, Laptop, Photo],
      synchronize: true,
      // logging: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', './src/uploads'),
    }),
    UserModule,
    ProductModule,
    AuthModule,
  ],
  controllers: [AppController, TestController],
  providers: [AppService],
})
export class AppModule {}
