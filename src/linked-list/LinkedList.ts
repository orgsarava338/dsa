import Node from "./Node";

interface ILinkedList<T> {
  head: Node<T> | null;
  size: number;

  append(value: T): void;
  prepend(value: T): void;
  insertAfter(value: T): void;
  insertBefore(value: T): void;
  find(value: T): Node<T>;
  delete(value: T): void;
  clear(): void;
  isEmpty(): Boolean;
  toArray(): T[];
  getHead(): T | null | undefined;
  getTail(): T | null | undefined;
  reverse(): void;
  print(): void;
}

export default class LinkedList<T> implements ILinkedList<T> {
  head: Node<T> | null;
  size: number;

  constructor(value?: T) {
    this.head = new Node(value);
    this.size = 1;
  }

  append(value: T): void {
    const node = new Node(value);
    if (!this.head) this.head = node;
    else {
      let current = this.head;
      while (current.next) {
        current = current.next!;
      }
      current.next = node;
    }

    this.size++;
  }

  prepend(value: T): void {
    throw new Error("Method not implemented.");
  }
  insertAfter(value: T): void {
    throw new Error("Method not implemented.");
  }
  insertBefore(value: T): void {
    throw new Error("Method not implemented.");
  }
  find(value: T): Node<T> {
    throw new Error("Method not implemented.");
  }

  delete(value: T): void {
    if (!this.head) return;

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next?.next!;
        this.size--;
        return;
      }
      current = current.next!;
    }
  }

  clear(): void {
    throw new Error("Method not implemented.");
  }
  isEmpty(): Boolean {
    throw new Error("Method not implemented.");
  }

  getHead = (): T | null | undefined => this.head?.value;

  getTail(): T | null | undefined {
    if (!this.head) return null;
    let current = this.head;
    while (current.next) {
      current = current.next!;
    }
    return current.value;
  }

  toArray(): T[] {
    const array: T[] = [];
    if (!this.head) return array;
    let current = this.head;
    while (current) {
      array.push(current.value!);
      current = current.next!;
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
