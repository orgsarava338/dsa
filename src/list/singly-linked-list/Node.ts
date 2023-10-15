import { ISNode } from "../Interface";

export default class Node<T> implements ISNode<T> {
  value: T | null;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}
