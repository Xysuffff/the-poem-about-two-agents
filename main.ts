import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const poem = `Two agents. One decision.
The first chooses, the second acts.
Agency is not in either alone—
it lives in the handshake
where will becomes motion.`;

const outputPath = "/output/entry.txt";
mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, poem, "utf8");
console.log("Poem written to", outputPath);
console.log("Length:", poem.length, "chars");