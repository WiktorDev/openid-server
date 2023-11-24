import { Body, Controller, Get, Post, Render, UseGuards } from "@nestjs/common";
import { RegisterDto } from './dto/register.dto';
import { LocalAuthGuard } from "../../common/guards/localAuth.guard";

@Controller('auth')
export class AuthController {
  @Render('index')
  @Get()
  index() {}

  @Post('register')
  async register(@Body() dto: RegisterDto) {
    return dto
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async logIn(@Body() dto: RegisterDto) {
    return {  };
  }
}
