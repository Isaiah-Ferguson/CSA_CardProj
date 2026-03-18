import Link from 'next/link';
import DeckCard from '@/components/DeckCard';
import { decks } from '@/data/flashcards';

export default function Home() {
  const totalCards = decks.reduce((sum, deck) => sum + deck.cards.length, 0);
  const categories = [...new Set(decks.map(deck => deck.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Master Coding Concepts
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Learn and review essential programming concepts with interactive flashcards
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                {decks.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Decks</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">
                {totalCards}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Cards</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 dark:text-pink-400">
                {categories.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Categories</div>
            </div>
          </div>

          <Link
            href="/decks"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Start Learning
          </Link>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">
            Featured Decks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {decks.filter(deck => ['1', '5', '4'].includes(deck.id)).map((deck) => (
              <DeckCard key={deck.id} deck={deck} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
