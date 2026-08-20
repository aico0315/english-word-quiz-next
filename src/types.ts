export type Word = {
  id: string;
  category: string;
  question: string;
  answer: string[];
  supplement: string;
};

export type WordFormData = {
  id: string;
  category: string;
  question: string;
  answer: string;
  supplement: string;
};