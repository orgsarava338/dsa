import Stack from ".";
import CommonMethods from "../CommonMethds";

export default interface IStack<T> extends CommonMethods<T>{
  elements: T[];

  push(element: T | T[]): void;
  pop(): T | undefined;
  peek(): T | undefined;
  peekAt(index: number): T | undefined;
  search(element: T): number;
  contains(element: T): boolean;
  clone(): Stack<T>;
  toArrayReversed(): T[];
}
