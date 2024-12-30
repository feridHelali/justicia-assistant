// src\main\db\entities\Affair.ts
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Procedure } from "./Procedure";
import { Schedule } from "./Schedule";

@Entity("Affair")
export class Affair {
    @PrimaryGeneratedColumn({ type: "integer", name: "affairID" })
    affairId!: number;

    @Column({ type: 'varchar', length: 255 })
    court!: string; // المحكمة

    @Column({ type: 'varchar', length: 255 })
    case!: string; // قضية

    @Column({ type: 'varchar', length: 255 })
    article!: string; // المادّة

    @Column({ type: 'varchar', length: 255 })
    caseStage!: string; // طور القضية

    @Column({ type: 'varchar', length: 50 })
    caseNumber!: string; // عدد القضية

    @Column({ type: 'int' })
    year!: number; // السنة

    @Column({ type: 'text' })
    subject!: string; // الموضوع

    @Column({ type: 'text', nullable: true })
    notes?: string; // الملاحظات

    @Column({ type: 'text', nullable: true })
    decision?: string; // القرار

    @OneToMany(() => Procedure, (procedure) => procedure.affair, { cascade: true })
    procedures!: Procedure[]; // A case can have multiple procedures

    @OneToMany(() => Schedule, (schedule) => schedule.affair, { cascade: true })
    schedules?: Schedule[]; // A case can have multiple schedules
}

