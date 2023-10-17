import Queue from ".";
export interface IQueue<T> {
  enqueue(element: T | T[]): void;
  dequeue(): T | undefined;
  dequeueMany(count: number): T[];
  peek(): T | undefined;
  getFront(): T | undefined;
  getBack(): T | undefined;
  concat(queue: Queue<T>): void;
  clone(): Queue<T>;
  toArray(): T[];
  toString(): string;
  print(): void;
  forEach(callback: (element: T) => void): void;
  filter(callback: (element: T) => Boolean): Queue<T>;
  isInstanceOf(classToCheck: { new (): any }): Boolean;
  isEmpty(): Boolean;
  clear(): void;
  toArray(): T[];
  reverse(): void;
  print(): void;
}
