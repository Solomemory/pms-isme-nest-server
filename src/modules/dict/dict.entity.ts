import { Entity } from 'typeorm';

@Entity()
export class Dict {
  id: number;
  name: string;
  value: string;
  description?: string;
}
