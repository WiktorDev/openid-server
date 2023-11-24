import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    DatabaseModule,
    ApiModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CommonModule
  ],
})
export class AppModule {}
