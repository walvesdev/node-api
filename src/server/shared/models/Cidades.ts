import {IsNotEmpty, IsNumber, IsPositive, IsString, MinLength} from "class-validator";

export class Cidade {

  @IsPositive({ message: "O Id precisa ser maior que 0." })
  @IsNumber(undefined, { message: "O Id precisa ser do tipo inteiro." })
  id!: number;

  @IsNotEmpty({ message: "O nome precisa ser informado." })
  @IsString({ message: "O nome precisa ser do tipo string." })
  nome!: string;
}