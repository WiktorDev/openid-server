import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from "@nestjs/passport";
import { DatabaseModule } from "../../database/database.module";
import { LocalStrategy } from "../../common/strategies/local.strategy";

@Module({
  imports: [
    DatabaseModule,
    PassportModule.register({
      session: true
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
