import { ISNode } from "../Interface";

export default class SNode<T> implements ISNode<T> {
  value: T | null;
  next: SNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}
