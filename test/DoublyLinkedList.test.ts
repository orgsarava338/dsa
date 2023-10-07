import { beforeEach, describe, expect, test } from "bun:test";
import DoublyLinkedList from "../src/list/doubly-linked-list";

describe("DoublyLinkedList Tests", () => {
  let list: DoublyLinkedList<number>;
  const values = [1, 2, 3, 4, 5];

  beforeEach(() => {
    list = new DoublyLinkedList(values[0]);
  });

  test("create a list", () => {
    expect(list.toArray()).toEqual([values[0]]);
    expect(list.size).toBe(1);
  });

  test("append a value", () => {
    list.append(values[1]);
    expect(list.toArray()).toEqual([values[0], values[1]]);
    expect(list.size).toBe(2);
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

    list.append(values[2]);

    list.insertAfter(values[2], values[3]);

    expect(list.toArray()).toEqual(
      values.filter((e) => (e !== values[4] ? e !== values[5] : false))
    );
    expect(list.size).toBe(4);
  });

  test("insert before a value", () => {
    list.insertBefore(values[0], values[1]);
    expect(list.toArray()).toEqual([values[1], values[0]]);
    expect(list.size).toBe(2);

    list.append(values[2]);
    list.insertBefore(values[2], values[3]);

    expect(list.toArray()).toEqual([
      values[1],
      values[0],
      values[3],
      values[2],
    ]);
    expect(list.size).toBe(4);
  });

  test("find a value", () => {
    expect(list.find(values[0])).not.toBeNull();

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

    list.delete(values[4]);

    expected = expected.filter((e) => e !== values[4]);
    expect(list.toArray()).toEqual(expected);
    expect(list.size).toBe(expected.length);
  });

  test("get head value", () => {
    list.append(values[1]);
    list.append(values[2]);
    list.append(values[3]);
    expect(list.getHead()).toBe(values[0]);
  });

  test("get tail value", () => {
    list.append(values[1]);
    list.append(values[2]);
    list.append(values[3]);
    expect(list.getTail()).toBe(values[3]);
  });

  test("clear the list", () => {
    list.clear();
    expect(list.toArray()).toBeArrayOfSize(0);
    expect(list.size).toBe(0);
  });

  test("is list empty", () => {
    expect(list.isEmpty()).toBeFalse();
    list.clear();
    expect(list.isEmpty()).not.toBeFalse();
  });

  test("convert the list to Array", () => {
    list.append(values[1]);
    list.append(values[2]);
    list.append(values[3]);
    list.append(values[4]);

    expect(list.toArray()).toBeArray();
    expect(list.toArray()).toBeArrayOfSize(values.length);
  });

  test("reverse the list", () => {
    list.append(values[1]);
    list.append(values[2]);
    list.append(values[3]);
    list.append(values[4]);

    list.reverse();

    expect(list.toArray()).toEqual(values.reverse());
    expect(list.toArray()).toBeArrayOfSize(values.length);
  });
});
