import { toNamespacedPath } from "path";
import { IDList } from "../Interface";
import Node from "./Node";

export default class DoublyLinkedList<T> implements IDList<T> {
  private _head: Node<T> | null;
  private _tail: Node<T> | null;
  private _size: number;

  constructor();
  constructor(value: T[]);
  constructor(value: T);
  constructor(value?: T | T[]) {
    if (Array.isArray(value)) {
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
        this._tail = current;
        this._size = value.length;
      }
    } else if (value !== undefined) {
      this._head = this._tail = new Node(value);
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
    if (this.isEmpty()) this._head = this._tail = node;
    else {
      node.prev = this._tail!;
      if (this._tail) this._tail.next = node;
      this._tail = node;
    }
    this._size++;
  }

  prepend(value: T): void {
    const node = new Node(value);
    if (this.isEmpty()) this._head = this._tail = node;
    else {
      node.next = this._head;
      if (this._head) this._head.prev = node;
      this._head = node;
    }
    this._size++;
  }

  insertAfter(after: T, value: T): void {
    const node = new Node(value);

    const insertNodeAfter = (current: Node<T>) => {
      node.prev = current;
      node.next = current.next;
      if (current.next) current.next.prev = node;
      else this._tail = node;
      current.next = node;

      this._size++;
    };

    if (this.isEmpty()) {
      this._head = this._tail = node;
      this._size++;
      return;
    } else {
      let current = this._head;
      while (current) {
        if (current.value === after) return insertNodeAfter(current);

        current = current.next;
      }
    }
  }

  insertBefore(before: T, value: T): void {
    const node = new Node(value);

    const insertNodeBefore = (current: Node<T>) => {
      node.next = current;
      node.prev = current.prev;
      if (current.prev) current.prev.next = node;
      else this._head = node;
      current.prev = node;
      this._size++;
    };

    if (this.isEmpty()) {
      this._head = this._tail = node;
      this._size++;
      return;
    } else {
      let current = this._head;
      while (current) {
        if (current.value === before) return insertNodeBefore(current);
        current = current.next;
      }
    }
  }

  find(value: T): Node<T> | null {
    if (this.isEmpty()) return null;
    let head = this._head;
    while (head) {
      if (head.value === value) return head;

      head = head.next;
    }
    return null;
  }

  delete(value: T): void {
    if (this.isEmpty()) return;

    const removeNode = (node: Node<T>): void => {
      if (node.prev) node.prev.next = node.next;
      else this._head = node.next;

      if (node.next) node.next.prev = node.prev;
      else this._tail = node.prev;
      this._size--;
    };

    let head = this._head;

    while (head) {
      if (head.value === value) return removeNode(head);
      head = head.next;
    }
  }

  clear(): void {
    this._head = this._tail = null;
    this._size = 0;
  }

  isEmpty(): Boolean {
    return this._head === null && this._tail === null;
  }

  getHead(): T | null | undefined {
    return this._head?.value;
  }

  getTail(): T | null | undefined {
    return this._tail?.value;
  }

  toArray(): T[] {
    const array: T[] = [];
    if (this.isEmpty()) return array;
    else {
      let current = this._head;
      while (current) {
        array.push(current.value!);
        current = current.next;
      }
    }
    return array;
  }

  toString(): string {
    if (!this._head) return "[ => ]";
    let current = this._head;
    let listString = "[ => ";
    while (current) {
      if (current.next) listString += current.value + " = ";
      else listString += current.value;
      current = current.next!;
    }
    return (listString += " ]");
  }

  reverse(): void {
    let current = this._head;
    let temp: Node<T> | null = null;

    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;

      current = current.prev;
    }
    if (temp) this._head = temp.prev;
  }

  print(): void {
    console.log(this.toString());
  }
}
