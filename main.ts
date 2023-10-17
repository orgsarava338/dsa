import Stack from "./src/stack";
import Queue from "./src/queue/";
import SinglyLinkedList from "./src/list/singly-linked-list/linear";
import DoublyLinkedList from "./src/list/doubly-linked-list/linear";
import CircularSinglyLinkedList from "./src/list/singly-linked-list/circular";
import CircularDoublyLinkedList from "./src/list/doubly-linked-list/circular";

const values = [1, 2, 3, 4, 5];

const s = new Stack(values);
const q = new Queue(values);
const sl = new SinglyLinkedList(values);
const dl = new DoublyLinkedList(values);
const scl = new CircularSinglyLinkedList(values);
const dcl = new CircularDoublyLinkedList(values);

scl.print()
scl.reverse()
// console.log(scl);

let current = scl.head 
do {
  console.log(current)
    current = current?.next!;
  
} while (current.next !== scl.head);