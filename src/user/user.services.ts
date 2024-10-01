import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private readonly users = [];

  returnUsers(): any {
    return this.users;
  }
  add(user: any) {
    this.users.push(user);
  }
}
