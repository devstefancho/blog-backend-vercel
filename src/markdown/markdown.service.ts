import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { marked } from 'marked';
import matter from 'gray-matter';

@Injectable()
export class MarkdownService {
  async parseMarkdownFile(
    filePath: string,
  ): Promise<{ html: string; frontmatter: any }> {
    const fullPath = path.join(
      process.cwd(),
      'data',
      'content',
      `${filePath}.md`,
    );
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const parsedMarkdown = matter(fileContents);

    return {
      html: marked(parsedMarkdown.content) as string,
      frontmatter: parsedMarkdown.data,
    };
  }

  async parseNvimMarkdownFileFromOpenWiki(
    filePath: string,
  ): Promise<{ html: string; frontmatter: any }> {
    const fullPath = path.join(
      process.cwd(),
      'data/blog/areas/nvim',
      `${filePath}.md`,
    );
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const parsedMarkdown = matter(fileContents);

    return {
      html: marked(parsedMarkdown.content) as string,
      frontmatter: parsedMarkdown.data,
    };
  }
}
