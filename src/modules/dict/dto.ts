import { IsString, IsOptional, IsNumber, IsNotEmpty, IsBoolean } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateDictTypeDto {
  @IsString()
  @IsNotEmpty({ message: '字典名称不能为空' })
  dictName: string;

  @IsString()
  @IsNotEmpty({ message: '字典类型不能为空' })
  dictType: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsBoolean()
  @IsOptional()
  enable?: boolean;
}

export class UpdateDictTypeDto {
  @IsString()
  @IsOptional()
  dictName?: string;

  @IsString()
  @IsOptional()
  dictType?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsBoolean()
  @IsOptional()
  enable?: boolean;
}

export class CreateDictDataDto {
  @IsString()
  @IsNotEmpty({ message: '字典标签不能为空' })
  dictLabel: string;

  @IsString()
  @IsNotEmpty({ message: '字典值不能为空' })
  dictValue: string;

  @IsNumber()
  @IsNotEmpty({ message: '字典顺序不能为空' })
  sort: number;

  @IsBoolean()
  @IsOptional()
  enable?: boolean;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsNotEmpty({ message: '字典类型不能为空' })
  dictTypeId: number;
}

export class UpdateDictDataDto extends PartialType(CreateDictDataDto) {}
