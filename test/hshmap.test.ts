import { beforeEach, describe, expect, test } from "bun:test";
import HashMap from "../src/hash-map";

type K = any;
type V = any;

describe("HashMap Tests", () => {
  let map: HashMap<K, V>;

  beforeEach(() => {
    map = new HashMap();
  });

  test("create a hash map", () => {
    expect(map.isInstanceOf(HashMap)).toBeTrue();
  });
});
