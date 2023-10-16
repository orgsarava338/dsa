import { IDList } from "../Interface";
import Node from "./Node";

export default class CircularDoublyLinkedList<T> implements IDList<T> {
  private _tail: Node<T> | null;
  private _head: Node<T> | null;
  private _size: number;

  constructor();
  constructor(value: T[]);
  constructor(value: T);
  constructor(value?: T | T[]) {
    if (Array.isArray(value))
      if (value.length === 0) {
        this._head = this._tail = null;
        this._size = 0;
      } else {
        let current = (this._head = new Node(value[0]));
        for (let i = 1; i < value.length; i++) {
          let node = new Node(value[i]);
          current.next = node;
          node.prev = current;
          current = node;
        }
        this._head.prev = this._tail = current;
        this._tail.next = this._head;
        this._size = value.length;
      }
    else if (value !== undefined) {
      const node = new Node(value);
      this._head = this._tail = node;
      this._head.next =
        this._tail.next =
        this._head.prev =
        this._tail.prev =
          node;
      this._size = 1;
    } else {
      this._head = this._tail = null;
      this._size = 0;
    }
  }

  get size() {
    return this._size;
  }

  get head() {
    return this._head;
  }

  get tail() {
    return this._tail;
  }

  isInstanceOf(classToCheck: { new (): any }): Boolean {
    return this instanceof classToCheck;
  }

  append(value: T): void {
    const node = new Node(value);

    if (!this._head) this._head = this._tail = node.next = node.prev = node;
    else {
      node.prev = this._tail;
      node.next = this._head;
      this._head.prev = this._tail!.next = this._tail = node;
    }

    this._size++;
  }

  prepend(value: T): void {
    const node = new Node(value);

    if (!this._head) this._head = this._tail = node.next = node.prev = node;
    else {
      node.next = this._head;
      node.prev = this._tail;
      this._head.prev = this._tail!.next = this._head = node;
    }
    this._size++;
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
    this._head = this._tail = null;
  }

  isEmpty(): Boolean {
    return this._head === null && this._size === 0;
  }

  toArray(): T[] {
    if (!this.head) return [];

    const array: T[] = [];

    let current = this._head;

    do {
      array.push(current?.value!);
      current = current?.next!;
    } while (current !== this._head);

    return array;
  }

  getHead(): T | null | undefined {
    return this._head ? this._head.value : null;
  }

  getTail(): T | null | undefined {
    throw new Error("Method not implemented.");
  }

  reverse(): void {
    throw new Error("Method not implemented.");
  }

  print(): void {
    console.log({ list: this.toArray(), size: this._size });
  }
}
