import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  findAll() {
    return this.userService.findAll();
  }
  @Post()
  createUser(@Body() userCreateDto: CreateUserDto) {
    console.log(userCreateDto);

    return this.userService.create(userCreateDto);
  }
}
