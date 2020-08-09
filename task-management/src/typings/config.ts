import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

export interface ServerConfig {
  port: number;
  origin: CorsOptions['origin'];
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
