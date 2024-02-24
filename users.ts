import {Column, Entity, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column("varchar", { length: 255 })
  email: string

  @Column("varchar", { length: 255 })
  password: string

  @Column()
  creation_timestamp: string

  @Column()
  modification_timestamp: string
}
