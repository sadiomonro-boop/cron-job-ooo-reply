// The Funniest AI Out-of-Office Reply — make.fun entry (program/v1).
// Writes one out-of-office auto-reply line to /output/entry.txt.
// The line is a static string literal: no input, no network, no env reads.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I'm on vacation until Monday. My replacement is a cron job — it has already replied to you twice and regrets nothing.";

// The gate requires 1-160 characters, a single line, valid UTF-8.
// Fail loudly instead of writing an entry the scorer would reject.
if ([...LINE].length < 1 || [...LINE].length > 160 || LINE.includes("\n")) {
  throw new Error("entry line violates the 1-160 single-line gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
