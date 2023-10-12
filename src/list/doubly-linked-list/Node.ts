import { INode } from "../Interface";
import DoublyLinkedList from "./linear";

export default class Node<T> implements INode<T> {
  value: T | null;
  next: Node<T> | null;
  prev: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = this.prev = null;
  }

  toArray(): T[] {
    if (!this) return [];
    const array: T[] = [];
    if (this) array.push(this.value!);
    let current = this.next;
    while (current) {
      array.push(current.value!);
      current = current.next!;
    }
    return array;
  }

  insertAfter(node: Node<T>, list: DoublyLinkedList<T>): void {
    node.prev = this;
    node.next = this.next;
    if (this.next) this.next.prev = node;
    else list.tail = node;
    this.next = node;
  }

  insertBefore(node: Node<T>, list: DoublyLinkedList<T>): void {
    node.next = this;
    node.prev = this.prev;
    if (this.prev) this.prev.next = node;
    else list.head = node;
    this.prev = node;
  }

  removeNode(list: DoublyLinkedList<T>): void {
    if (this.prev) this.prev.next = this.next;
    else list.head = this.next;

    if (this.next) this.next.prev = this.prev;
    else list.tail = this.prev;
  }

  print(): void {
    console.log({ node: this.toArray() });
  }
}
