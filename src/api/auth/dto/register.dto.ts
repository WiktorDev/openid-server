import { IsEmail, IsStrongPassword, Length } from "class-validator";

export class RegisterDto {
  @IsEmail()
  email: string

  @Length(3, 16)
  username: string

  @IsStrongPassword()
  password: string
}
