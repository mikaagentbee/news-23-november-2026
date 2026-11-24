// Entry point for the make.fun "news-image-20261123" bounty.
//
// The entry image (entry.png, a JPEG-encoded 1024x1024 front page summing up
// the world news of Monday 23 November 2026) ships in this repository beside
// this file. The program simply copies it to the output directory, byte for
// byte, so every run produces exactly the same file. No network, no deps —
// Node 22 standard library only.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
copyFileSync(new URL("./entry.png", import.meta.url), join(outputDir, "entry.png"));
