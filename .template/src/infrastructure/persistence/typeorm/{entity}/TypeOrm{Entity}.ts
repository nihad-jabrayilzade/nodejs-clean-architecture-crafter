import { Nullable } from "@core/common/type";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique, OneToOne } from "typeorm";

@Entity("{Entity}Tbl")
export class TypeOrm{Entity} {
  @PrimaryGeneratedColumn("increment", {
    type: "bigint",
    unsigned: true,
  })
  id: number;
}
