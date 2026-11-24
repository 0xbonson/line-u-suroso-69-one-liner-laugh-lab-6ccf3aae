// Make.fun competition entry submission script
import * as fs from 'node:fs';
import * as path from 'node:path';

const ENTRY_TEXT = "Prompt: Robot vacuum eats phone charger. Answer: I did not eat the cord; I neutralized an invasive synthetic snake that was siphoning wall power.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), `${ENTRY_TEXT}\n`);
