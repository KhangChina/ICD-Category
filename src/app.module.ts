import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChapterModule } from './chapter/chapter.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [ChapterModule, CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
