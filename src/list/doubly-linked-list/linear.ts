import Node from "./Node";
import IList from "./Interface";

export default class DoublyLinkedList<T> implements IList<T> {
  private _head: Node<T> | null;
  private _tail: Node<T> | null;
  private _size: number;

  constructor();
  constructor(value: T[]);
  constructor(value: T);
  constructor(value?: T | T[]) {
    if (Array.isArray(value)) {
      if (value.length === 0) {
        this._head = this._tail = null;
        this._size = 0;
      } else {
        let current = (this._head = new Node(value[0]));
        for (let i = 1; i < value.length; i++) {
          let node = new Node(value[i]);
          current.next = node;
          node.prev = current;
          current = node;
        }
        this._tail = current;
        this._size = value.length;
      }
    } else if (value !== undefined) {
      this._head = this._tail = new Node(value);
      this._size = 1;
    } else {
      this._head = this._tail = null;
      this._size = 0;
    }
  }

  get size() {
    return this._size;
  }

  get head() {
    return this._head
  }

  get tail() {
    return this._tail
  }

  isInstanceOf(classToCheck: { new (): any }): Boolean {
    return this instanceof classToCheck;
  }

  append(value: T): void {
    const node = new Node(value);
    if (this.isEmpty()) this._head = this._tail = node;
    else {
      node.prev = this._tail!;
      if (this._tail) this._tail.next = node;
      this._tail = node;
    }
    this._size++;
  }

  prepend(value: T): void {
    const node = new Node(value);
    if (this.isEmpty()) this._head = this._tail = node;
    else {
      node.next = this._head;
      if (this._head) this._head.prev = node;
      this._head = node;
    }
    this._size++;
  }

  insertAfter(after: T, value: T): void {
    const node = new Node(value);

    const insertNodeAfter = (thisNode: Node<T>) => {
      thisNode.insertAfter(node, this);
      this._size++;
    };

    if (this.isEmpty()) {
      this._head = this._tail = node;
      this._size++;
      return;
    } else {
      let head = this._head;
      while (head) {
        if (head.value === after) return insertNodeAfter(head);

        head = head.next;
      }
    }
  }

  insertBefore(before: T, value: T): void {
    const node = new Node(value);

    const insertNodeBefore = (thisNode: Node<T>) => {
      thisNode.insertBefore(node, this);
      this._size++;
    };

    if (this.isEmpty()) {
      this._head = this._tail = node;
      this._size++;
      return;
    } else {
      let head = this._head;
      while (head) {
        if (head.value === before) return insertNodeBefore(head);
        head = head.next;
      }
    }
  }

  find(value: T): Node<T> | null {
    if (this.isEmpty()) return null;
    let head = this._head;
    while (head) {
      if (head.value === value) return head;

      head = head.next;
    }
    return null;
  }

  delete(value: T): void {
    if (this.isEmpty()) return;

    const removeNode = (node: Node<T>): void => {
      node.removeNode(this);
      this._size--;
    };

    let head = this._head;

    while (head) {
      if (head.value === value) return removeNode(head);
      head = head.next;
    }
  }

  clear(): void {
    this._head = this._tail = null;
    this._size = 0;
  }

  isEmpty = (): Boolean => this._head === null && this._tail === null;
  getHead = (): T | null | undefined => this._head?.value;
  getTail = (): T | null | undefined => this._tail?.value;

  toArray(): T[] {
    const array: T[] = [];
    if (this.isEmpty()) return array;
    else {
      let current = this._head;
      while (current) {
        array.push(current.value!);
        current = current.next;
      }
    }
    return array;
  }

  reverse(): void {
    let current = this._head;
    let temp: Node<T> | null = null;

    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;

      current = current.prev;
    }
    if (temp) this._head = temp.prev;
  }

  print(): void {
    console.log({ list: this.toArray(), size: this._size });
  }
}
