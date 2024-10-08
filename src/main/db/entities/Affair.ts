// src\main\db\entities\Affair.ts
import { Column, Entity,  PrimaryGeneratedColumn } from "typeorm";

@Entity("Affair")
export class Affair {
  @PrimaryGeneratedColumn({ type: "integer", name: "affairID" })
  affairId!: number;

  @Column({ type: "text", name: "affairNumber", nullable: false })
  affairNumber!: string;

  @Column("text", { name: "title", nullable: false })
  title!: string;

  @Column("text", { name: "claimant", nullable: false })
  claimant!: string;

}