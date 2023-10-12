import { IList } from "../Interface";
import Node from "./Node";

export default interface IDLList<T> extends IList<T> {
  tail: Node<T> | null;
}
