export class Assert {
  public static isTrue(expression: boolean, exception: Error): asserts expression is true {
    if (!expression) {
      throw exception;
    }
  }

  public static isFalse(expression: boolean, exception: Error): asserts expression is false {
    if (expression) {
      throw exception;
    }
  }

  public static notEmpty<T>(value: T | null | undefined, exception: Error): asserts value is T {
    if (value === null || value === undefined) {
      throw exception;
    }
  }

  public static notNull<T>(value: T | null, exception: Error): asserts value is T {
    if (value === null) {
      throw exception;
    }
  }

  public static isEmpty<T>(value: T | null | undefined, exception: Error): asserts value is null | undefined {
    if (value !== null && value !== undefined) {
      throw exception;
    }
  }
}
