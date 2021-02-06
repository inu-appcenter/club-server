import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  studentId: string;

  @Column()
  nickName: string;

  @Column({ default: 0 })
  age: number;
}
