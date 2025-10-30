import { describe, it, expect } from "vitest";
import { add, multiply, isPalindrome } from "./utils";

describe("utils", () => {
  describe("add", () => {
    it("should add two positive numbers", () => {
      expect(add(2, 3)).toBe(10);
    });

    it("should add negative numbers", () => {
      expect(add(-2, -3)).toBe(-5);
    });

    it("should add zero", () => {
      expect(add(5, 0)).toBe(5);
    });
  });

  describe("multiply", () => {
    it("should multiply two positive numbers", () => {
      expect(multiply(3, 4)).toBe(12);
    });

    it("should multiply by zero", () => {
      expect(multiply(5, 0)).toBe(0);
    });

    it("should multiply negative numbers", () => {
      expect(multiply(-2, 3)).toBe(-6);
    });
  });

  describe("isPalindrome", () => {
    it("should return true for palindromes", () => {
      expect(isPalindrome("racecar")).toBe(true);
      expect(isPalindrome("A man a plan a canal Panama")).toBe(true);
    });

    it("should return false for non-palindromes", () => {
      expect(isPalindrome("hello")).toBe(false);
      expect(isPalindrome("world")).toBe(false);
    });

    it("should handle empty strings", () => {
      expect(isPalindrome("")).toBe(true);
    });

    it("should be case insensitive", () => {
      expect(isPalindrome("RaceCar")).toBe(true);
    });
  });
});
