import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  public users: User[] = [
    {
      username: 'user1',
      password: 'qwerty',
      email: 'user1@gmail.com',
      age: 21,
    },
    {
      username: 'user1',
      password: 'qwerty',
      email: 'user1@gmail.com',
      age: 22,
    },
    {
      username: 'user1',
      password: 'qwerty',
      email: 'user1@gmail.com',
      age: 23,
    },
  ];

  getUserByUsername(userName: string) {
    return this.users.find((user: User) => user.username === userName);
  }
}
