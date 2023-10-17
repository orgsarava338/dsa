import Stack from ".";

export default interface IStack<T> {
  readonly elements: T[];

  isInstanceOf(classToCheck: { new (): any }): Boolean;
  push(element: T | T[]): void;
  pop(): T | undefined;
  peek(): T | undefined;
  peekAt(index: number): T | undefined;
  search(element: T): number;
  contains(element: T): boolean;
  clone(): Stack<T>;
  toArrayReversed(): T[];
  isEmpty(): Boolean;
  clear(): void;
  toArray(): T[];
  reverse(): void;
  print(): void;
}
