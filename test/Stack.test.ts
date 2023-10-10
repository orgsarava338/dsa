import { afterAll, beforeEach, describe, expect, test } from "bun:test";
import Stack from "../src/stack";

describe("Queue Tests", () => {
  let stack: Stack<number>;
  const elements = [1, 2, 3, 4, 5];

  beforeEach(() => {
    stack = new Stack(elements[0]);
  });

  test("create a stack", () => {
    expect(stack.toArray()).toEqual([elements[0]]);

    let s = new Stack();
    expect(s.toArray()).toBeArrayOfSize(0);

    let st = new Stack(elements);
    expect(st.toArray()).toEqual(elements);
  });

  test("push a element in stack", () => {
    stack.push(elements[1]);
    expect(stack.toArray()).toEqual([elements[0], elements[1]]);

    let expected = [elements[0], elements[1], ...elements];
    stack.push(elements);
    expect(stack.toArray()).toEqual(expected);
  });

  test("pop a element in stack", () => {
    stack.push(elements[1]);
    expect(stack.pop()).toBe(elements[1]);
    expect(stack.toArray()).toEqual([elements[0]]);

    expect(stack.pop()).toBe(elements[0]);
    expect(stack.toArray()).toBeArrayOfSize(0);

    expect(stack.pop()).toBeUndefined();
  });

  test("peek a element in stack", () => {
    expect(stack.peek()).toBe(elements[0]);

    let expected = [elements[0], ...elements];
    stack.push(elements);
    expect(stack.peek()).toBe(elements[elements.length - 1]);

    stack.clear();
    expect(stack.peek()).toBeUndefined();
  });

  test("peekAt in index of a stack", () => {
    expect(stack.peekAt(1)).toBe(elements[0]);

    // expected = [ 1, 1, 2, 3, 4, 5]
    let expected = [elements[0], ...elements];

    stack.push(elements);
    expect(stack.peekAt(expected.length - 2)).toBe(
      expected[expected.length - 3]
    );
  });

  test("is stack empty", () => {
    expect(stack.isEmpty()).toBeFalse();
    stack.clear();
    expect(stack.isEmpty()).toBeTrue();
  });

  test("clear the stack", () => {
    stack.clear();
    expect(stack.toArray()).toBeArrayOfSize(0);
  });

  test("stack to array", () => {
    stack.push(elements);
    expect(stack.toArray()).toEqual([elements[0], ...elements]);
  });

  test("stack to array reversed", () => {
    stack.push(elements);
    expect(stack.toArrayReversed()).toEqual(
      [elements[0], ...elements].toReversed()
    );
  });

  test("search a element in stack", () => {
    stack.push(elements);

    // expected = [1, 1, 2, 3, 4, 5];
    let expected = [elements[0], ...elements];

    expect(stack.search(expected[0])).toBe(1);
    expect(stack.search(expected[2])).toBe(3);
  });

  test("is contains a element in stack", () => {
    stack.push(elements);
    expect(stack.contains(4)).toBeTrue();
    expect(stack.contains(10)).toBeFalse();
  });

  test("duplicate a stack", () => {
    stack.push(elements);
    const duplicated = stack.duplicate();

    expect(duplicated.toArray()).toEqual([elements[0], ...elements]);
    expect(typeof stack).toEqual(typeof duplicated)
  });
});
