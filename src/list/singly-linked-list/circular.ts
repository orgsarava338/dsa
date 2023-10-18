import Node from "./Node";
import { ISList } from "../Interface";

export default class CircularSinglyLinkedList<T> implements ISList<T> {
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
        this._head = current.next = node;
        this._size = value.length;
      }
    } else if (value !== undefined) {
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
    node.next = this._head;

    if (!this._head) this._head = node;
    else if (this._head.next === this._head) this._head.next = node;
    else {
      let current = this._head;
      do current = current.next!;
      while (current.next !== this._head);
      current.next = node;
    }

    this._size++;
  }

  prepend(value: T): void {
    let node = new Node(value);
    node.next = this._head;
    let current = this._head;
    do current = current?.next!;
    while (current.next !== this._head);
    current.next = this._head = node;
    this._size++;
  }

  insertAfter(after: T, value: T): void {
    if (!this._head) return;

    const node = new Node(value);

    let current = this._head;
    do {
      if (current?.value === after) {
        node.next = current.next;
        current.next = node;
        break;
      }
      current = current?.next!;
    } while (current !== this._head);
    this._size++;
  }

  insertBefore(before: T, value: T): void {
    if (!this._head) return;

    const node = new Node(value);

    let current = this._head;

    do {
      if (current.next && current.next.value === before) {
        node.next = current.next;
        current.next = node;
        break;
      }
      current = current.next!;
    } while (current.next !== this._head);

    if (current === this._head && current.value === before) {
      this._head = node;
      node.next = current;
    }

    this._size++;
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
    if (!this._head) return; // Empty list

    // Handle the case where the node to be deleted is the head
    if (this._head.value === value) {
      this._size--;

      if (this._head.next === this._head) {
        // If there is only one node in the list
        this._head = null;
        return;
      }

      // If there are multiple nodes in the list, update the head
      let current = this._head;

      while (current.next !== this._head) current = current.next!;
      this._head = this._head.next;
      current.next = this._head;

      return;
    }

    // Search for the node to delete in the list
    let current = this._head;
    while (current.next !== this._head) {
      if (current.next!.value === value) {
        current.next = current.next!.next;
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
    if (!this._head || this._size < 2) return; // No need to reverse if there are 0 or 1 nodes

    let current = this._head,
      prev,
      next = null;

    do {
      next = current.next;
      current.next = prev!;
      prev = current;
      current = next!;
    } while (current !== this._head);

    this._head = prev; // Update the head to the last node (prev)
    current.next = this._head; // point the last(current) node's next node to the head
  }

  print(): void {
    let current = this._head;
    let listString = "[ -> ";
    do {
      if (current!.next !== this._head) listString += current!.value + " - ";
      else listString += current!.value;
      current = current!.next!;
    } while (current !== this._head);
    listString += " <- ]";
    console.log(listString);
    
  }
}
