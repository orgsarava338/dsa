export interface IHashMap<K, V> {
  readonly elements: V[];

  isInstanceOf(classToCheck: { new (): any }): Boolean;
  hash(ket: K): number;
  put(ket: K, value: V): void;
  get(key: K): V | undefined;
  has(key: K): Boolean;
  remove(key: K): void;
  keys(): K[];
  values(): V[];
  size(): number;
  clear(): void;
}
