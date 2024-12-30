# Here are the Arabic properties translated into English for development purposes:

```text
المحكمة → Court
قضية → Case
المادّة → Article
طور القضية → Case Stage
عدد القضية → Case Number
السنة → Year
الموضوع → Subject
الملاحظات → Notes
القرار → Decision
```

Here's the Affair entity implemented using TypeORM with TypeScript. Each property is defined with an appropriate TypeScript type and TypeORM decorator.

```typescript
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('affairs') // Table name
export class Affair {
  @PrimaryGeneratedColumn()
  id: number; // Auto-incremented unique identifier

  @Column({ type: 'varchar', length: 255 })
  court: string; // المحكمة

  @Column({ type: 'varchar', length: 255 })
  case: string; // قضية

  @Column({ type: 'varchar', length: 255 })
  article: string; // المادّة

  @Column({ type: 'varchar', length: 255 })
  caseStage: string; // طور القضية

  @Column({ type: 'varchar', length: 50 })
  caseNumber: string; // عدد القضية

  @Column({ type: 'int' })
  year: number; // السنة

  @Column({ type: 'text' })
  subject: string; // الموضوع

  @Column({ type: 'text', nullable: true })
  notes?: string; // الملاحظات

  @Column({ type: 'text', nullable: true })
  decision?: string; // القرار
}
```

## *Explanation*:
*Entity Name*: The table is named affairs. You can change this as per your database schema.
*Primary Key*: id is used as the primary key with auto-increment.

## Columns:
court, case, article, caseStage, and caseNumber are strings (varchar with a max length).
year is an integer.
subject, notes, and decision are text for longer content. Both notes and decision are optional (nullable: true).
Optional Fields: notes and decision are marked as optional in TypeScript (?) and nullable in the database.
This entity is ready to use with TypeORM.