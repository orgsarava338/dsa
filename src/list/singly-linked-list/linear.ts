import Node from "./Node";
import { IList } from "../Interface";

export default class SinglyLinkedList<T> implements IList<T> {
  private _head: Node<T> | null;
  private _size: number;

  constructor();
  constructor(value: T[]);
  constructor(value: T);
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
        this._head = node;
        this._size = value.length;
      }
    } else if (value !== undefined) {
      this._head = new Node(value);
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
    if (!this._head) this._head = node;
    else {
      let current = this._head;
      while (current.next) {
        current = current.next!;
      }
      current.next = node;
    }
    this._size++;
  }

  prepend(value: T): void {
    const node = new Node(value);
    node.next = this._head;
    this._head = node;
    this._size++;
  }

  insertAfter(after: T, value: T): void {
    const node = new Node(value);
    let current = this._head;
    while (current) {
      if (current.value === after) {
        node.next = current.next;
        current.next = node;
        break;
      }
      current = current.next;
    }
    this._size++;
  }

  insertBefore(before: T, value: T): void {
    const node = new Node(value);

    let prev = null;
    let current = this._head;

    while (current) {
      if (current.value === before) {
        if (prev) {
          node.next = current;
          prev.next = node;
        } else {
          node.next = current;
          this._head = node;
        }
        break;
      }
      prev = current;
      current = current.next;
    }
    this._size++;
  }

  find(value: T): Node<T> | null {
    if (!this._head) return null;
    let current = this._head;
    while (current) {
      if (current.value === value) return current;
      current = current.next!;
    }
    return null;
  }

  delete(value: T): void {
    if (!this._head) return;

    if (this._head.value === value) {
      this._head = this._head.next;
      this._size--;
      return;
    }

    let current = this._head;
    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next?.next!;
        this._size--;
        return;
      }
      current = current.next!;
    }
  }

  clear(): void {
    this._head = null;
    this._size = 0;
  }

  isEmpty = (): Boolean => this._head === null;

  getHead = (): T | null | undefined => this._head?.value;

  getTail(): T | null | undefined {
    if (!this._head) return null;
    let current = this._head;
    while (current.next) {
      current = current.next!;
    }
    return current.value;
  }

  toArray(): T[] {
    const array: T[] = [];
    if (!this._head) return array;
    let current = this._head;
    while (current) {
      array.push(current.value!);
      current = current.next!;
    }
    return array;
  }

  reverse(): void {
    let prev = null,
      next = null,
      current = this._head;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this._head = prev;
  }

  print(): void {
    console.log({ list: this.toArray(), size: this._size });
  }
}
