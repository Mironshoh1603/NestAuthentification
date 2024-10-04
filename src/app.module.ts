import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestController } from './app.test.controller';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: '1234',
      username: 'postgres',
      entities: [User],
      database: 'nt9',
      synchronize: true,
      // logging: true,
    }),
    UserModule,
    ProductModule,
  ],
  controllers: [AppController, TestController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
