import { Module } from '@nestjs/common';
import { OidcModule } from './oidc/oidc.module';

@Module({
  imports: [OidcModule]
})
export class ApiModule {}
