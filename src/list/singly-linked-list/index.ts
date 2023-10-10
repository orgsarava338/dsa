import Node from "./Node";
import { IList } from "../Interface";

export default class SinglyLinkedList<T> implements IList<T> {
  head: Node<T> | null;
  size: number;

  constructor();
  constructor(value: T);
  constructor(value: T[]);
  constructor(value?: T | T[]) {
    if (Array.isArray(value)) {
      if (value.length === 0) {
        this.head = null;
        this.size = 0;
      } else {
        let node = new Node(value[0]);
        let current = node;
        for (let i = 1; i < value.length; i++) {
          current.setNext(new Node(value[i]));
          current = current.next!;
        }
        this.head = node;
        this.size = value.length;
      }
    } else if (value !== undefined) {
      this.head = new Node(value);
      this.size = 1;
    } else {
      this.head = null;
      this.size = 0;
    }
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
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  insertAfter(after: T, value: T): void {
    const node = new Node(value);
    let current = this.head;
    while (current) {
      if (current.value === after) {
        node.next = current.next;
        current.next = node;
        break;
      }
      current = current.next;
    }
    this.size++;
  }

  insertBefore(before: T, value: T): void {
    const node = new Node(value);

    let prev = null;
    let current = this.head;

    while (current) {
      if (current.value === before) {
        if (prev) {
          node.next = current;
          prev.next = node;
        } else {
          node.next = current;
          this.head = node;
        }
        break;
      }
      prev = current;
      current = current.next;
    }
    this.size++;
  }

  find(value: T): Node<T> | null {
    if (!this.head) return null;
    let current = this.head;
    while (current) {
      if (current.value === value) return current;
      current = current.next!;
    }
    return null;
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
    this.head = null;
    this.size = 0;
  }

  isEmpty = (): Boolean => this.head === null;

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
    let prev = null,
      next = null,
      current = this.head;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  print(): void {
    console.log({ list: this.toArray(), size: this.size });
  }
}
