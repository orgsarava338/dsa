import Stack from ".";

export default interface IStack<T> {
  elements: T[];

  push(element: T | T[]): void;
  pop(): T | undefined;
  peek(): T | undefined;
  peekAt(index: number): T | undefined;
  isEmpty(): boolean;
  size(): number;
  clear(): void;
  toArray(): T[];
  search(element: T): number;
  contains(element: T): boolean;
  duplicate(): Stack<T>;
  toArrayReversed(): T[];
}
