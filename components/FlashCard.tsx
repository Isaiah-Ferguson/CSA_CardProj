'use client';

import { useState } from 'react';
import { FlashCard as FlashCardType } from '@/types/flashcard';

interface FlashCardProps {
  card: FlashCardType;
  onNext?: () => void;
  onPrevious?: () => void;
  showNavigation?: boolean;
  currentIndex?: number;
  totalCards?: number;
}

export default function FlashCard({ 
  card, 
  onNext, 
  onPrevious, 
  showNavigation = false,
  currentIndex = 0,
  totalCards = 0
}: FlashCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    setIsFlipped(false);
    onNext?.();
  };

  const handlePrevious = () => {
    setIsFlipped(false);
    onPrevious?.();
  };

  const difficultyColors = {
    easy: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    hard: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="perspective-1000">
        <div
          className={`relative w-full h-96 transition-transform duration-500 transform-style-3d cursor-pointer ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
          onClick={handleFlip}
        >
          <div className="absolute w-full h-full backface-hidden">
            <div className="h-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 flex flex-col border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColors[card.difficulty]}`}>
                  {card.difficulty.toUpperCase()}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {card.category}
                </span>
              </div>
              
              <div className="flex-1 flex items-center justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-gray-100">
                  {card.question}
                </h2>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-6">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                Click to reveal answer
              </p>
            </div>
          </div>

          <div className="absolute w-full h-full backface-hidden rotate-y-180">
            <div className="h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl p-8 flex flex-col overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                  ANSWER
                </span>
                <span className="text-sm text-white/80">
                  {card.category}
                </span>
              </div>
              
              <div className="flex-1">
                <p className="text-white text-lg leading-relaxed mb-4">
                  {card.answer}
                </p>
                
                {card.code && (
                  <div className="mt-4">
                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-400 uppercase">
                          {card.language || 'code'}
                        </span>
                      </div>
                      <pre className="text-sm text-gray-100">
                        <code>{card.code}</code>
                      </pre>
                    </div>
                  </div>
                )}
              </div>
              
              <p className="text-center text-sm text-white/70 mt-4">
                Click to see question
              </p>
            </div>
          </div>
        </div>
      </div>

      {showNavigation && (
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            ← Previous
          </button>
          
          <span className="text-gray-600 dark:text-gray-400 font-medium">
            {currentIndex + 1} / {totalCards}
          </span>
          
          <button
            onClick={handleNext}
            disabled={currentIndex === totalCards - 1}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}
