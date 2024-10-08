import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAuthDto {
  @IsNotEmpty()
  @IsString()
  login: string;
  @IsNotEmpty()
  @IsString()
  password: string;
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  photo: string;
  @IsNotEmpty()
  age: number;
}
