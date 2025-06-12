import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { DictService } from './dict.service';
import { CreateDictDto } from './dto';
import { UpdateDictDto } from './dto';

@Controller('dict')
export class DictController {
  constructor(private readonly dictService: DictService) {}

  @Post()
  create(@Body() createDictDto: CreateDictDto) {
    return this.dictService.create(createDictDto);
  }

  @Get()
  findAll() {
    return this.dictService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.dictService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateDictDto: UpdateDictDto) {
    return this.dictService.update(id, updateDictDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.dictService.remove(id);
  }
}