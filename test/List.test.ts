import { afterAll, beforeEach, describe, expect, test } from "bun:test";
import SinglyLinkedList from "../src/list/singly-linked-list/SinglyLinkedList";
import DoublyLinkedList from "../src/list/doubly-linked-list/DoublyLinkedList";

const lists = [SinglyLinkedList, DoublyLinkedList];
type T = number;
type List = SinglyLinkedList<T> | DoublyLinkedList<T>;

for (const List of lists) {
  describe(`${List.name} Tests`, () => {
    let list: List;
    const values = [1, 2, 3, 4, 5];

    beforeEach(() => {
      list = new List(values[0]);
    });

    afterAll(() => {
      console.log(`\n---------- ${List.name} Tests Finished ----------\n`);
    });

    test("create a list", () => {
      expect(list.toArray()).toEqual([values[0]]);
      expect(list.size).toBe(1);
    });

    test("append a value", () => {
      list.append(values[1]);
      expect(list.toArray()).toEqual([values[0], values[1]]);
      expect(list.size).toBe(2);

      list.append(values[2]);
      expect(list.toArray()).toEqual([values[0], values[1], values[2]]);
      expect(list.size).toBe(3);
    });

    test("prepand a value", () => {
      list.prepend(values[1]);
      expect(list.toArray()).toEqual([values[1], values[0]]);
      expect(list.size).toBe(2);

      list.prepend(values[2]);
      expect(list.toArray()).toEqual([values[2], values[1], values[0]]);
      expect(list.size).toBe(3);
    });

    test("insert after a value", () => {
      list.insertAfter(values[0], values[1]);
      expect(list.toArray()).toEqual([values[0], values[1]]);
      expect(list.size).toBe(2);

      list.insertAfter(values[0], values[2]);
      expect(list.toArray()).toEqual([values[0], values[2], values[1]]);
      expect(list.size).toBe(3);
    });

    test("insert before a value", () => {
      list.insertBefore(values[0], values[1]);
      expect(list.toArray()).toEqual([values[1], values[0]]);
      expect(list.size).toBe(2);

      list.insertBefore(values[0], values[2]);
      expect(list.toArray()).toEqual([values[1], values[2], values[0]]);
      expect(list.size).toBe(3);
    });

    test("find a value", () => {
      expect(list.find(values[0])).not.toBeNull();
      expect(list.find(values[0])?.toArray()).toEqual([values[0]]);

      list.append(values[1]);

      expect(list.find(values[0])?.toArray()).toEqual([values[0], values[1]]);
      expect(list.find(values[1])?.toArray()).toEqual([values[1]]);

      expect(list.find(values[2])).toBeNull();
    });

    test("delete a value", () => {
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

    test("get head value", () => {
      expect(list.getHead()).toBe(values[0]);
      list.prepend(values[1]);
      expect(list.getHead()).toBe(values[1]);
    });

    test("get tail value", () => {
      expect(list.getTail()).toBe(values[0]);
      list.append(values[1]);
      expect(list.getTail()).toBe(values[1]);
    });

    test("clear the list", () => {
      expect(list.toArray()).toBeArrayOfSize(1);

      list.append(values[1]);

      list.clear();
      expect(list.toArray()).toBeArrayOfSize(0);
      expect(list.size).toBe(0);
    });

    test("is list empty", () => {
      expect(list.isEmpty()).toBeFalse();
      list.append(values[1]);
      list.clear();
      expect(list.isEmpty()).not.toBeFalse();
    });

    test("convert the list to Array", () => {
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

    test("reverse the list", () => {
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
