import DoubleLinkedList from "./src/list/doubly-linked-list";
import LinkedList from "./src/list/singly-linked-list";

const list = new DoubleLinkedList(1);

list.print();

list.append(2);
list.append(3);

list.print();