import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Procedure } from './Procedure'; // Adjust the path as needed
import { Affair } from './Affair'; // Adjust the path as needed

@Entity('schedules') // Table name
export class Schedule {
  @PrimaryGeneratedColumn()
  id!: number; // Auto-incremented unique identifier

  @Column({ type: 'date' })
  createdDate!: Date; // تاريخ الإنشاء (created date)

  @Column({ type: 'date' })
  dueDate!: Date; // تاريخ الاستحقاق (due date)

  @Column({ type: 'varchar', default: false })
  status!: boolean; // حالة الجدول (schedule status)

  @Column({type:"boolean", default:false})
  isResolved?: boolean; 

  
  @ManyToOne(() => Procedure, (procedure) => procedure.schedules, { onDelete: 'CASCADE', nullable: true })
  procedure!: Procedure; // Each schedule may relate to one procedure (nullable)
  
  @ManyToOne(() => Affair, (affair) => affair.schedules, { onDelete: 'CASCADE' })
  affair!: Affair; // Each schedule belongs to one case
}
