import DoublyLinkedList from "./src/list/doubly-linked-list/DoublyLinkedList";

type T = number | string | Object | Function | T[];

const list = new DoublyLinkedList<T>(1);

list.print();

list.append([1, 2, 3, 4]);
list.append("str");
list.append(3);

list.print();
