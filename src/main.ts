import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // remove another key not in dto when post
    transform: true, //  when  console.log( createCoffeeDto instanceof CreateCoffeeDto) return true
    forbidNonWhitelisted: true, // send error when post with another key in dto
  }));
  console.log('start at 3000')
  await app.listen(3000);
}
bootstrap();
