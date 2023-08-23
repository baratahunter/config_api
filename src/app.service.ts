import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }

  getConfig(): string {
    return fs.readFileSync('config/default.json', 'utf8');
  }

}
