import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { GetUserDto } from './get-user.dto';
import { OrderCreatedEvent } from './order-created.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  handleOrderCreated(orderCreatedEvent: OrderCreatedEvent) {
    this.authClient
      .send('get_user', new GetUserDto(orderCreatedEvent.userId))
      .subscribe((user) => {
        console.log(
          `Billing user with stripe ID ${user.stripeUserId} a price of ${orderCreatedEvent.price}...`,
        );
      });
  }
}
