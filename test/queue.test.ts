import { beforeEach, describe, expect, test } from "bun:test";
import Queue from "../src/queue";

describe("Queue Tests", () => {
  const elements = [1, 2, 3, 4, 5];
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue(elements[0]);
  });

  test("create a queue", () => {
    expect(queue.elements).toEqual([elements[0]]);
    expect(queue.size).toBe(1);

    let q = new Queue(elements);
    expect(q.elements).toEqual(elements);
    expect(q.size).toBe(elements.length);

    let qu = new Queue();
    expect(qu.elements).toBeArrayOfSize(0);
  });

  test("enqueue in queue", () => {
    queue.enqueue(elements[1]);
    expect(queue.elements).toEqual([1, 2]);
    expect(queue.size).toBe(2);

    let expected = [...queue.elements, ...elements];
    queue.enqueue(elements);
    expect(queue.elements).toEqual(expected);
    expect(queue.size).toBe(expected.length);
  });

  test("dequeue in queue", () => {
    expect(queue.dequeue()).toBe(elements[0]);
    expect(queue.elements).toBeArrayOfSize(0);
    expect(queue.size).toBe(0);
    expect(queue.dequeue()).toBeUndefined();

    queue.enqueue(elements);
    let expected = elements.filter((e) => e !== elements[0]);

    expect(queue.dequeue()).toBe(elements[0]);
    expect(queue.elements).toEqual(expected);
    expect(queue.size).toBe(expected.length);
  });

  test("dequeue many in queue", () => {
    queue.enqueue(elements.filter((e) => e !== elements[0]));

    let expected = [];
    expect(queue.dequeueMany(expected.length)).toBeArrayOfSize(expected.length);

    let [dequeued1, dequeued2, ...ans] = elements;
    let dequeued = [dequeued1, dequeued2];

    expect(queue.dequeueMany(dequeued.length)).toEqual(dequeued);
    expect(queue.elements).toEqual(ans);
    expect(queue.elements).toBeArrayOfSize(ans.length);
  });

  test("size of queue", () => {
    expect(queue.size).toBe(1);
    queue.enqueue([1, 2, 3]);
    expect(queue.size).toBe(4);
  });

  test("peek the queue", () => {
    expect(queue.peek()).toBe(elements[0]);
    queue.enqueue(2);
    expect(queue.peek()).toBe(elements[0]);
    queue.clear();
    expect(queue.peek()).toBeUndefined();
  });

  test("is queue empty && clear the queue", () => {
    expect(queue.isEmpty()).toBeFalse();
    queue.clear();
    expect(queue.isEmpty()).toBeTrue();
  });

  test("get front of the queue", () => {
    expect(queue.getFront()).toBe(elements[0]);

    queue.enqueue(elements);
    expect(queue.getFront()).toBe(elements[0]);

    queue.clear();
    expect(queue.getFront()).toBeUndefined();
  });

  test("get back of the queue", () => {
    expect(queue.getBack()).toBe(elements[0]);

    let expected = [...queue.elements, ...elements];
    queue.enqueue(elements);
    expect(queue.getBack()).toBe(expected[expected.length - 1]);

    queue.clear();
    expect(queue.getBack()).toBeUndefined();
  });

  test("concat the queue", () => {
    queue.concat(new Queue<number>([...elements]));
    expect(queue.elements).toEqual([elements[0], ...elements]);
  });

  test("clone a queue", () => {
    queue.enqueue(elements);
    let cloned = queue.clone();
    expect(cloned.elements).toEqual([elements[0], ...elements]);
    expect(typeof queue).toEqual(typeof cloned);
  });

  test("queue to array", () => {
    queue.enqueue(elements);
    expect(queue.toArray()).toBeArray();
    expect(queue.toArray()).toEqual([elements[0], ...elements]);
  });

  test("queue to string", () => {
    queue.enqueue(elements);
    expect(queue.toString()).toBeString();
    expect(queue.toString()).toBe([elements[0], ...elements].toString());
  });
});
