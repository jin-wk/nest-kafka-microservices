import { Injectable } from '@nestjs/common';
import { GetUserDto } from './get-user.dto';

@Injectable()
export class AppService {
  private readonly users: any[] = [
    {
      userId: '123',
      stripeUserId: '43234',
    },
    {
      userId: '345',
      stripeUserId: '27279',
    },
  ];

  getHello(): string {
    return 'Hello World!';
  }

  getUser(getUserDto: GetUserDto) {
    return this.users.find((user) => user.userId === getUserDto.userId);
  }
}
