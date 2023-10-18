import { beforeEach, describe, expect, test } from "bun:test";
import HashMap from "../src/hash-map";

describe("HashMap Tests", () => {
  let map: HashMap;

  beforeEach(() => {
    map = new HashMap();
  });

  test("create a hash map", () => {
    expect(map.isInstanceOf(HashMap)).toBeTrue();
  });
});
