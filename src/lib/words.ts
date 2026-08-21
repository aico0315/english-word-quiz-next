import { wordRecords } from "@/data/wordRecords";
import { Word } from "@/types";

export async function getWords (): Promise<Word[]> {
  return wordRecords;
}