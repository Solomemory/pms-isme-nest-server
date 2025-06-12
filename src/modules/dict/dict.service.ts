import { Injectable } from '@nestjs/common';
import { CreateDictDto, UpdateDictDto } from '@/modules/dict/dto';
import { Dict } from '@/modules/dict/dict.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DictService {
  @InjectRepository(Dict)
  private dictRepository: Repository<Dict>;
  create(createDictDto: CreateDictDto) {
    return this.dictRepository.create(createDictDto);
  }

  findAll() {
    return this.dictRepository.find();
  }

  findOne(id: number) {
    return this.dictRepository.findOne({ where: { id } });
  }

  update(id: number, updateDictDto: UpdateDictDto) {
    return this.dictRepository.update(id, updateDictDto);
  }

  remove(id: number) {
    return this.dictRepository.delete(id);
  }
}
