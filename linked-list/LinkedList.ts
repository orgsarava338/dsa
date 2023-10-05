import { nextTick } from "process";
import Node from "./Node";

interface ILinkedList<T> {
  head: Node<T> | null;
  size: number;

  append(value: T): void;
  delete(value: T): void;
  toArray(): T[];
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

  delete(value: T): void {
    if (!this.head) return;

    let current = this.head;
    let prev = null;
    while (current) {
      if (current.value === value) {
        prev ? (prev.next = current.next) : (this.head = current.next!);
        this.size--;
        return;
      }
      prev = current;
      current = current.next!;
    }
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

  print(): void {
    console.log({ list: this.toArray(), size: this.size });
  }
}
