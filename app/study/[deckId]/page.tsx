'use client';

import { useState, useEffect, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import FlashCard from '@/components/FlashCard';
import { decks } from '@/data/flashcards';
import { FlashCard as FlashCardType } from '@/types/flashcard';

const QUESTIONS_PER_SESSION = 10;

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function StudyPage() {
  const params = useParams();
  const router = useRouter();
  const deckId = params.deckId as string;
  
  const deck = decks.find(d => d.id === deckId);
  const [sessionCards, setSessionCards] = useState<FlashCardType[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [studiedCards, setStudiedCards] = useState<Set<string>>(new Set());
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (deck) {
      const shuffled = shuffleArray(deck.cards);
      const selected = shuffled.slice(0, QUESTIONS_PER_SESSION);
      setSessionCards(selected);
    }
  }, [deck]);

  if (!deck) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Deck not found
          </h1>
          <button
            onClick={() => router.push('/decks')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Back to Decks
          </button>
        </div>
      </div>
    );
  }

  if (sessionCards.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        </div>
      </div>
    );
  }

  const currentCard = sessionCards[currentCardIndex];

  const handleNext = () => {
    if (currentCardIndex < sessionCards.length - 1) {
      setStudiedCards(prev => new Set(prev).add(currentCard.id));
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      setStudiedCards(prev => new Set(prev).add(currentCard.id));
      setIsCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  const handleRestart = () => {
    const shuffled = shuffleArray(deck.cards);
    const selected = shuffled.slice(0, QUESTIONS_PER_SESSION);
    setSessionCards(selected);
    setCurrentCardIndex(0);
    setStudiedCards(new Set());
    setIsCompleted(false);
  };

  const handleComplete = () => {
    router.push('/decks');
  };

  const progress = ((studiedCards.size + 1) / sessionCards.length) * 100;

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-4">
          <div className="mb-8">
            <div className="text-6xl mb-4">🎉</div>
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Session Complete!
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">
              You've completed {QUESTIONS_PER_SESSION} questions from {deck.name}
            </p>
            <p className="text-gray-500 dark:text-gray-500">
              Great job! Ready for another round?
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleRestart}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Start New Session
            </button>
            <button
              onClick={handleComplete}
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              Back to Decks
            </button>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 max-w-md mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <div className="text-sm text-gray-500 dark:text-gray-400">Questions Answered</div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                {QUESTIONS_PER_SESSION}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <div className="text-sm text-gray-500 dark:text-gray-400">Total in Deck</div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {deck.cards.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <button
            onClick={() => router.push('/decks')}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 mb-4 flex items-center gap-2"
          >
            ← Back to Decks
          </button>
          
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                {deck.name}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                {deck.description}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                Session: {QUESTIONS_PER_SESSION} random questions
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500 dark:text-gray-400">Progress</div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {Math.round(progress)}%
              </div>
            </div>
          </div>

          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <FlashCard
          card={currentCard}
          onNext={handleNext}
          onPrevious={handlePrevious}
          showNavigation={true}
          currentIndex={currentCardIndex}
          totalCards={sessionCards.length}
        />

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <div className="text-sm text-gray-500 dark:text-gray-400">Session Cards</div>
            <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              {sessionCards.length}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <div className="text-sm text-gray-500 dark:text-gray-400">Studied</div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {studiedCards.size}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <div className="text-sm text-gray-500 dark:text-gray-400">Remaining</div>
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {sessionCards.length - studiedCards.size}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <div className="text-sm text-gray-500 dark:text-gray-400">Total in Deck</div>
            <div className="text-lg font-bold text-gray-800 dark:text-gray-100">
              {deck.cards.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
