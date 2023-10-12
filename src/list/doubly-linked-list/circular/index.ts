import Node from "../Node";
import IList from "../Interface";

export default class CircularDoublyLinkedList<T> implements IList<T> {
  tail: Node<T> | null;
  head: Node<T> | null;
  size: number;

  constructor();
  constructor(value: T[]);
  constructor(valus: T);
  constructor(value?: T | T[]) {
    if (Array.isArray(value))
      if (value.length === 0) {
        this.head = this.tail = null;
        this.size = 0;
      } else {
      }
    else if (value !== undefined) {
      const node = new Node(value);
      this.head = this.tail = node;
      this.head.next = this.tail.next = this.head.prev = this.tail.prev = node;
    } else {
      this.head = this.tail = null;
      this.size = 0;
    }
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
    throw new Error("Method not implemented.");
  }
  isEmpty(): Boolean {
    throw new Error("Method not implemented.");
  }
  toArray(): T[] {
    throw new Error("Method not implemented.");
  }
  getHead(): T | null | undefined {
    throw new Error("Method not implemented.");
  }
  getTail(): T | null | undefined {
    throw new Error("Method not implemented.");
  }
  reverse(): void {
    throw new Error("Method not implemented.");
  }
  print(): void {
    throw new Error("Method not implemented.");
  }
}
