import DoubleLinkedList from "./src/double-linked-list/DoubleLinkedList";
import LinkedList from "./src/linked-list/LinkedList";

const list = new DoubleLinkedList(1);

console.log(list.getHead(), list.getTail(), list.isEmpty());

list.clear();

console.log(list.getHead(), list.getTail(), list.isEmpty());