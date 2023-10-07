interface INode<T> {
  value?: T | null;
  next: Node<T> | null;
  prev: Node<T> | null;
}

export default class Node<T> implements INode<T> {
  value?: T | null;
  next: Node<T> | null;
  prev: Node<T> | null;

  constructor(value?: T, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}
