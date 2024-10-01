import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  returnString(): string {
    return 'Hello Najot!';
  }
}
