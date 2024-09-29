import { Nullable } from "@core/common/type";

export class {Entity} {
  public readonly id: number;

  public readonly createdAt: Date;

  public updatedAt: Date;

  public deletedAt: Nullable<Date>;

  public constructor(payload: CreatePayload) {
    this.id = payload.id;
    this.createdAt = payload.createdAt;
    this.updatedAt = payload.updatedAt;
    this.deletedAt = payload.deletedAt;
  }

  public update(payload: any): {Entity} {
    this.updatedAt = new Date();

    return this;
  }

  public delete(): {Entity} {
    this.deletedAt = new Date();

    return this;
  }
}

type CreatePayload = {
  id: {Entity}["id"];
  createdAt: {Entity}["createdAt"];
  updatedAt: {Entity}["updatedAt"];
  deletedAt: {Entity}["deletedAt"];
}
