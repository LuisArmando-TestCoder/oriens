import { parseArgs } from "jsr:@std/cli/parse-args";
import { join } from "jsr:@std/path";

const args = parseArgs(Deno.args, {
  string: ["title", "content"],
  alias: { t: "title", c: "content" },
  default: { title: "", content: "" },
});

const title = args.title;
const content = args.content;

// Generate date: YYYY-MM-DD
const date = new Date().toISOString().split("T")[0];

// Generate excerpt: 10-word slice of content if exists
let excerpt = "";
if (content) {
  const words = content.trim().split(/\s+/);
  excerpt = words.slice(0, 10).join(" ");
  if (words.length > 10) {
    excerpt += "...";
  }
}

// Create slug for filename
const titleSlug = title
  .toLowerCase()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/(^-|-$)/g, "");

const fileName = titleSlug ? `${date}-${titleSlug}.md` : `${date}.md`;
const filePath = join("src/content/posts", fileName);

const fileContent = `---
title: "${title}"
date: "${date}"
excerpt: "${excerpt}"
---

${content}
`;

await Deno.mkdir("src/content/posts", { recursive: true });
await Deno.writeTextFile(filePath, fileContent);

console.log(`Post created: ${filePath}`);
