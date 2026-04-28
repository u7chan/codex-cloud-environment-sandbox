import { expect, test } from "bun:test";

import { sum } from "./src/sum.js";

test("sum adds two numbers", () => {
  expect(sum(1, 2)).toBe(3);
});
