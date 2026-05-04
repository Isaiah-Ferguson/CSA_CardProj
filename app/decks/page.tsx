'use client';

import { useState } from 'react';
import DeckCard from '@/components/DeckCard';
import { decks } from '@/data/flashcards';
import { Button } from '@/components/ui/button';
import { Library, Filter } from 'lucide-react';

export default function DecksPage() {
  const categories = [...new Set(decks.map(deck => deck.category))];
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredDecks = selectedCategory === 'All'
    ? decks
    : decks.filter(deck => deck.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 rounded-lg bg-primary">
              <Library className="h-5 w-5 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              All Decks
            </h1>
          </div>
          <p className="text-muted-foreground ml-13">
            Browse and study from our collection of {decks.length} coding flashcard decks
          </p>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Filter className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
            <span className="text-sm font-medium text-muted-foreground">Filter by category</span>
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter decks by category">
            <Button
              variant="outline"
              onClick={() => setSelectedCategory('All')}
              className={selectedCategory === 'All' ? 'bg-primary text-primary-foreground border-primary hover:bg-primary/90' : 'text-foreground hover:bg-accent'}
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
                  className={selectedCategory === category ? 'bg-primary text-primary-foreground border-primary hover:bg-primary/90' : 'text-foreground hover:bg-accent'}
                >
                  {category} ({count})
                </Button>
              );
            })}
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-6">
          Showing {filteredDecks.length} {filteredDecks.length === 1 ? 'deck' : 'decks'}
        </p>

        {filteredDecks.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground mb-4">No decks in this category.</p>
            <Button variant="ghost" size="sm" onClick={() => setSelectedCategory('All')}>
              Clear filter
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDecks.map((deck) => (
              <DeckCard key={deck.id} deck={deck} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
