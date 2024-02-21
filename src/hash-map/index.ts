import type { IHashMap } from './Interfacce';

export default class HashMap<K, V> implements IHashMap<K, V> {
  private _bucket: Array<Array<[K, V]>>;
  private _size: number;

  constructor(size: number = 0) {
    this._size = size;
    this._bucket = [];
  }

  get size(): number {
    return this._size;
  }

  private hash(key: K): number {
    let keyStr = String(key);
    let hashCode = 0;
    for (let i = 0; i < keyStr.length; i++) hashCode = (hashCode << 5) - hashCode + keyStr.charCodeAt(i);
    return hashCode % this._size;
  }

  isInstanceOf(classToCheck: new () => any): Boolean {
    return this instanceof classToCheck;
  }

  put(key: K, value: V): void {
    if (this.has(key)) {
    } else this._bucket.push([[key, value]]);
  }

  get(key: K): V | undefined {
    if (!this.has(key)) return;
  }

  has(key: K): Boolean {
    throw new Error('Method not implemented.');
  }

  getKeys(): K[] {
    throw new Error('Method not implemented.');
  }

  remove(key: K): void {
    throw new Error('Method not implemented.');
  }

  clear(): void {
    this._bucket = [];
    this._size = 0;
  }
}
