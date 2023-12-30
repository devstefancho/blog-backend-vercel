import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getJsonList(): any {
    try {
      const filePath = path.join(process.cwd(), 'data/blog_list.json');
      const fileContents = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(fileContents);
    } catch (error) {
      throw new Error('Unable to read json_list.json');
    }
  }
}
