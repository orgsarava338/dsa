import SinglyLinkedList from "./src/list/singly-linked-list";
import DoublyLinkedList from "./src/list/doubly-linked-list";
import Queue from "./src/queue";
import Stack from "./src/stack";
import CircularSinglyLinkedList from "./src/list/singly-linked-list/circular";

const values = [1, 2, 3, 4, 5];

const sl = new SinglyLinkedList(values);
const dl = new DoublyLinkedList(values);
const scl = new CircularSinglyLinkedList(1)
const s = new Stack(values);
const q = new Queue(values);


scl.print()
scl.append(3)
scl.prepend(2)
scl.print()