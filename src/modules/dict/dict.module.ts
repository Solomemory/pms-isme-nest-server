import { Module } from '@nestjs/common';
import { DictController } from './dict.controller';
import { DictService } from './dict.service';
// 假设这里还需要导入数据库模块或提供者

@Module({
  controllers: [DictController],
  providers: [DictService],
})
export class DictModule {}
