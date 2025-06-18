import { Injectable } from '@nestjs/common';
import { CreateDictTypeDto, GetDictTypeDto, UpdateDictTypeDto } from '@/modules/dict/dto';
import { DictType } from '@/modules/dict/dict-type.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';

@Injectable()
export class DictService {
  @InjectRepository(DictType)
  private dictTypeRepository: Repository<DictType>;
  private dictDataRepository: Repository<DictType>;
  createDictType(createDictTypeDto: CreateDictTypeDto) {
    console.log(createDictTypeDto);
    return this.dictTypeRepository.save(createDictTypeDto);
  }

  async findAllDictType(query: GetDictTypeDto) {
    const pageSize = query.pageSize || 10;
    const pageNo = query.pageNo || 1;
    const [pageData, total] = await this.dictTypeRepository.findAndCount({
      where: {
        dictName: Like(`%${query.dictName || ''}%`),
        enable: query.enable || undefined,
      },
      // relations: { dictData: true },
      order: {
        dictName: 'DESC',
      },
      take: pageSize,
      skip: (pageNo - 1) * pageSize,
    });

    return { pageData, total };
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
