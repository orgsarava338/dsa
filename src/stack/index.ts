import IStack from "./Interface";

export default class Stack<T> implements IStack<T> {
  elements: T[];

  constructor();
  constructor(element: T);
  constructor(element: T[]);
  constructor(element?: T | T[]) {
    if (Array.isArray(element)) this.elements = [...element];
    else if (typeof element !== "undefined") this.elements = [element];
    else this.elements = [];
  }

  isInstanceOf(classToCheck: { new (): any }): Boolean {
    return this instanceof classToCheck;
  }

  push(element: T | T[]): void {
    if (Array.isArray(element)) this.elements = [...this.elements, ...element];
    else this.elements = [...this.elements, element];
  }

  pop(): T | undefined {
    return this.isEmpty() ? undefined : this.elements.pop();
  }

  peek(): T | undefined {
    return this.elements[this.size() - 1];
  }

  peekAt(index: number): T | undefined {
    return this.elements[index - 1];
  }

  isEmpty(): boolean {
    return this.elements.length === 0;
  }

  size(): number {
    return this.elements.length;
  }

  clear(): void {
    this.elements = [];
  }

  toArray(): T[] {
    return this.elements;
  }

  reverse(): void {
    this.elements = [...this.elements.reverse()];
  }

  toArrayReversed(): T[] {
    return this.elements.reverse();
  }

  search(element: T): number {
    return this.elements.indexOf(element) + 1;
  }

  contains(element: T): boolean {
    return this.elements.includes(element);
  }

  clone(): Stack<T> {
    return new Stack<T>([...this.elements]);
  }

  print(): void {
    console.log({ stack: this.elements, size: this.size() });
  }
}
