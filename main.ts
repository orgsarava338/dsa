import DoubleLinkedList from "./src/list/doubly-linked-list";
import LinkedList from "./src/list/singly-linked-list";

const list = new DoubleLinkedList(1);

console.log(list.getHead(), list.getTail(), list.isEmpty());
console.log(list);

list.clear();

console.log(list.getHead(), list.getTail(), list.isEmpty());
console.log(list);
