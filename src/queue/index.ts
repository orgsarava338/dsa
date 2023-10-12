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

  isInstanceOf(classToCheck: { new (): any }): Boolean {
    return this instanceof classToCheck;
  }

  enqueue(element: T | T[]): void {
    if (Array.isArray(element)) this.elements = [...this.elements, ...element];
    else this.elements.push(element);
  }

  dequeue = (): T | undefined => this.elements.shift();

  dequeueMany(count: number): T[] {
    if (count <= 0) return [];
    let dequeued: T[] = [];
    while (count > 0 && this.elements.length > 0) {
      dequeued.push(this.elements.shift()!);
      count--;
    }
    return dequeued;
  }

  size = (): number => this.elements.length;

  peek = (): T | undefined =>
    this.elements.length > 0 ? this.elements[0] : undefined;

  isEmpty = (): Boolean => this.elements.length === 0;

  getFront = (): T | undefined => this.elements[0];

  getBack = (): T | undefined => this.elements[this.elements.length - 1];

  clear(): void {
    this.elements = [];
  }

  concat(queue: Queue<T>): void {
    this.elements = [...this.elements, ...queue.elements];
  }

  clone = (): Queue<T> => new Queue<T>([...this.elements]);

  toArray(): T[] {
    return this.elements;
  }

  toString(): string {
    return this.elements.toString();
  }

  print(): void {
    console.log({ elements: this.elements, size: this.size() });
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
