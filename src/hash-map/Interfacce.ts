export interface IHashMap<K, V> {
  readonly keys: Set<K>;
  readonly values: V[];
  readonly size: number;

  isInstanceOf(classToCheck: { new (): any }): Boolean;
  hash(key: K): number;
  put(key: K, value: V): void;
  get(key: K): V | undefined;
  has(key: K): Boolean;
  remove(key: K): void;
  getKeys(): K[];
  clear(): void;
}
