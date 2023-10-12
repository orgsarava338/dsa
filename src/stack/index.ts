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

  push(element: T | T[]): void {
    if (Array.isArray(element)) this.elements = [...this.elements, ...element];
    else this.elements = [...this.elements, element];
  }

  pop = (): T | undefined => (this.isEmpty() ? undefined : this.elements.pop());

  peek = (): T | undefined => this.elements[this.size() - 1];

  peekAt = (index: number): T | undefined => this.elements[index - 1];

  isEmpty = (): boolean => this.elements.length === 0;

  size = (): number => this.elements.length;

  clear(): void {
    this.elements = [];
  }

  toArray = (): T[] => this.elements;

  toArrayReversed = (): T[] => this.elements.reverse();

  search = (element: T): number => this.elements.indexOf(element) + 1;

  contains = (element: T): boolean => this.elements.includes(element);

  duplicate = (): Stack<T> => new Stack<T>([...this.elements]);

  print(): void {
    console.log({ stack: this.elements, size: this.size() });
  }
}
