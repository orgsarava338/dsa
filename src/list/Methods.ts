import Node from "./singly-linked-list/Node";

export interface NodeMethods<T> {
  toArray(): T[];
  print(): void;
}

export interface ListMethods<T> {
  size: number;

  append(value: T): void;
  prepend(value: T): void;
  insertAfter(after: T, value: T): void;
  insertBefore(before: T, value: T): void;
  find(value: T): Node<T> | null;
  delete(value: T): void;
  clear(): void;
  isEmpty(): Boolean;
  toArray(): T[];
  getHead(): T | null | undefined;
  getTail(): T | null | undefined;
  reverse(): void;
  print(): void;
}
