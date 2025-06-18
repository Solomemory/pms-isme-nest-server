import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  UseGuards,
  Query,
} from '@nestjs/common';
import { DictService } from './dict.service';
import { CreateDictTypeDto, GetDictTypeDto, UpdateDictTypeDto } from './dto';
import { JwtGuard } from '@/common/guards';
import { GetRolesDto } from '@/modules/role/dto';

@Controller('dict')
@UseGuards(JwtGuard)
export class DictController {
  constructor(private readonly dictService: DictService) {}

  @Post('type')
  createDictType(@Body() createDictTypeDto: CreateDictTypeDto) {
    return this.dictService.createDictType(createDictTypeDto);
  }

  @Get('type')
  findAllDictType(@Query() query: GetDictTypeDto) {
    return this.dictService.findAllDictType(query);
  }

  @Get(':id')
  findOneDictType(@Param('id') id: number) {
    return this.dictService.findOneDictType(id);
  }

  @Patch(':id')
  updateDictType(@Param('id') id: number, @Body() updateDictTypeDto: UpdateDictTypeDto) {
    return this.dictService.updateDictType(id, updateDictTypeDto);
  }

  @Delete(':id')
  removeDictType(@Param('id') id: number) {
    return this.dictService.removeDictType(id);
  }
}
