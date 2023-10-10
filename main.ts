import SinglyLinkedList from "./src/list/singly-linked-list";
import DoublyLinkedList from "./src/list/doubly-linked-list";
import Queue from "./src/queue";
import Stack from "./src/stack";

const s = new Stack(1);

s.push([2, 3, 4, 5]);

s.print();
console.log(s.peekAt(2));
s.print();
