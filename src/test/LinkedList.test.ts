import { beforeEach, describe, expect, test } from "bun:test";
import LinkedList from "../linked-list/LinkedList";

describe("Linked Lists Tests", () => {
  let list: LinkedList<number>;
  const values = [1, 2, 3, 4, 5];

  beforeEach(() => {
    list = new LinkedList(values[0]);
  });

  test("create a list", () => {
    expect(list.toArray()).toEqual([values[0]]);
  });

  test("append a value", () => {
    list.append(values[1]);
    expect(list.toArray()).toEqual([values[0], values[1]]);
  });

  test("delete a value", () => {
    list.append(values[1]);
    list.append(values[2]);
    list.append(values[3]);
    list.append(values[4]);
    list.delete(values[0]);
    const [zero, ...expected] = values;
    expect(list.toArray()).toEqual(expected);
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

});
