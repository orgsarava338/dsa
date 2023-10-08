import SinglyLinkedList from "./src/list/singly-linked-list/SinglyLinkedList";
import DoublyLinkedList from "./src/list/doubly-linked-list/DoublyLinkedList";

const list = new DoublyLinkedList(1);

list.append(2)
list.append(3);
list.append(4);
list.append(5);

list.delete(4)
list.print();

list.delete(2)
list.print()


