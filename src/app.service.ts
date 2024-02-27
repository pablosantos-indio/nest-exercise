import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getWelcome(): string {
    return 'Welcome!';
  }

  getHello(): string {
    return 'Hello World!';
  }
}
