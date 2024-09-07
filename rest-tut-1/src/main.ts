import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Request, Response, NextFunction } from 'express';

// Global Middlewares
function globalMiddleWareOne(req: Request, res: Response, next: NextFunction) {
  console.log('This is the global middleware no 1');
  next();
}

function globalMiddleWareTwo(req: Request, res: Response, next: NextFunction) {
  console.log('This is the global middleware no 2');
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // register middlewares
  app.use(globalMiddleWareOne);
  app.use(globalMiddleWareTwo);
  await app.listen(3000);
}
bootstrap();
