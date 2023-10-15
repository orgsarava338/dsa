import CommonMethods from "../CommonMethds";
import SNode from "./singly-linked-list/Node";
import DNode from "./doubly-linked-list/Node";
import CSNode from "./circular-singly-linked-list/Node";
import CDNode from "./circular-doubly-linked-list/Node";

export interface INode<T> {
  value: T | null;
  toArray(): T[];
  print(): void;
}

export interface ISList<T> extends CommonMethods<T> {
  readonly head: SNode<T> | null;
  readonly size: number;

  append(value: T): void;
  prepend(value: T): void;
  insertAfter(after: T, value: T): void;
  insertBefore(before: T, value: T): void;
  find(value: T): SNode<T> | null;
  delete(value: T): void;
  getHead(): T | null | undefined;
  getTail(): T | null | undefined;
}

export interface ICSList<T> extends ISList<T> {
  find(value: T): CSNode<T> | null;
}

export interface IDList<T> extends ISList<T> {
  readonly tail: DNode<T> | null;

  find(value: T): DNode<T> | null;
}

export interface ICDList<T> extends IDList<T> {
  find(value: T): CDNode<T> | null;
}
