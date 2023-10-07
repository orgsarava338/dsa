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

  test("delete a value of head", () => {
    list.delete(values[0]);
    expect(list.toArray()).toEqual([]);
  });

 test("delete a value of a node", () => {
   list.append(values[1]);
   list.delete(values[1]);
   expect(list.toArray()).toEqual([values[0]]);
 });

  test("list is empty", () => {});
});
