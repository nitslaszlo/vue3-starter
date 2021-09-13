import { sleep } from "@/util";

/**
 * Get a random number after waiting a few seconds.
 */
export async function getRandomNumber(): Promise<number> {
  await sleep(3000);
  return Math.random();
}
