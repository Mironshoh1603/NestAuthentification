import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  create(@Body() createAuthDto: CreateAuthDto) {
    console.log(createAuthDto);

    return this.authService.create(createAuthDto);
  }
  @Post('login')
  async login(
    @Body() loginDto: { login: string; password: string },
    @Res() res: any,
  ) {
    console.log(loginDto);
    const data = await this.authService.login(loginDto);
    // console.log(data);

    res.status(200).json({ data });
  }

  @UseGuards(AuthGuard)
  @Get('me')
  getMyData(@Req() req: Request) {
    console.log(req['payload']);

    return this.authService.getAllMyData(req['payload']);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
