import Stack from "./src/stack";
import Queue from "./src/queue";
import SinglyLinkedList from "./src/list/singly-linked-list";
import DoublyLinkedList from "./src/list/doubly-linked-list";
import CircularSinglyLinkedList from "./src/list/circular-singly-linked-list";
import CircularDoublyLinkedList from "./src/list/circular-doubly-linked-list";

const values = [1, 2, 3, 4, 5];

const s = new Stack(values);
const q = new Queue(values);
const sl = new SinglyLinkedList(values);
const dl = new DoublyLinkedList(1);
const dcl = new CircularDoublyLinkedList(values);

const scl = new CircularSinglyLinkedList(values[0]);
scl.append(2);
scl.append(3);
scl.print();