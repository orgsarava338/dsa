import SinglyLinkedList from "./src/list/singly-linked-list";
import DoublyLinkedList from "./src/list/doubly-linked-list";
import Queue from "./src/queue";
import Stack from "./src/stack";

const s = new Stack(1);
const q = new Queue([1, 2, 3, 4]);

q.print();

q.forEach((e) => console.log(e));

// q.filter((e) => e !== 0).print();