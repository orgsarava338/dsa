import { afterAll, beforeEach, describe, expect, test } from "bun:test";
import Queue from "../src/queue";

describe("Queue Tests", () => {
  const values = [1, 2, 3, 4, 5];
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue(values[0]);
  });

  test("create a queue", () => {
    expect(queue.elements).toEqual([values[0]]);
    expect(queue.size).toBe(1);

    let q = new Queue(values);
    expect(q.elements).toEqual(values);
    expect(q.size).toBe(values.length);

    let qu = new Queue();
    expect(qu.elements).toEqual([]);
    expect(qu.size).toBe(0);
  });

  test("enqueue in queue", () => {
    queue.enqueue(values[1]);
    expect(queue.elements).toEqual([1, 2]);
    expect(queue.size).toBe(2);
  });

  test("enqueue many in queue", () => {
    queue.enqueueMany(values.filter((e) => e !== values[0]));
    expect(queue.elements).toEqual(values);
    expect(queue.size).toBe(values.length);
  });

  test("dequeue in queue", () => {
    expect(queue.dequeue()).toBe(values[0]);
    expect(queue.elements).toBeArrayOfSize(0);
    expect(queue.size).toBe(0);
    expect(queue.dequeue()).toBeUndefined();

    queue.enqueueMany(values);
    let expected = values.filter((e) => e !== values[0]);

    expect(queue.dequeue()).toBe(values[0]);
    expect(queue.elements).toEqual(expected);
    // expect(queue.size()).toBe(expected.length);
  });

  test("dequeue many in queue", () => {
    queue.enqueueMany(values.filter((e) => e !== values[0]));

    let expected = [];
    expect(queue.dequeueMany(expected.length)).toBeArrayOfSize(expected.length);

    let [dequeued1, dequeued2, ...ans] = values;
    let dequeued = [dequeued1, dequeued2];

    expect(queue.dequeueMany(dequeued.length)).toEqual(dequeued);
    expect(queue.elements).toEqual(ans);
    expect(queue.elements).toBeArrayOfSize(ans.length);
  });
});
