import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['localhost:9092', 'localhost:9093', 'localhost:9094'],
        },
        consumer: {
          groupId: 'auth-consumer',
        },
      },
    },
  );
  app.listen();
}
bootstrap();
