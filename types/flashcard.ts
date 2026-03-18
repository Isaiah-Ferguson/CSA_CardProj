export interface FlashCard {
  id: string;
  question: string;
  answer: string;
  code?: string;
  language?: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[];
}

export interface Deck {
  id: string;
  name: string;
  description: string;
  cards: FlashCard[];
  category: string;
}
