import { Module } from '@nestjs/common';
import { DictController } from './dict.controller';
import { DictService } from './dict.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DictType } from '@/modules/dict/dict-type.entity';
import { DictData } from '@/modules/dict/dict-data.entity';
// 假设这里还需要导入数据库模块或提供者

@Module({
  imports: [TypeOrmModule.forFeature([DictType, DictData])],
  controllers: [DictController],
  providers: [DictService],
})
export class DictModule {}
