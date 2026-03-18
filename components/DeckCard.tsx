'use client';

import Link from 'next/link';
import { Deck } from '@/types/flashcard';

interface DeckCardProps {
  deck: Deck;
}

export default function DeckCard({ deck }: DeckCardProps) {
  const categoryColors: Record<string, string> = {
    JavaScript: 'from-yellow-400 to-orange-500',
    React: 'from-blue-400 to-cyan-500',
    TypeScript: 'from-blue-500 to-indigo-600',
    Algorithms: 'from-purple-500 to-pink-600',
    default: 'from-gray-400 to-gray-600'
  };

  const gradient = categoryColors[deck.category] || categoryColors.default;

  return (
    <Link href={`/study/${deck.id}`}>
      <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${gradient} text-white`}>
              {deck.category}
            </span>
            <span className="text-2xl">📚</span>
          </div>
          
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {deck.name}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
            {deck.description}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {deck.cards.length} {deck.cards.length === 1 ? 'card' : 'cards'}
            </span>
            
            <div className="flex gap-1">
              {deck.cards.slice(0, 3).map((card) => (
                <div
                  key={card.id}
                  className={`w-2 h-2 rounded-full ${
                    card.difficulty === 'easy'
                      ? 'bg-green-500'
                      : card.difficulty === 'medium'
                      ? 'bg-yellow-500'
                      : 'bg-red-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </Link>
  );
}
