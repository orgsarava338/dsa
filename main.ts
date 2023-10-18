import Stack from "./src/stack";
import Queue from "./src/queue/";
import SinglyLinkedList from "./src/list/singly-linked-list/linear";
import DoublyLinkedList from "./src/list/doubly-linked-list/linear";
import CircularSinglyLinkedList from "./src/list/singly-linked-list/circular";
import CircularDoublyLinkedList from "./src/list/doubly-linked-list/circular";

const values = [1, 2, 3, 4, 5];

const s = new Stack(values);
const q = new Queue(values);
const sl = new SinglyLinkedList([1,2]);
const dl = new DoublyLinkedList([1,2]);
const scl = new CircularSinglyLinkedList([1,2]);
const dcl = new CircularDoublyLinkedList([1,2]);

sl.print()
dl.print()
scl.print();
dcl.print()
