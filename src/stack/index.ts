import type IStack from "./Interface";

export default class Stack<T> implements IStack<T> {
  private _elements: T[];

  constructor();
  constructor(element: T);
  constructor(element: T[]);
  constructor(element?: T | T[]) {
    if (Array.isArray(element)) this._elements = [...element];
    else if (typeof element !== "undefined") this._elements = [element];
    else this._elements = [];
  }

  get size(): number {
    return this._elements.length;
  }

  get elements(): T[] {
    return this._elements;
  }

  isInstanceOf(classToCheck: { new (): any }): Boolean {
    return this instanceof classToCheck;
  }

  push(element: T | T[]): void {
    if (Array.isArray(element))
      this._elements = [...this._elements, ...element];
    else this._elements = [...this._elements, element];
  }

  pop(): T | undefined {
    return this.isEmpty() ? undefined : this._elements.pop();
  }

  peek(): T | undefined {
    return this._elements[this.size - 1];
  }

  peekAt(index: number): T | undefined {
    return this._elements[index - 1];
  }

  isEmpty(): boolean {
    return this._elements.length === 0;
  }

  clear(): void {
    this._elements = [];
  }

  toArray(): T[] {
    return this._elements;
  }

  reverse(): void {
    this._elements = [...this._elements.reverse()];
  }

  toArrayReversed(): T[] {
    return this._elements.reverse();
  }

  search(element: T): number {
    return this._elements.indexOf(element) + 1;
  }

  contains(element: T): boolean {
    return this._elements.includes(element);
  }

  clone(): Stack<T> {
    return new Stack<T>([...this._elements]);
  }

  print(): void {
    console.log({ stack: this._elements, size: this.size });
  }
}
