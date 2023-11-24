import { Module } from '@nestjs/common';
import { OidcModule } from './oidc/oidc.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [OidcModule, AuthModule],
})
export class ApiModule {}
