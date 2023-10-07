import LinkedList from "./src/linked-list/LinkedList";

const list = new LinkedList(1)

list.append(2)
list.append(3)

list.print()
list.delete(1)
list.delete(3)
list.print();
