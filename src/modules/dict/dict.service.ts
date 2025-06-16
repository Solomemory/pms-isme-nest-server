import { Injectable } from '@nestjs/common';
import { CreateDictTypeDto, UpdateDictTypeDto } from '@/modules/dict/dto';
import { DictType } from '@/modules/dict/dict-type.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DictService {
  @InjectRepository(DictType)
  private dictTypeRepository: Repository<DictType>;
  private dictDataRepository: Repository<DictType>;
  createDictType(createDictTypeDto: CreateDictTypeDto) {
    return this.dictTypeRepository.create(createDictTypeDto);
  }

  findAllDictType() {
    return this.dictTypeRepository.find();
  }

  findOneDictType(id: number) {
    return this.dictTypeRepository.findOne({ where: { id } });
  }

  updateDictType(id: number, updateDictTypeDto: UpdateDictTypeDto) {
    return this.dictTypeRepository.update(id, updateDictTypeDto);
  }

  removeDictType(id: number) {
    return this.dictTypeRepository.delete(id);
  }
}
