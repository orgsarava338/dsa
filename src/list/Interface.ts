import Node from "./singly-linked-list/Node";
import CommonMethods from "../CommonMethds";
export interface INode<T> {
  value: T | null;
  toArray(): T[];
  print(): void;
}

export interface IList<T> extends CommonMethods<T> {
  head: Node<T> | null;

  append(value: T): void;
  prepend(value: T): void;
  insertAfter(after: T, value: T): void;
  insertBefore(before: T, value: T): void;
  find(value: T): Node<T> | null;
  delete(value: T): void;
  getHead(): T | null | undefined;
  getTail(): T | null | undefined;
}
