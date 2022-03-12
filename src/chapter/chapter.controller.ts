import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ChapterService } from './chapter.service';
import { CreateChapterDto } from './dto/create-chapter.dto';
import { UpdateChapterDto } from './dto/update-chapter.dto';

@ApiTags('chapter')
@Controller('chapter')
export class ChapterController {
  constructor(private readonly chapterService: ChapterService) {}

  @Get()
  findAll() {
    return this.chapterService.findAll();
  }
  @Get(':NODE_ID')
  findOne(@Param('NODE_ID') NODE_ID: string) {
    return this.chapterService.findOne(NODE_ID);
  }

}
