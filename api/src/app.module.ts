import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'BILLING_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'billing',
            brokers: ['localhost:9092', 'localhost:9093', 'localhost:9094'],
          },
          consumer: {
            groupId: 'billing-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
