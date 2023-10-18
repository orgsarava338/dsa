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
    if (!this._head) return;

    const node = new Node(value);
    let current = this._head;

    do {
      if (current.value === after) {
        node.next = current.next;
        node.prev = current;
        current.next = node;
        this._size++;
        return;
      }
      current = current.next!;
    } while (current.next !== this._head);
  }

  insertBefore(before: T, value: T): void {
    if (!this._head) return; // Empty list

    const node = new Node(value);
    let current = this._head;

    do {
      if (current.value === before) {
        // Found the target node to insert before
        node.prev = current.prev;
        node.next = current;
        current.prev!.next = node;
        current.prev = node;

        if (current === this._head)
          // If inserting before the head, update the head to the new node
          this._head = node;

        this._size++;
        return;
      }
      current = current.next!;
    } while (current !== this._head);
  }

  find(value: T): Node<T> | null {
    if (!this._head) return null;
    let current = this._head;
    do {
      if (current.value === value) return current;
      current = current.next!;
    } while (current !== this._head);
    return null;
  }

  delete(value: T): void {
    if (!this._head) return;

    let current = this._head;

    do {
      if (current.value === value) {
        if (current === this._head && this._size === 0) {
          this._head = null;
          break;
        } else {
          current.prev!.next = current.next;
          current.next!.prev = current.prev;
          if (current === this._head) this._head = current.next!;
          break;
        }
      }

      current = current.next!;
    } while (current !== this._head);

    this._size--;
  }

  clear(): void {
    this._head = this._tail = null;
    this._size = 0;
  }

  isEmpty(): Boolean {
    return this._head === null && this._tail === null && this._size === 0;
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
    return this._tail ? this._tail.value : null;
  }

  reverse(): void {
    if (!this._head || this._size < 2) return;

    let current = this._head;

    do {
      let temp = current.next;
      current.next = current.prev;
      current.prev = temp;

      current = current.prev!;
    } while (current !== this._head);
    this._head = current.next;
  }

  print(): void {
    let current = this._head;
    let listString = "[ => ";
    do {
      if (current !== this._tail) listString += current!.value + " = ";
      else listString += current!.value;
      current = current!.next
    } while (current !== this._head);
    listString += " <= ]";
    console.log(listString);
  }
}
