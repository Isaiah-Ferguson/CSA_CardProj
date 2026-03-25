'use client';

import Link from 'next/link';
import DeckCard from '@/components/DeckCard';
import { decks } from '@/data/flashcards';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Zap, TrendingUp } from 'lucide-react';

export default function Home() {
  const totalCards = decks.reduce((sum, deck) => sum + deck.cards.length, 0);
  const categories = [...new Set(decks.map(deck => deck.category))];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-blue-50/30 to-purple-50/30 dark:from-background dark:via-blue-950/20 dark:to-purple-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm">
              Code Stack Academy Flash Cards!
            </Badge>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Master Coding Concepts
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-foreground mb-12 max-w-2xl mx-auto"
          >
            Learn and review essential programming concepts with interactive flashcards. 
            Build your skills one card at a time.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-6 mb-12"
          >
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6 text-center min-w-[140px]">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mb-2">
                  {decks.length}
                </div>
                <div className="text-sm text-muted-foreground font-medium">Decks</div>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6 text-center min-w-[140px]">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent mb-2">
                  {totalCards}
                </div>
                <div className="text-sm text-muted-foreground font-medium">Cards</div>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6 text-center min-w-[140px]">
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent mb-2">
                  {categories.length}
                </div>
                <div className="text-sm text-muted-foreground font-medium">Categories</div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all">
              <Link href="/decks" className="gap-2">
                Start Learning
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Decks</h2>
            <Button asChild variant="outline" className="text-foreground">
              <Link href="/decks">View All</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {decks.filter(deck => ['1', '5', '4'].includes(deck.id)).map((deck, index) => (
              <motion.div
                key={deck.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <DeckCard deck={deck} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
