import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}
  async create(createAuthDto: CreateAuthDto) {
    console.log(createAuthDto);
    const user = this.userRepository.create();
    user.login = createAuthDto.login;
    user.password = await bcrypt.hash(createAuthDto.password, 10);
    user.name = createAuthDto.name;
    user.photo = createAuthDto.name;
    user.age = createAuthDto.age;
    await this.userRepository.save(user);
    console.log(user);
    return 'You are registed';
  }
  async login(loginDto: { login: string; password: string }) {
    const user = await this.userRepository.findOneBy({ login: loginDto.login });
    if (!user) {
      throw new NotFoundException('User topilmadi');
    }
    const checkPass = await bcrypt.compare(loginDto.password, user.password);

    console.log(user, checkPass);
    if (!checkPass) {
      throw new NotFoundException('Password xato');
    }

    const payload = { id: user.id, login: user.login };
    const token = await this.jwtService.sign(payload);
    //  user.password=undefined
    const { password, ...userdata } = user;
    return { userdata, token };
  }

  async getAllMyData(payload: any) {
    const user = await this.userRepository.findOneBy({ id: payload.id });
    return user;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
