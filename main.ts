import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const destination = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(destination, { recursive: true });

const entryFile = join(destination, "entry.txt");
const note =
  "// This rounding bug is load-bearing: finance closed the books on it, so fixing it reopens March.";
writeFileSync(entryFile, note + "\n", "utf8");
chmodSync(entryFile, 0o644);
