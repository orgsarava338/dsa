import Node from "./Node";
import { ListMethods } from "../Methods";

export default class DoublyLinkedList<T> implements ListMethods<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  size: number;

  constructor(value?: T, head = null) {
    this.head = this.tail = new Node(value);
    this.size = 1;
  }

  append(value: T): void {
    const node = new Node(value);
    if (this.isEmpty()) this.head = this.tail = node;
    else {
      node.prev = this.tail;
      if (this.tail) this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  prepend(value: T): void {
    const node = new Node(value);
    if (this.isEmpty()) this.head = this.tail = node;
    else {
      node.next = this.head;
      if (this.head) this.head.prev = node;
      this.head = node;
    }
    this.size++;
  }

  insertAfter(after: T, value: T): void {
    const node = new Node(value);

    const insertNodeAfter = (thisNode: Node<T>) => {
      thisNode.insertAfter(node, this);
      this.size++;
    };

    if (this.isEmpty()) {
      this.head = this.tail = node;
      this.size++;
      return;
    } else {
      let head = this.head;
      let tail = this.tail;
      while (head && tail) {
        if (head.value === after) return insertNodeAfter(head);
        else if (tail.value === after) return insertNodeAfter(tail);

        head = head.next;
        tail = tail.prev;
      }
    }
  }

  insertBefore(before: T, value: T): void {
    const node = new Node(value);

    const insertNodeBefore = (thisNode: Node<T>) => {
      thisNode.insertBefore(node, this);
      this.size++;
    };

    if (this.isEmpty()) {
      this.head = this.tail = node;
      this.size++;
      return;
    } else {
      let head = this.head;
      let tail = this.tail;
      while (head && tail) {
        if (head.value === before) return insertNodeBefore(head);
        else if (tail.value === before) return insertNodeBefore(tail);

        head = head.next;
        tail = tail.prev;
      }
    }
  }

  find(value: T): Node<T> | null {
    if (this.isEmpty()) return null;
    let head = this.head;
    let tail = this.tail;
    while (head && tail) {
      if (head.value === value) return head;
      else if (tail.value === value) return tail;

      head = head.next;
      tail = tail.prev;
    }
    return null;
  }

  delete(value: T): void {
    if (this.isEmpty()) return;

    const removeNode = (node: Node<T>): void => {
      node.removeNode(this);
      this.size--;
    };

    let head = this.head;
    let tail = this.tail;

    while (head && tail) {
      if (head.value === value) return removeNode(head);
      else if (tail.value === value) return removeNode(tail);
      head = head.next;
      tail = tail.prev;
    }
  }

  clear(): void {
    this.head = this.tail = null;
    this.size = 0;
  }

  isEmpty = (): Boolean => this.head === null && this.tail === null;
  getHead = (): T | null | undefined => this.head?.value;
  getTail = (): T | null | undefined => this.tail?.value;

  toArray(): T[] {
    const array: T[] = [];
    if (this.isEmpty()) return array;
    else {
      let current = this.head;
      while (current) {
        array.push(current.value!);
        current = current.next;
      }
    }
    return array;
  }

  reverse(): void {
    let head = this.head;
    let tail = this.tail;
    let temp: Node<T> | null;
    while (head !== tail) {
      temp = head;
      head = tail;
      tail = temp;
    }
  }

  print(): void {
    console.log({ list: this.toArray(), size: this.size });
  }
}
