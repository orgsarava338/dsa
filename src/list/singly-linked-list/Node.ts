import { NodeMethods } from "../Methods";

export default class Node<T> implements NodeMethods<T> {
  value?: T | null;
  next: Node<T> | null;

  constructor(value?: T, next = null) {
    this.value = value;
    this.next = next;
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
