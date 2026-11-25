import { mkdirSync, writeFileSync } from "node:fs";

// The Internet in One Word — entry: "cookies".
// One word for the whole internet: every site begs you to accept them,
// and the whole tracking economy runs on them. Funny on its own,
// true about the internet as a whole, surprising, seven letters.
// Gate: entry.txt must be UTF-8 text of 1 to 30 characters, not only
// whitespace — "cookies" is 7 characters, no trailing newline, so the
// file is exactly the word and nothing else.
const WORD = "cookies";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD);
