import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export interface ServerConfig {
  port: number;
}

export interface DBConfig {
  type: 'postgres';
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  synchronize: boolean;
}

export interface JWTConfig {
  secret: string;
  expiresIn: number;
}
