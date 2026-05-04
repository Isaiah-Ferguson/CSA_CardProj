'use client';

import Link from 'next/link';
import DeckCard from '@/components/DeckCard';
import { decks } from '@/data/flashcards';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const totalCards = decks.reduce((sum, deck) => sum + deck.cards.length, 0);
  const categories = [...new Set(decks.map(deck => deck.category))];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-20">
          <div className="mb-6">
            <Badge variant="secondary" className="px-3 py-1 text-xs font-medium">
              Code Stack Academy
            </Badge>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground tracking-tight">
            Master Coding<br className="hidden sm:block" /> Concepts
          </h1>

          <p className="text-lg text-muted-foreground mb-8 max-w-xl">
            Learn and review essential programming concepts with interactive flashcards.
            Build your skills one card at a time.
          </p>

          <div className="flex items-center gap-5 text-sm text-muted-foreground mb-10">
            <span>
              <span className="text-foreground font-semibold tabular-nums">{decks.length}</span> decks
            </span>
            <span className="w-px h-3.5 bg-border inline-block" aria-hidden="true" />
            <span>
              <span className="text-foreground font-semibold tabular-nums">{totalCards}</span> cards
            </span>
            <span className="w-px h-3.5 bg-border inline-block" aria-hidden="true" />
            <span>
              <span className="text-foreground font-semibold tabular-nums">{categories.length}</span> categories
            </span>
          </div>

          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm">
            <Link href="/decks" className="gap-2">
              Start Learning
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-foreground">Featured Decks</h2>
            <Button asChild variant="outline" size="sm" className="text-primary border-primary/40 hover:border-primary hover:bg-primary/5">
              <Link href="/decks">View All</Link>
            </Button>
          </div>

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
