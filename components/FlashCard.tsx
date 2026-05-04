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

  const handleFlip = () => setIsFlipped(prev => !prev);

  const handleNext = () => {
    setIsFlipped(false);
    onNext?.();
  };

  const handlePrevious = () => {
    setIsFlipped(false);
    onPrevious?.();
  };

  const difficultyColors = {
    easy: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
    medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
    hard: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300'
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="perspective-1000">
        <div
          role="button"
          tabIndex={0}
          aria-pressed={isFlipped}
          aria-label={isFlipped ? `Answer: ${card.answer}` : `Question: ${card.question}. Press to reveal answer.`}
          className={`relative w-full h-96 transition-transform duration-500 transform-style-3d cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-2xl ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
          onClick={handleFlip}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleFlip();
            }
          }}
        >
          {/* Front */}
          <div className="absolute w-full h-full backface-hidden">
            <div className="h-full bg-card text-card-foreground rounded-2xl shadow-lg p-8 flex flex-col border border-border">
              <div className="flex items-center justify-between mb-6">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColors[card.difficulty]}`}>
                  {card.difficulty.toUpperCase()}
                </span>
                <span className="text-sm text-muted-foreground">
                  {card.category}
                </span>
              </div>

              <div className="flex-1 flex items-center justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-card-foreground">
                  {card.question}
                </h2>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Click or press Enter to reveal answer
              </p>
            </div>
          </div>

          {/* Back */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180">
            <div className="h-full bg-primary rounded-2xl shadow-lg p-8 flex flex-col overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 bg-primary-foreground/20 rounded-full text-xs font-semibold text-primary-foreground">
                  ANSWER
                </span>
                <span className="text-sm text-primary-foreground/70">
                  {card.category}
                </span>
              </div>

              <div className="flex-1" aria-live="polite" aria-atomic="true">
                <p className="text-primary-foreground text-lg leading-relaxed mb-4">
                  {card.answer}
                </p>

                {card.code && (
                  <div className="mt-4">
                    <div className="bg-background rounded-lg p-4 overflow-x-auto">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-muted-foreground uppercase">
                          {card.language || 'code'}
                        </span>
                      </div>
                      <pre className="text-sm font-mono text-foreground">
                        <code>{card.code}</code>
                      </pre>
                    </div>
                  </div>
                )}
              </div>

              <p className="text-center text-sm text-primary-foreground/60 mt-4">
                Click or press Enter to see question
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
            className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-secondary/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            ← Previous
          </button>

          <span className="text-muted-foreground font-medium tabular-nums">
            {currentIndex + 1} / {totalCards}
          </span>

          <button
            onClick={handleNext}
            disabled={currentIndex === totalCards - 1}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}
