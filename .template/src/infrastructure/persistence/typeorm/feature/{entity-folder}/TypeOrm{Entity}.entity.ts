import { Nullable, NumericString } from "@core/common/type";
import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

@Entity("{Entity}sTbl")
export class TypeOrm{Entity} {
  @PrimaryGeneratedColumn({
    type: "bigint",
  })
  id: NumericString;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Nullable<Date>;
}
