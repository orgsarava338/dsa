export interface IHashMap<K, V> {
  readonly _keys: Set<K>;
  readonly _elements: V[];

  isInstanceOf(classToCheck: { new (): any }): Boolean;
  hash(key: K): number;
  put(key: K, value: V): void;
  get(key: K): V | undefined;
  has(key: K): Boolean;
  remove(key: K): void;
  getKeys(): K[];
  getValues(): V[];
  size(): number;
  clear(): void;
}
