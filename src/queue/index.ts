import IQueue from "./Interface";

export default class Queue<T> implements IQueue<T> {
  private _elements: T[];

  constructor();
  constructor(element: T);
  constructor(element: T[]);
  constructor(element?: T | T[]) {
    if (Array.isArray(element)) this._elements = element;
    else if (element) this._elements = [element];
    else this._elements = [];
  }

  get size() {
    return this._elements.length;
  }

  get elements() {
    return this._elements;
  }

  isInstanceOf(classToCheck: { new (): any }): Boolean {
    return this instanceof classToCheck;
  }

  enqueue(element: T | T[]): void {
    if (Array.isArray(element))
      this._elements = [...this._elements, ...element];
    else this._elements.push(element);
  }

  dequeue(): T | undefined {
    return this._elements.shift();
  }

  dequeueMany(count: number): T[] {
    if (count <= 0) return [];
    let dequeued: T[] = [];
    while (count > 0 && this._elements.length > 0) {
      dequeued.push(this._elements.shift()!);
      count--;
    }
    return dequeued;
  }

  peek(): T | undefined {
    return this._elements.length > 0 ? this._elements[0] : undefined;
  }

  isEmpty(): Boolean {
    return this._elements.length === 0;
  }

  getFront(): T | undefined {
    return this._elements[0];
  }

  getBack(): T | undefined {
    return this._elements[this._elements.length - 1];
  }

  clear(): void {
    this._elements = [];
  }

  concat(queue: Queue<T>): void {
    this._elements = [...this._elements, ...queue._elements];
  }

  clone(): Queue<T> {
    return new Queue<T>(this._elements);
  }

  reverse(): void {
    this._elements = [...this._elements.reverse()];
  }

  toArray(): T[] {
    return this._elements;
  }

  toString(): string {
    return this._elements.toString();
  }

  print(): void {
    console.log({ _elements: this._elements, size: this.size });
  }

  forEach(callback: (element: T) => void): void {
    for (let element of this._elements) callback(element);
  }

  filter(callback: (element: T) => Boolean): Queue<T> {
    const filtered = new Queue<T>();
    for (let element of this._elements)
      if (callback(element)) filtered.enqueue(element);
    return filtered;
  }
}
