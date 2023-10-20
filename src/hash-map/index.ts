import { IHashMap } from "./Interfacce";

export default class HashMap<K, V> implements IHashMap<K, V> {
  private _keys: Set<K>;
  private _values: V[];
  private _size: number;

  constructor() {
    this._keys = new Set();
    this._values = [];
    this._size = 0;
  }

  get keys(): Set<K> {
    return this._keys;
  }

  get values(): V[] {
    return this._values;
  }

  get size(): number {
    return this._size;
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

  getKeys(): K[] {
    throw new Error("Method not implemented.");
  }

  remove(key: K): void {
    throw new Error("Method not implemented.");
  }

  clear(): void {
    this._keys.clear();
    this._values = [];
    this._size = 0;
  }
}
