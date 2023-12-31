import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';
import { IsDriverAlreadyExist } from 'src/validators/IsDriverAlreadyExist.validator';

export class CreateDriverDto {
  @IsNotEmpty({ message: 'name cannot be empty' })
  @ApiProperty()
  name: string;

  @IsNotEmpty({ message: 'cpf cannot be empty' })
  @Length(11, 11, { message: 'cpf invalid' })
  @IsDriverAlreadyExist({ message: 'cpf is already registered' })
  @ApiProperty()
  document: string;
}
