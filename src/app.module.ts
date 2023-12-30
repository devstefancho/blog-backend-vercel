import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarkdownController } from './markdown/markdown.controller';
import { MarkdownService } from './markdown/markdown.service';

@Module({
  imports: [],
  controllers: [AppController, MarkdownController],
  providers: [AppService, MarkdownService],
})
export class AppModule {}
