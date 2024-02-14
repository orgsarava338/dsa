import { beforeEach, describe, expect, test } from 'bun:test';

import SinglyLinkedList from '../../src/list/singly-linked-list/linear';
import DoublyLinkedList from '../../src/list/doubly-linked-list/linear';
import CircularSinglyLinkedList from '../../src/list/singly-linked-list/circular';
import CircularDoublyLinkedList from '../../src/list/doubly-linked-list/circular';

describe('SinglyLinkedList Tests', () => {
  type T = number;

  const values = [1, 2, 3, 4, 5];
  const lists = [SinglyLinkedList<T>, DoublyLinkedList<T>, CircularSinglyLinkedList<T>, CircularDoublyLinkedList<T>];
  const unexpectedLists = lists.filter(e => e !== SinglyLinkedList);
  
  let list: SinglyLinkedList<T>;

  beforeEach(() => {
   list = new SinglyLinkedList(values[0]);
  });

  test('create a SinglyLinkedList', () => {
    expect(list.isInstanceOf(SinglyLinkedList)).toBeTrue();
    unexpectedLists.forEach(listClass => expect(list.isInstanceOf(listClass)).toBeFalse());
    expect(list.toArray().toString()).toEqual([values[0]].toString());
    expect(list.size).toBe(1);

    let l = new SinglyLinkedList(values);
    expect(list.isInstanceOf(SinglyLinkedList)).toBeTrue();
    unexpectedLists.forEach(listClass => expect(list.isInstanceOf(listClass)).toBeFalse());

    expect(l.toArray().toString()).toEqual(values.toString());
    expect(l.size).toBe(values.length);

    l = new SinglyLinkedList([]);
    expect(list.isInstanceOf(SinglyLinkedList)).toBeTrue();
    unexpectedLists.forEach(listClass => expect(list.isInstanceOf(listClass)).toBeFalse());

    expect(l.toArray()).toBeArrayOfSize(0);

    l = new SinglyLinkedList();
    expect(list.isInstanceOf(SinglyLinkedList)).toBeTrue();
    unexpectedLists.forEach(listClass => expect(list.isInstanceOf(listClass)).toBeFalse());

    expect(l.toArray()).toBeArrayOfSize(0);
  });

  test('append a value in SinglyLinkedList', () => {
    list.append(values[1]);
    expect(list.isInstanceOf(SinglyLinkedList)).toBeTrue();

    expect(list.toArray().toString()).toEqual([values[0], values[1]].toString());
    expect(list.size).toBe(2);

    list.append(values[2]);

    expect(list.toArray().toString()).toEqual([values[0], values[1], values[2]].toString());
    expect(list.size).toBe(3);

    expect(list.isInstanceOf(SinglyLinkedList)).toBeTrue();
    unexpectedLists.forEach(listClass => expect(list.isInstanceOf(listClass)).toBeFalse());
  });

  test('prepand a value in SinglyLinkedList', () => {
    list.prepend(values[1]);

    expect(list.toArray().toString()).toEqual([values[1], values[0]].toString());
    expect(list.size).toBe(2);

    list.prepend(values[2]);

    expect(list.toArray().toString()).toEqual([values[2], values[1], values[0]].toString());
    expect(list.size).toBe(3);

    expect(list.isInstanceOf(SinglyLinkedList)).toBeTrue();
    unexpectedLists.forEach(listClass => expect(list.isInstanceOf(listClass)).toBeFalse());
  });

  test('insert after a value in SinglyLinkedList', () => {
    list.insertAfter(values[0], values[1]);

    expect(list.toArray().toString()).toEqual([values[0], values[1]].toString());
    expect(list.size).toBe(2);

    list.insertAfter(values[0], values[2]);

    expect(list.toArray().toString()).toEqual([values[0], values[2], values[1]].toString());
    expect(list.size).toBe(3);

    expect(list.isInstanceOf(SinglyLinkedList)).toBeTrue();
    unexpectedLists.forEach(listClass => expect(list.isInstanceOf(listClass)).toBeFalse());
  });

  test('insert before a value in SinglyLinkedList', () => {
    list.insertBefore(values[0], values[1]);

    expect(list.toArray().toString()).toEqual([values[1], values[0]].toString());
    expect(list.size).toBe(2);

    list.insertBefore(values[0], values[2]);

    expect(list.toArray().toString()).toEqual([values[1], values[2], values[0]].toString());
    expect(list.size).toBe(3);

    expect(list.isInstanceOf(SinglyLinkedList)).toBeTrue();
    unexpectedLists.forEach(listClass => expect(list.isInstanceOf(listClass)).toBeFalse());
  });

  test('find a value in SinglyLinkedList', () => {
    const node = list.find(values[0]);

    expect(node).not.toBeNull();
    expect(node!.value).toBe(values[0]);

    list.append(values[1]);

    const node0 = list.find(values[0]);
    expect(node0!.value).toBe(values[0]);

    const node1 = list.find(values[1]);
    expect(node1!.value).toBe(values[1]);

    const node2 = list.find(values[2]);
    expect(node2).toBeNull();
  });

  test('delete a value in SinglyLinkedList', () => {
    list.append(values[1]);
    list.append(values[2]);
    list.append(values[3]);
    list.append(values[4]);

    list.delete(values[0]);

    let expected = values.filter(e => e !== values[0]);
    expect(list.toArray().toString()).toEqual(expected.toString());
    expect(list.size).toBe(expected.length);

    list.delete(values[3]);

    expected = expected.filter(e => e !== values[3]);
    expect(list.toArray().toString()).toEqual(expected.toString());
    expect(list.toArray()).toBeArrayOfSize(expected.length);

    list.delete(values[4]);

    expected = expected.filter(e => e !== values[4]);
    expect(list.toArray().toString()).toEqual(expected.toString());
    expect(list.size).toBe(expected.length);
  });

  test('get head value in SinglyLinkedList', () => {
    expect(list.getHead()).toBe(values[0]);
    list.prepend(values[1]);
    expect(list.getHead()).toBe(values[1]);
  });

  test('get tail value in SinglyLinkedList', () => {
    expect(list.getTail()).toBe(values[0]);
    list.append(values[1]);
    expect(list.getTail()).toBe(values[1]);
  });

  test('clear the SinglyLinkedList', () => {
    expect(list.toArray()).toBeArrayOfSize(1);

    list.append(values[1]);

    list.clear();
    expect(list.toArray()).toBeArrayOfSize(0);
    expect(list.size).toBe(0);
  });

  test('is SinglyLinkedList empty', () => {
    expect(list.isEmpty()).toBeBoolean();
    expect(list.isEmpty()).toBeFalse();
    list.append(values[1]);
    list.clear();
    expect(list.isEmpty()).toBeTrue();
  });

  test('convert the SinglyLinkedList to array', () => {
    expect(list.toArray()).toBeArray();
    expect(list.toArray().toString()).toEqual([values[0]].toString());
    expect(list.toArray()).toBeArrayOfSize(1);

    list.append(values[1]);
    list.append(values[2]);
    list.append(values[3]);
    list.append(values[4]);

    expect(list.toArray()).toBeArray();
    expect(list.toArray().toString()).toEqual(values.toString());
    expect(list.toArray()).toBeArrayOfSize(values.length);
  });

  test('reverse the SinglyLinkedList', () => {
    list.reverse();
    expect(list.toArray().toString()).toEqual([values[0]].toString());

    list.append(values[1]);
    list.append(values[2]);
    list.append(values[3]);
    list.append(values[4]);

    list.reverse();
    expect(list.toArray().toString()).toEqual(values.reverse().toString());

    expect(list.isInstanceOf(SinglyLinkedList)).toBeTrue();
    unexpectedLists.forEach(listClass => expect(list.isInstanceOf(listClass)).toBeFalse());
  });
});
