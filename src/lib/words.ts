import { wordRecords } from "@/data/wordRecords";
import { Word } from "@/types";

export default async function getWords (): Promise<Word[]> {
  return wordRecords;
}