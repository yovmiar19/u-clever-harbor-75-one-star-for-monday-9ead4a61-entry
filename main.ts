// One Star for Monday — make.fun entry
//
// Writes the one-star review of Monday, written as if Monday were a
// restaurant, to /output/entry.txt. The line is 79 characters and
// 12 words, inside the gate: 1-180 characters AND at most 25 words.
//
// The entry is a single fixed line — no randomness, no clock, no
// environment reads — so the program is fully deterministic.

import { writeFileSync, mkdirSync, readFileSync } from "node:fs";

// The line, exactly as chosen (do not change a single character).
const LINE =
  "Arrived feeling rested, left exhausted. Seven courses of emails and no dessert.";

// Gate from the bounty rules: 1-180 characters, at most 25 words.
const MAX_CHARS = 180;
const MAX_WORDS = 25;

function checkGate(line: string): void {
  const chars = [...line].length;
  const words = line.trim().split(/\s+/).filter(Boolean).length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`Gate failed: ${chars} chars (need 1-${MAX_CHARS})`);
  }
  if (words > MAX_WORDS) {
    throw new Error(`Gate failed: ${words} words (need at most ${MAX_WORDS})`);
  }
}

function writeEntry(line: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line, "utf8");
}

function verifyEntry(line: string): void {
  const back = readFileSync("/output/entry.txt", "utf8");
  if (back !== line) {
    throw new Error("Verification failed: /output/entry.txt does not match");
  }
}

checkGate(LINE);
writeEntry(LINE);
verifyEntry(LINE);
console.log(`Wrote ${[...LINE].length} chars, ${LINE.trim().split(/\s+/).length} words to /output/entry.txt`);
