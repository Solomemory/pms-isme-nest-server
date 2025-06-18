import { Column, Entity, OneToMany } from 'typeorm';
import { CommonEntity } from '@/common/entity/common.entity';
import { DictData } from '@/modules/dict/dict-data.entity';

@Entity()
export class DictType extends CommonEntity {
  /**
   * 字典名称
   */
  @Column({ unique: true })
  dictName: string;

  /**
   * 字典类型
   */
  @Column({ unique: true })
  dictType: string;
  /**
   * 描述
   */
  @Column({ default: '' })
  description: string;

  /**
   * 启用
   */
  @Column({ default: true })
  enable: boolean;

  /**
   * 字典数据
   */
  @OneToMany(() => DictData, (dictData) => dictData.dictType)
  dictData: DictData[];
}
