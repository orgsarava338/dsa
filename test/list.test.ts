import { afterAll, beforeEach, describe, expect, test } from "bun:test";
import SinglyLinkedList from "../src/list/singly-linked-list/linear";
import DoublyLinkedList from "../src/list/doubly-linked-list/linear";
import CircularSinglyLinkedList from "../src/list/singly-linked-list/circular";
import CircularDoublyLinkedList from "../src/list/doubly-linked-list/circular";

type T = number;
type ListTypes =
  | SinglyLinkedList<T>
  | DoublyLinkedList<T>
  | CircularSinglyLinkedList<T>
  | CircularDoublyLinkedList<T>;

const lists = [
  SinglyLinkedList<T>,
  DoublyLinkedList<T>,
  CircularSinglyLinkedList<T>,
  CircularDoublyLinkedList<T>,
];

for (const List of lists) {
  describe(`${List.name} Tests`, () => {
    let list: ListTypes;
    const listName = List.name
      .replace(/([a-z0-9])([A-Z])|\s+/g, "$1-$2")
      .toLowerCase();
    const values = [1, 2, 3, 4, 5];
    const unexpectedLists = lists.filter((e) => e !== List);

    beforeEach(() => {
      list = new List(values[0]);
    });

    afterAll(() => {
      console.log(`\n ---------- ${listName} Tests Completed ----------\n`);
    });

    test(`create a ${listName}`, () => {
      expect(list.isInstanceOf(List)).toBeTrue();
      unexpectedLists.forEach((listClass) =>
        expect(list.isInstanceOf(listClass)).toBeFalse()
      );
      expect(list.toArray()).toEqual([values[0]]);
      expect(list.size).toBe(1);

      let l = new List([...values]);
      expect(list.isInstanceOf(List)).toBeTrue();
      unexpectedLists.forEach((listClass) =>
        expect(list.isInstanceOf(listClass)).toBeFalse()
      );

      expect(l.toArray()).toEqual(values);
      expect(l.size).toBe(values.length);

      l = new List([]);
      expect(list.isInstanceOf(List)).toBeTrue();
      unexpectedLists.forEach((listClass) =>
        expect(list.isInstanceOf(listClass)).toBeFalse()
      );

      expect(l.toArray()).toBeArrayOfSize(0);

      l = new List();
      expect(list.isInstanceOf(List)).toBeTrue();
      unexpectedLists.forEach((listClass) =>
        expect(list.isInstanceOf(listClass)).toBeFalse()
      );

      expect(l.toArray()).toBeArrayOfSize(0);
    });

    test(`append a value in ${listName}`, () => {
      list.append(values[1]);
      expect(list.isInstanceOf(List)).toBeTrue();
      unexpectedLists.forEach((listClass) =>
        expect(list.isInstanceOf(listClass)).toBeFalse()
      );

      expect(list.toArray()).toEqual([values[0], values[1]]);
      expect(list.size).toBe(2);

      list.append(values[2]);
      expect(list.isInstanceOf(List)).toBeTrue();
      unexpectedLists.forEach((listClass) =>
        expect(list.isInstanceOf(listClass)).toBeFalse()
      );

      expect(list.toArray()).toEqual([values[0], values[1], values[2]]);
      expect(list.size).toBe(3);
    });

    test(`prepand a value in ${listName}`, () => {
      list.prepend(values[1]);
      expect(list.isInstanceOf(List)).toBeTrue();
      unexpectedLists.forEach((listClass) =>
        expect(list.isInstanceOf(listClass)).toBeFalse()
      );

      expect(list.toArray()).toEqual([values[1], values[0]]);
      expect(list.size).toBe(2);

      list.prepend(values[2]);
      expect(list.isInstanceOf(List)).toBeTrue();
      unexpectedLists.forEach((listClass) =>
        expect(list.isInstanceOf(listClass)).toBeFalse()
      );

      expect(list.toArray()).toEqual([values[2], values[1], values[0]]);
      expect(list.size).toBe(3);
    });

    test(`insert after a value in ${listName}`, () => {
      list.insertAfter(values[0], values[1]);
      expect(list.isInstanceOf(List)).toBeTrue();
      unexpectedLists.forEach((listClass) =>
        expect(list.isInstanceOf(listClass)).toBeFalse()
      );

      expect(list.toArray()).toEqual([values[0], values[1]]);
      expect(list.size).toBe(2);

      list.insertAfter(values[0], values[2]);
      expect(list.isInstanceOf(List)).toBeTrue();
      unexpectedLists.forEach((listClass) =>
        expect(list.isInstanceOf(listClass)).toBeFalse()
      );

      expect(list.toArray()).toEqual([values[0], values[2], values[1]]);
      expect(list.size).toBe(3);
    });

    test(`insert before a value in ${listName}`, () => {
      list.insertBefore(values[0], values[1]);
      expect(list.isInstanceOf(List)).toBeTrue();
      unexpectedLists.forEach((listClass) =>
        expect(list.isInstanceOf(listClass)).toBeFalse()
      );

      expect(list.toArray()).toEqual([values[1], values[0]]);
      expect(list.size).toBe(2);

      list.insertBefore(values[0], values[2]);
      expect(list.isInstanceOf(List)).toBeTrue();
      unexpectedLists.forEach((listClass) =>
        expect(list.isInstanceOf(listClass)).toBeFalse()
      );

      expect(list.toArray()).toEqual([values[1], values[2], values[0]]);
      expect(list.size).toBe(3);
    });

    test(`find a value in ${listName}`, () => {
      expect(list.find(values[0])).not.toBeNull();
      expect(list.find(values[0])?.toArray()).toEqual([values[0]]);

      list.append(values[1]);

      expect(list.find(values[0])?.toArray()).toEqual([values[0], values[1]]);
      expect(list.find(values[1])?.toArray()).toEqual([values[1]]);

      expect(list.find(values[2])).toBeNull();
    });

    test(`delete a value in ${listName}`, () => {
      list.append(values[1]);
      list.append(values[2]);
      list.append(values[3]);
      list.append(values[4]);

      list.delete(values[0]);

      let expected = values.filter((e) => e !== values[0]);
      expect(list.toArray()).toEqual(expected);
      expect(list.size).toBe(expected.length);

      list.delete(values[3]);

      expected = expected.filter((e) => e !== values[3]);
      expect(list.toArray()).toEqual(expected);
      expect(list.toArray()).toBeArrayOfSize(expected.length);

      list.delete(values[4]);

      expected = expected.filter((e) => e !== values[4]);
      expect(list.toArray()).toEqual(expected);
      expect(list.size).toBe(expected.length);
    });

    test(`get head value in ${listName}`, () => {
      expect(list.getHead()).toBe(values[0]);
      list.prepend(values[1]);
      expect(list.getHead()).toBe(values[1]);
    });

    test(`get tail value in ${listName}`, () => {
      expect(list.getTail()).toBe(values[0]);
      list.append(values[1]);
      expect(list.getTail()).toBe(values[1]);
    });

    test(`clear the ${listName}`, () => {
      expect(list.toArray()).toBeArrayOfSize(1);

      list.append(values[1]);

      list.clear();
      expect(list.toArray()).toBeArrayOfSize(0);
      expect(list.size).toBe(0);
    });

    test(`is ${listName} empty`, () => {
      expect(list.isEmpty()).toBeFalse();
      list.append(values[1]);
      list.clear();
      expect(list.isEmpty()).not.toBeFalse();
    });

    test(`convert the ${listName} to Array`, () => {
      expect(list.toArray()).toBeArray();
      expect(list.toArray()).toEqual([values[0]]);
      expect(list.toArray()).toBeArrayOfSize(1);

      list.append(values[1]);
      list.append(values[2]);
      list.append(values[3]);
      list.append(values[4]);

      expect(list.toArray()).toBeArray();
      expect(list.toArray()).toEqual(values);
      expect(list.toArray()).toBeArrayOfSize(values.length);
    });

    test(`reverse the ${listName}`, () => {
      list.reverse();
      expect(list.toArray()).toEqual([values[0]]);

      list.append(values[1]);
      list.append(values[2]);
      list.append(values[3]);
      list.append(values[4]);

      list.reverse();
      expect(list.toArray()).toEqual(values.reverse());
    });
  });
}
