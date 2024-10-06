import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  findAll() {
    return this.userService.findAll();
  }
  @Post()
  @UseInterceptors(
    FileInterceptor('photo', {
      storage: diskStorage({
        destination: './src/uploads/users',
        filename(req, file, callback) {
          const fileName = `${Math.round(Math.random() * 1e6)}_${Date.now()}_${file.originalname}`;
          callback(null, fileName);
        },
      }),
    }),
  )
  createUser(
    @UploadedFile() file: Express.Multer.File,
    @Body() userCreateDto: CreateUserDto,
  ) {
    console.log(userCreateDto, file);
    if (file) userCreateDto.photo = file.filename;

    return this.userService.create(userCreateDto);
  }
}
