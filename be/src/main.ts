import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(process.env.CLIENT_URL);
  app.enableCors({
    origin: process.env.CLIENT_URL,
    methods: 'GET,PATCH,POST,DELETE',
  });
  await app.listen(3000);
}
bootstrap();
