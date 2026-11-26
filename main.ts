import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Funniest One-Line Resignation Letter — the resignation letter of a
// cron job that ran 400,000 times since March. 105 characters, one line,
// no trailing newline.
const LINE =
  "400,000 runs since March. Zero thanks, 400,000 blames. " +
  "I quit — effective immediately, and retroactively.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
