import { Nullable, NumericString } from "@core/common/type";
import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

@Entity("UserTransactionsTbl")
export class TypeOrmUserTransaction {
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
