import { INode } from "../Interface";

export default class DNode<T> implements INode<T> {
  value: T | null;
  next: DNode<T> | null;
  prev: DNode<T> | null;

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

  print(): void {
    console.log({ node: this.toArray() });
  }
}
