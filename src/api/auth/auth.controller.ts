import { Controller, Get, Post, Render } from "@nestjs/common";

@Controller('auth')
export class AuthController {
  @Get()
  @Render('index')
  index() {}
}
