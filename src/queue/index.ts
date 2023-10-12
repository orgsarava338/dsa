import { IQueue } from "./Interface";

export default class Queue<T> implements IQueue<T> {
  elements: T[];

  constructor();
  constructor(element: T);
  constructor(element: T[]);
  constructor(element?: T | T[]) {
    if (Array.isArray(element)) this.elements = element;
    else if (element) this.elements = [element];
    else this.elements = [];
  }

  get size() {
    return this.elements.length;
  }

  isInstanceOf(classToCheck: { new (): any }): Boolean {
    return this instanceof classToCheck;
  }

  enqueue(element: T | T[]): void {
    if (Array.isArray(element)) this.elements = [...this.elements, ...element];
    else this.elements.push(element);
  }

  dequeue(): T | undefined {
    return this.elements.shift();
  }

  dequeueMany(count: number): T[] {
    if (count <= 0) return [];
    let dequeued: T[] = [];
    while (count > 0 && this.elements.length > 0) {
      dequeued.push(this.elements.shift()!);
      count--;
    }
    return dequeued;
  }

  peek(): T | undefined {
    return this.elements.length > 0 ? this.elements[0] : undefined;
  }

  isEmpty(): Boolean {
    return this.elements.length === 0;
  }

  getFront(): T | undefined {
    return this.elements[0];
  }

  getBack(): T | undefined {
    return this.elements[this.elements.length - 1];
  }

  clear(): void {
    this.elements = [];
  }

  concat(queue: Queue<T>): void {
    this.elements = [...this.elements, ...queue.elements];
  }

  clone(): Queue<T> {
    return new Queue<T>([...this.elements]);
  }

  reverse(): void {
    this.elements = [...this.elements.reverse()];
  }

  toArray(): T[] {
    return this.elements;
  }

  toString(): string {
    return this.elements.toString();
  }

  print(): void {
    console.log({ elements: this.elements, size: this.size });
  }

  forEach(callback: (element: T) => void): void {
    for (let element of this.elements) callback(element);
  }

  filter(callback: (element: T) => Boolean): Queue<T> {
    const filtered = new Queue<T>();
    for (let element of this.elements)
      if (callback(element)) filtered.enqueue(element);
    return filtered;
  }
}
