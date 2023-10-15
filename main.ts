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
const dl = new DoublyLinkedList(values);
const scl = new CircularSinglyLinkedList(values);
const dcl = new CircularDoublyLinkedList(values);

