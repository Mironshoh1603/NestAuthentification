import { IsInt, IsNotEmpty, IsString, Min, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  name: string;
  @IsNotEmpty()
  // @IsNumber()
  // @IsInt()
  // @Min(5)
  age: number;
  photo: string;
}
