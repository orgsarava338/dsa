import Node from "./Node";
import { ICSList } from "../Interface";

export default class CircularSinglyLinkedList<T> implements ICSList<T> {
  private _head: Node<T> | null;
  private _size: number;

  constructor();
  constructor(value: T);
  constructor(value: T[]);
  constructor(value?: T | T[]) {
    if (Array.isArray(value)) {
      if (value.length === 0) {
        this._head = null;
        this._size = 0;
      } else {
        let node = new Node(value[0]);
        let current = node;
        for (let i = 1; i < value.length; i++) {
          current.next = new Node(value[i]);
          current = current.next!;
        }
        this._head = current.next = node;
        this._size = value.length;
      }
    } else if (value !== undefined && value) {
      const node = new Node(value);
      this._head = node.next = node;
      this._size = 1;
    } else {
      this._head = null;
      this._size = 0;
    }
  }

  get size() {
    return this._size;
  }

  get head() {
    return this._head;
  }

  isInstanceOf(classToCheck: { new (): any }): Boolean {
    return this instanceof classToCheck;
  }

  append(value: T): void {
    const node = new Node(value);
    if (!this._head) this._head = node.next = node;
    else if (this._head.next === this._head) {
      node.next = this._head;
      this._head.next = node;
    } else {
      let current = this._head;
      do {
        // console.log(current.toArray());
        current = current.next!;
        if (current === this._head) {
          node.next = this._head;
          current = node;
        }
      } while (current.next !== this._head);
    }
    this._size++;
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
    this._head = null;
    this._size = 0;
  }

  isEmpty(): Boolean {
    return this._head === null;
  }

  toArray(): T[] {
    if (!this._head) return [];
    const array: T[] = [];
    let current = this._head;
    do {
      array.push(current.value!);
      current = current.next!;
    } while (current !== this._head);
    return array;
  }

  getHead(): T | null | undefined {
    return this._head?.value;
  }

  getTail(): T | null | undefined {
    if (!this._head) return null;
    let current = this._head;
    do {
      current = current.next!;
    } while (current?.next !== this._head);
    return current.value;
  }

  reverse(): void {
    throw new Error("Method not implemented.");
  }

  print(): void {
    console.log({ list: this.toArray(), size: this._size });
  }
}
