import test from "node:test";
import assert from "node:assert/strict";
import { toInitials } from "../src/initials.js";

test("creates initials from a full name", () => {
  assert.equal(toInitials("Kode N Vibe"), "KNV");
});

test("ignores extra whitespace", () => {
  assert.equal(toInitials("  safe   small steps "), "SSS");
});
