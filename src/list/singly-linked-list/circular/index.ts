import SinglyLinkedList from "..";
import { IList } from "../../Interface";
import Node from "../Node";

export default class CircularSinglyLinkedList<T>
  extends SinglyLinkedList<T>
  implements IList<T>
{
  constructor(value?: T | T[]) {
    if (Array.isArray(value)) super(value as T[]);
    else super(value as T);
    if (this.head && this.head.next) {
      let current = this.head;
      while (current && current.next) current = current.next!;
      current.next = this.head;
    }
  }

  append(value: T): void {
    const node = new Node(value);
    if (!this.head) this.head = node.next = node;
    else {
      let last = this.head;
      while (last && last.next !== this.head) last = last.next!;
      last.next = node;
      node.next = this.head;
      this.size++;
    }
  }

  prepend(value: T): void {
    const node = new Node(value);
    if (!this.head) this.head = node.next = node;
    else {
      let head = this.head;
      let last = head;
      while (last && last.next !== this.head) last = last.next!;
      node.next = head;
      this.head = node;
      // last.next = node;
      this.size++;
    }
  }

  toArray(): T[] {
    if (!this.head) return [];
    const array: T[] = [];
    if (this.head) {
      let current = this.head;
      do {
        array.push(current.value!);
        current = current.next!;
      } while (current && current !== this.head);
    }
    return array;
  }
}
