import { IsNotEmpty } from 'class-validator';

export class AuthCredentialsDto {
  username: string;

  @IsNotEmpty()
  password: string;
}
