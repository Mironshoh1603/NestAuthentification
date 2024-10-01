import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { UserService } from './user.services';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Get()
    @HttpCode(201)
    getUsers() {
        return this.userService.returnUsers();
    }

    @Post()
    addUser(@Body() user: any) {
        return this.userService.add(user);
    }
}
