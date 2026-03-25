'use client';

import { useState } from 'react';
import DeckCard from '@/components/DeckCard';
import { decks } from '@/data/flashcards';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Library, Filter } from 'lucide-react';

export default function DecksPage() {
  const categories = [...new Set(decks.map(deck => deck.category))];
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredDecks = selectedCategory === 'All' 
    ? decks 
    : decks.filter(deck => deck.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-blue-50/30 to-purple-50/30 dark:from-background dark:via-blue-950/20 dark:to-purple-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
              <Library className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                All Decks
              </h1>
              <p className="text-foreground">
                Browse and study from our collection of {decks.length} coding flashcard decks
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Filter by category</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              onClick={() => setSelectedCategory('All')}
              className={selectedCategory === 'All' ? 'bg-gradient-to-r from-blue-600 to-purple-600 !text-white hover:from-blue-700 hover:to-purple-700 border-transparent' : 'text-foreground hover:bg-accent'}
            >
              All ({decks.length})
            </Button>
            {categories.map((category) => {
              const count = decks.filter(d => d.category === category).length;
              return (
                <Button
                  key={category}
                  variant="outline"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? 'bg-gradient-to-r from-blue-600 to-purple-600 !text-white hover:from-blue-700 hover:to-purple-700 border-transparent' : 'text-foreground hover:bg-accent'}
                >
                  {category} ({count})
                </Button>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <p className="text-sm text-muted-foreground">
            Showing {filteredDecks.length} {filteredDecks.length === 1 ? 'deck' : 'decks'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredDecks.map((deck, index) => (
            <motion.div
              key={deck.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.05 }}
            >
              <DeckCard deck={deck} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
