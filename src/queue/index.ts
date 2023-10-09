import { IQueue } from "./Interface";

export default class Queue<T> implements IQueue<T> {
  elements: T[];
  size: number;

  constructor();
  constructor(arg: T);
  constructor(arg?: T[]) {
    if (Array.isArray(arg)) {
      this.elements = arg;
      this.size = arg.length;
    } else if (arg) {
      this.elements = [arg];
      this.size = 1;
    } else {
      this.elements = [];
      this.size = 0;
    }
  }

  enqueue(element: T): void {
    this.elements.push(element);
    this.size = this.elements.length;
  }
  dequeue(): T | undefined {
    if (this.size) this.size--;
    return this.elements.shift();
  }

  enqueueMany(elements: T[]): void {
    this.elements = [...this.elements, ...elements];
    this.size = this.elements.length;
  }
  dequeueMany(count: number): T[] {
    let ans: T[] = [];
    if ( count <= 0) return ans;
    else {
      this.elements = this.elements.slice(count);
      this.size = this.elements.length;
      // ans = 
    }
    return ans;
  }
  peek(): T | undefined {
    throw new Error("Method not implemented.");
  }
  isEmpty(): Boolean {
    throw new Error("Method not implemented.");
  }
  isFull(): Boolean {
    throw new Error("Method not implemented.");
  }
  getFront(): T | undefined {
    throw new Error("Method not implemented.");
  }
  getBack(): T | undefined {
    throw new Error("Method not implemented.");
  }
  clear(): void {
    throw new Error("Method not implemented.");
  }
  concat(queue: Queue<T>): void {
    throw new Error("Method not implemented.");
  }
  clone(): Queue<T> {
    throw new Error("Method not implemented.");
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
    throw new Error("Method not implemented.");
  }
  filter(callback: (element: T) => Boolean): Queue<T> {
    throw new Error("Method not implemented.");
  }
}
