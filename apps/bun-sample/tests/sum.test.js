import { describe, expect, test } from "bun:test";

import { sum } from "../src/sum.js";

describe("sum", () => {
  test("adds two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("adds negative and positive numbers", () => {
    expect(sum(-5, 2)).toBe(-3);
  });

  test("supports floating-point values", () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3, 5);
  });

  test("throws when arguments are not finite numbers", () => {
    expect(() => sum("1", 2)).toThrow(TypeError);
    expect(() => sum(Infinity, 2)).toThrow(TypeError);
  });
});
