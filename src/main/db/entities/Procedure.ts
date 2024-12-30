import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Affair } from './Affair'; // Adjust the path as needed
import { Schedule } from './Schedule';

@Entity('procedures') // Table name
export class Procedure {
  @PrimaryGeneratedColumn()
  id!: number; // Auto-incremented unique identifier

  @Column({ type: 'int' })
  orderInCase!: number; // عدد الإجراء (order in the case)

  @Column({ type: 'varchar', length: 255 })
  action!: string; // الإجراء (procedure)

  @Column({ type: 'date' })
  actionDate!: Date; // تاريخ الإجراء (action date)

  @Column({ type: 'text' })
  actionText!: string; // نص الإجراء (action text)

  @ManyToOne(() => Affair, (affair) => affair.procedures, { onDelete: 'CASCADE' })
  affair!: Affair; // Many procedures belong to one case

  @OneToMany(() => Schedule, (schedule) => schedule.procedure, { cascade: true })
  schedules?: Schedule[]; // A procedure can have multiple schedules
}
