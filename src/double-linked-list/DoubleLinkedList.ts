import Node from "./Node";

interface IDoubleLinkedList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
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

export default class DoubleLinkedList<T> implements IDoubleLinkedList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  size: number;

  constructor(value: T, head = null) {
    this.head = new Node(value);
    this.tail = this.head;
    this.size = 1;
  }

  append(value: T): void {
    throw new Error("Method not implemented.");
  }
  prepend(value: T): void {
    throw new Error("Method not implemented.");
  }
  insertAfter(after: T, value: T): void {
    throw new Error("Method not implemented.");
  }
  insertBefore(before: T, value: T): void {
    throw new Error("Method not implemented.");
  }
  find(value: T): Node<T> | null {
    throw new Error("Method not implemented.");
  }
  delete(value: T): void {
    throw new Error("Method not implemented.");
  }
  
  clear(): void {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty = (): Boolean => this.head !== null && this.tail !== null;

  getHead = (): T | null | undefined => this.head?.value;
  getTail = (): T | null | undefined => this.tail?.value;

  toArray(): T[] {
    throw new Error("Method not implemented.");
  }
  reverse(): void {
    throw new Error("Method not implemented.");
  }
  print(): void {
    throw new Error("Method not implemented.");
  }
}
