import Node from "./Node";
import IList from "./Interface";

export default class DoublyLinkedList<T> implements IList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  size: number;

  constructor();
  constructor(value: T[]);
  constructor(value: T);
  constructor(value?: T | T[]) {
    if (Array.isArray(value)) {
      if (value.length === 0) {
        this.head = this.tail = null;
        this.size = 0;
      } else {
        let current = (this.head = new Node(value[0]));
        for (let i = 1; i < value.length; i++) {
          let node = new Node(value[i]);
          current.next = node;
          node.prev = current;
          current = node;
        }
        this.tail = current;
        this.size = value.length;
      }
    } else if (value !== undefined) {
      this.head = this.tail = new Node(value);
      this.size = 1;
    } else {
      this.head = this.tail = null;
      this.size = 0;
    }
  }

  isInstanceOf(classToCheck: { new (): any }): Boolean {
    return this instanceof classToCheck;
  }

  append(value: T): void {
    const node = new Node(value);
    if (this.isEmpty()) this.head = this.tail = node;
    else {
      node.prev = this.tail!;
      if (this.tail) this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  prepend(value: T): void {
    const node = new Node(value);
    if (this.isEmpty()) this.head = this.tail = node;
    else {
      node.next = this.head;
      if (this.head) this.head.prev = node;
      this.head = node;
    }
    this.size++;
  }

  insertAfter(after: T, value: T): void {
    const node = new Node(value);

    const insertNodeAfter = (thisNode: Node<T>) => {
      thisNode.insertAfter(node, this);
      this.size++;
    };

    if (this.isEmpty()) {
      this.head = this.tail = node;
      this.size++;
      return;
    } else {
      let head = this.head;
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
      this.size++;
    };

    if (this.isEmpty()) {
      this.head = this.tail = node;
      this.size++;
      return;
    } else {
      let head = this.head;
      while (head) {
        if (head.value === before) return insertNodeBefore(head);
        head = head.next;
      }
    }
  }

  find(value: T): Node<T> | null {
    if (this.isEmpty()) return null;
    let head = this.head;
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
      this.size--;
    };

    let head = this.head;

    while (head) {
      if (head.value === value) return removeNode(head);
      head = head.next;
    }
  }

  clear(): void {
    this.head = this.tail = null;
    this.size = 0;
  }

  isEmpty = (): Boolean => this.head === null && this.tail === null;
  getHead = (): T | null | undefined => this.head?.value;
  getTail = (): T | null | undefined => this.tail?.value;

  toArray(): T[] {
    const array: T[] = [];
    if (this.isEmpty()) return array;
    else {
      let current = this.head;
      while (current) {
        array.push(current.value!);
        current = current.next;
      }
    }
    return array;
  }

  reverse(): void {
    let current = this.head;
    let temp: Node<T> | null = null;

    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;

      current = current.prev;
    }
    if (temp) this.head = temp.prev;
  }

  print(): void {
    console.log({ list: this.toArray(), size: this.size });
  }
}
