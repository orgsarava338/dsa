export default interface CommonMethods<T> {
  readonly size: number;

  isInstanceOf(classToCheck: { new (): any }): Boolean;
  isEmpty(): Boolean;
  clear(): void;
  toArray(): T[];
  reverse(): void;
  print(): void;
}
