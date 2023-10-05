interface INode<T> {
  value?: T | null;
  next: Node<T> | null;
}

export default class Node<T> implements INode<T> {
  value?: T | null;
  next: INode<T> | null;

  constructor(value?: T, next = null) {
    this.value = value;
    this.next = next;
  }
}
