'use client';

import Link from 'next/link';
import { Deck } from '@/types/flashcard';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight } from 'lucide-react';

interface DeckCardProps {
  deck: Deck;
}

export default function DeckCard({ deck }: DeckCardProps) {
  const categoryColors: Record<string, string> = {
    JavaScript: 'bg-yellow-500 text-white border-yellow-600',
    React: 'bg-cyan-500 text-white border-cyan-600',
    TypeScript: 'bg-blue-500 text-white border-blue-600',
    'CSS/HTML': 'bg-pink-500 text-white border-pink-600',
    'C#': 'bg-purple-500 text-white border-purple-600',
    'EF Core': 'bg-indigo-500 text-white border-indigo-600',
    'SQL': 'bg-orange-500 text-white border-orange-600',
    'Web API': 'bg-green-500 text-white border-green-600',
    'Fundamentals': 'bg-teal-500 text-white border-teal-600',
    default: 'bg-gray-500 text-white border-gray-600'
  };

  const categoryColor = categoryColors[deck.category] || categoryColors.default;

  return (
    <Link href={`/study/${deck.id}`} className="block group">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        <Card className="h-full border-2 hover:border-primary transition-all duration-300 hover:shadow-lg overflow-hidden">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between mb-2">
              <Badge variant="secondary" className={`${categoryColor} border`}>
                {deck.category}
              </Badge>
              <div className="p-2 rounded-lg bg-primary/10">
                <BookOpen className="h-4 w-4 text-primary" />
              </div>
            </div>
            
            <CardTitle className="text-xl group-hover:text-primary transition-colors flex items-center justify-between">
              {deck.name}
              <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </CardTitle>
            
            <CardDescription className="line-clamp-2">
              {deck.description}
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">
                {deck.cards.length} {deck.cards.length === 1 ? 'card' : 'cards'}
              </span>
              
              <div className="flex gap-1">
                {deck.cards.slice(0, 5).map((card) => (
                  <div
                    key={card.id}
                    className={`w-1.5 h-1.5 rounded-full ${
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
          </CardContent>
          
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Card>
      </motion.div>
    </Link>
  );
}
