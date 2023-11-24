import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { User } from './models/user.model';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DATABASE_HOST') || 'localhost',
        port: configService.get<number>('DATABASE_PORT') || 3306,
        username: configService.get('DATABASE_USER'),
        password: configService.get('DATABASE_PASS') || null,
        database: configService.get('DATABASE_NAME'),
        entities: [User],
        synchronize: true,
      }),
      inject: [ConfigService],
      dataSourceFactory: async (options) => {
        return await new DataSource(options).initialize();
      },
    }),
  ],
})
export class DatabaseModule {}
