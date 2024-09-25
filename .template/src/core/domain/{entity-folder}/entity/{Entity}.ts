export class {Entity} {
  public readonly id: number;

  public readonly createdAt: Date;

  public updatedAt: Date;

  public deletedAt: Date

  private constructor({entity}: {Entity}) {
    Object.assign(this, {entity});
  }

  public static create({entity}: {Entity}): {Entity} {
    return new {Entity}({entity});
  }

  public update(payload: any): {Entity} {
    this.updatedAt = new Date();

    return this
  }
  
  public delete(): {Entity} {
    this.deletedAt = new Date();

    return this;
  }
}