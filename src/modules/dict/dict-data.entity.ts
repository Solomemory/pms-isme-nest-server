import { Column, Entity, ManyToMany, ManyToOne } from 'typeorm';
import { CommonEntity } from '@/common/entity/common.entity';
import { User } from '@/modules/user/user.entity';
import { DictType } from '@/modules/dict/dict-type.entity';

@Entity()
export class DictData extends CommonEntity {
  /**
   * 字典标签
   */
  @Column({ unique: true })
  dictLabel: string;

  /**
   * 字典值
   */
  @Column({ unique: true })
  dictValue: string;

  /**
   * 排序
   */
  @Column()
  sort: number;

  /**
   * 启用
   */
  @Column({ default: true })
  enable: boolean;

  /**
   * 描述
   */
  @Column()
  description: string;

  /**
   * 字典类型
   */
  @ManyToOne(() => DictType, (dictType) => dictType.dictType, {
    createForeignKeyConstraints: false,
  })
  dictType: DictType;
}
