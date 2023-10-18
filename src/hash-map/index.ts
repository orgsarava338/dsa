import { IHashMap } from "./Interfacce";

export default class HashMap implements IHashMap {
  isInstanceOf(classToCheck: new () => any): Boolean {
    return this instanceof classToCheck;
  }
}
