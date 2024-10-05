import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestController } from './app.test.controller';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { ProductModule } from './product/product.module';
import { Laptop } from './user/entities/laptop.entity';
import { Photo } from './user/entities/photo.entity';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { join, extname } from 'path';
import { existsSync, mkdirSync } from 'fs';

const uploadDir = join(process.cwd(), './src/uploads');

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: (req, file, cb) => {
          cb(null, uploadDir);
        },
        filename: (req, file, cb) => {
          const ext = extname(file.originalname);
          const filename = `${Date.now()}${ext}`;
          cb(null, filename);
        },
      }),
      fileFilter: (req, file, cb) => {
        if (file.mimetype === 'image/jpeg') {
          console.log(file);
          cb(null, true);
        } else {
          cb(new Error('Only images are allowed...'), false);
        }
      },
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'nt9',
      entities: [User, Laptop, Photo],
      synchronize: true,
    }),
    UserModule,
    ProductModule,
  ],
  controllers: [AppController, TestController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  onModuleInit() {
    // Ensure the upload directory exists
    if (!existsSync(uploadDir)) {
      mkdirSync(uploadDir, { recursive: true });
      console.log(`Created upload directory at: ${uploadDir}`);
    }
  }
}
