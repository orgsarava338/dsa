import { IList } from "../Interface";
import Node from "./Node";

export default interface IDLList<T> extends IList<T> {
  readonly tail: Node<T> | null;
}
