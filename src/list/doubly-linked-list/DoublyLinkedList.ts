import Node from "./Node";
import { ListMethods } from "../Methods";

export default class DoublyLinkedList<T> implements ListMethods<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  size: number;

  constructor(value?: T, head = null) {
    this.head = this.tail = new Node(value);
    this.size = 1;
  }

  append(value: T): void {
    const node = new Node(value);
    if (this.isEmpty()) this.head = this.tail = node;
    else {
      node.prev = this.tail;
      if (this.tail) this.tail.next = node;
      this.tail = node;
    }
    this.size++;
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
    this.head = this.tail = null;
    this.size = 0;
  }

  isEmpty = (): Boolean => this.head === null && this.tail === null;

  getHead = (): T | null | undefined => this.head?.value;
  getTail = (): T | null | undefined => this.tail?.value;

  toArray(): T[] {
    const array: T[] = [];
    if (this.isEmpty()) return array;
    else {
      let current = this.head;
      while (current) {
        array.push(current.value!);
        current = current.next;
      }
    }
    return array;
  }

  reverse(): void {
    throw new Error("Method not implemented.");
  }

  print(): void {
    console.log({ list: this.toArray(), size: this.size });
  }
}
