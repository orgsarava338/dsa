import Node from "../Node";
import { IList } from "../../Interface";

export default class CircularSinglyLinkedList<T> implements IList<T> {
  head: Node<T> | null;
  private _length: number;

  constructor();
  constructor(value: T);
  constructor(value: T[]);
  constructor(value?: T | T[]) {
    if (Array.isArray(value)) {
      if (value.length === 0) {
        this.head = null;
        this._length = 0;
      } else {
        let node = new Node(value[0]);
        let current = node;
        for (let i = 1; i < value.length; i++) {
          current.next = new Node(value[i]);
          current = current.next!;
        }
        this.head = current.next = node;
        this._length = value.length;
      }
    } else if (value !== undefined && value) {
      const node = new Node(value);
      this.head = node.next = node;
      this._length = 1;
    } else {
      this.head = null;
      this._length = 0;
    }
  }

  get size() {
    return this._length;
  }

  isInstanceOf(classToCheck: { new (): any }): Boolean {
    return this instanceof classToCheck;
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
