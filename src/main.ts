import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as config from 'config';
import { ServerConfig } from './typings';

async function bootstrap() {
  const serverConfig: ServerConfig = config.get('server');
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT || serverConfig.port;
  await app.listen(port);
  logger.log(`Application listening on port ${port}`);

  if (process.env.NODE_ENV === 'development') {
    app.enableCors();
    logger.log(`Application running on development mode. CORS enabled.`);
  }
}
bootstrap();
