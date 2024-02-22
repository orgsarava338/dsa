import type { IDNode } from "../Interface";

export default class DNode<T> implements IDNode<T> {
  value: T | null;
  next: DNode<T> | null;
  prev: DNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = this.prev = null;
  }
}
