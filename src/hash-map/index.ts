import { IHashMap } from "./Interfacce";

export default class HashMap<K, V> implements IHashMap<K, V> {
  readonly elements: V[];

  constructor() {
    this.elements = [];
  }

  isInstanceOf(classToCheck: new () => any): Boolean {
    return this instanceof classToCheck;
  }

  hash(ket: K): number {
    throw new Error("Method not implemented.");
  }

  put(ket: K, value: V): void {
    throw new Error("Method not implemented.");
  }

  get(key: K): V | undefined {
    throw new Error("Method not implemented.");
  }

  has(key: K): Boolean {
    throw new Error("Method not implemented.");
  }
  remove(key: K): void {
    throw new Error("Method not implemented.");
  }
  keys(): K[] {
    throw new Error("Method not implemented.");
  }
  values(): V[] {
    throw new Error("Method not implemented.");
  }
  size(): number {
    throw new Error("Method not implemented.");
  }
  clear(): void {
    throw new Error("Method not implemented.");
  }
}
