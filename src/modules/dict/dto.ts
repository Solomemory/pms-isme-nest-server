import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateDictDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly value: string;

  @IsString()
  @IsOptional()
  readonly description?: string;
}

export class UpdateDictDto {
  @IsString()
  @IsOptional()
  readonly name?: string;

  @IsString()
  @IsOptional()
  readonly value?: string;

  @IsString()
  @IsOptional()
  readonly description?: string;
}