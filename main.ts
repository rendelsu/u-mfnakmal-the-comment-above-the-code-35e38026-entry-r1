import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

const outFile = join(outDir, "entry.txt");
writeFileSync(
  outFile,
  "// Don't fix this rounding bug; finance closed the books on its numbers, so a fix would reopen March.\n"
);
chmodSync(outFile, 0o644);
