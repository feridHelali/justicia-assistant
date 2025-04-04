import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('articles') // Table name
export class Article {
  @PrimaryGeneratedColumn()
  id!: number; // Auto-incremented unique identifier

  @Column({ type: 'varchar' })
  label!: string; 
}
