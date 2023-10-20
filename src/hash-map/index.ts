import { IHashMap } from "./Interfacce";

export default class HashMap<K, V> implements IHashMap<K, V> {
  readonly _keys: Set<K>;
  readonly _values: V[];
  readonly _size: number;

  constructor() {
    this._keys = new Set();
    this._values = [];
    this._size = 0;
  }

  isInstanceOf(classToCheck: new () => any): Boolean {
    return this instanceof classToCheck;
  }

  hash(key: K): number {
    throw new Error("Method not implemented.");
  }

  put(key: K, value: V): void {
    if (this._keys.has(key)) return;
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

  getKeys(): K[] {
    throw new Error("Method not implemented.");
  }

  getValues(): V[] {
    throw new Error("Method not implemented.");
  }

  size(): number {
    throw new Error("Method not implemented.");
  }

  clear(): void {
    throw new Error("Method not implemented.");
  }
}
