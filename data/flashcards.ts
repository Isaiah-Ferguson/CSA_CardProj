import { Deck } from '@/types/flashcard';

import { javascriptFundamentals } from './decks/javascript-fundamentals';
import { reactFundamentals } from './decks/react-fundamentals';
import { typescriptEssentials } from './decks/typescript-essentials';
import { cssHtmlFundamentals } from './decks/css-html-fundamentals';
import { csharpFundamentals } from './decks/csharp-fundamentals';
import { entityFrameworkCore } from './decks/entity-framework-core';
import { sqlFundamentals } from './decks/sql-fundamentals';
import { csharpWebApi } from './decks/csharp-web-api';
import { programmingFundamentals } from './decks/programming-fundamentals';

export const decks: Deck[] = [
  javascriptFundamentals,
  reactFundamentals,
  typescriptEssentials,
  cssHtmlFundamentals,
  csharpFundamentals,
  entityFrameworkCore,
  sqlFundamentals,
  csharpWebApi,
  programmingFundamentals,
];
