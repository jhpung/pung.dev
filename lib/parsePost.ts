import { readFileSync } from "fs";
import { Effect } from "effect";

export function parsePost(path: string) {
  try {
    const file = readFileSync(path);

    graymatter;
  } catch (err: unknown) {
    return Effect.fail(err);
  }
}
