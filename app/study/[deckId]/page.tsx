'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import FlashCard from '@/components/FlashCard';
import { decks } from '@/data/flashcards';
import { FlashCard as FlashCardType } from '@/types/flashcard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { ArrowLeft, RotateCcw, CheckCircle2, Trophy, Target, Zap } from 'lucide-react';

const QUESTIONS_PER_SESSION = 10;

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

type Difficulty = 'all' | 'easy' | 'medium' | 'hard';

export default function StudyPage() {
  const params = useParams();
  const router = useRouter();
  const deckId = params.deckId as string;
  
  const deck = decks.find(d => d.id === deckId);
  const [difficulty, setDifficulty] = useState<Difficulty>('all');
  const [sessionCards, setSessionCards] = useState<FlashCardType[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [studiedCards, setStudiedCards] = useState<Set<string>>(new Set());
  const [isCompleted, setIsCompleted] = useState(false);
  const [showDifficultySelector, setShowDifficultySelector] = useState(true);

  const startSession = (selectedDifficulty: Difficulty) => {
    if (!deck) return;
    
    let filteredCards = deck.cards;
    if (selectedDifficulty !== 'all') {
      filteredCards = deck.cards.filter(card => card.difficulty === selectedDifficulty);
    }
    
    if (filteredCards.length === 0) {
      filteredCards = deck.cards;
    }
    
    const shuffled = shuffleArray(filteredCards);
    const selected = shuffled.slice(0, Math.min(QUESTIONS_PER_SESSION, filteredCards.length));
    setSessionCards(selected);
    setShowDifficultySelector(false);
    setCurrentCardIndex(0);
    setStudiedCards(new Set());
    setIsCompleted(false);
  };

  useEffect(() => {
    if (deck && !showDifficultySelector && sessionCards.length === 0) {
      startSession(difficulty);
    }
  }, [deck]);

  if (!deck) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-blue-50/30 to-purple-50/30 dark:from-background dark:via-blue-950/20 dark:to-purple-950/20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <h1 className="text-3xl font-bold mb-4">
            Deck not found
          </h1>
          <Button onClick={() => router.push('/decks')} size="lg">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Decks
          </Button>
        </motion.div>
      </div>
    );
  }

  if (showDifficultySelector) {
    const difficultyCount = {
      all: deck.cards.length,
      easy: deck.cards.filter(c => c.difficulty === 'easy').length,
      medium: deck.cards.filter(c => c.difficulty === 'medium').length,
      hard: deck.cards.filter(c => c.difficulty === 'hard').length,
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-blue-50/30 to-purple-50/30 dark:from-background dark:via-blue-950/20 dark:to-purple-950/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Button
              onClick={() => router.push('/decks')}
              variant="ghost"
              className="mb-8"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Decks
            </Button>

            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="inline-flex p-4 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 mb-6"
              >
                <Target className="h-12 w-12 text-white" />
              </motion.div>
              <h1 className="text-4xl font-bold mb-4">{deck.name}</h1>
              <p className="text-xl text-muted-foreground mb-2">{deck.description}</p>
              <Badge variant="secondary" className="text-sm">
                {deck.cards.length} total questions
              </Badge>
            </div>

            <Card className="border-2 mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Select Difficulty Level</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      onClick={() => {
                        setDifficulty('all');
                        startSession('all');
                      }}
                      variant="outline"
                      className="w-full h-auto py-6 flex flex-col items-center gap-3 border-2 hover:border-primary hover:bg-accent"
                    >
                      <div className="flex items-center gap-2">
                        <Zap className="h-5 w-5" />
                        <span className="text-lg font-semibold">All Levels</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{difficultyCount.all} questions</span>
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      onClick={() => {
                        setDifficulty('easy');
                        startSession('easy');
                      }}
                      variant="outline"
                      className="w-full h-auto py-6 flex flex-col items-center gap-3 border-2 hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-950/20"
                      disabled={difficultyCount.easy === 0}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="text-lg font-semibold">Easy</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{difficultyCount.easy} questions</span>
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      onClick={() => {
                        setDifficulty('medium');
                        startSession('medium');
                      }}
                      variant="outline"
                      className="w-full h-auto py-6 flex flex-col items-center gap-3 border-2 hover:border-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-950/20"
                      disabled={difficultyCount.medium === 0}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <span className="text-lg font-semibold">Medium</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{difficultyCount.medium} questions</span>
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      onClick={() => {
                        setDifficulty('hard');
                        startSession('hard');
                      }}
                      variant="outline"
                      className="w-full h-auto py-6 flex flex-col items-center gap-3 border-2 hover:border-red-500 hover:bg-red-50 dark:hover:bg-red-950/20"
                      disabled={difficultyCount.hard === 0}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <span className="text-lg font-semibold">Hard</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{difficultyCount.hard} questions</span>
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center text-sm text-muted-foreground">
              <p>You'll study {QUESTIONS_PER_SESSION} random questions from your selected difficulty level</p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (sessionCards.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-blue-50/30 to-purple-50/30 dark:from-background dark:via-blue-950/20 dark:to-purple-950/20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent mx-auto"></div>
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
    setShowDifficultySelector(true);
    setSessionCards([]);
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
      <div className="min-h-screen bg-gradient-to-br from-background via-blue-50/30 to-purple-50/30 dark:from-background dark:via-blue-950/20 dark:to-purple-950/20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-2xl mx-auto px-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="mb-8"
          >
            <div className="inline-flex p-6 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 mb-6">
              <Trophy className="h-16 w-16 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Session Complete!
            </h1>
            <p className="text-xl text-muted-foreground mb-2">
              You've completed {QUESTIONS_PER_SESSION} questions from {deck.name}
            </p>
            <p className="text-muted-foreground">
              Great job! Ready for another round?
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              onClick={handleRestart}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              New Session
            </Button>
            <Button
              onClick={handleComplete}
              size="lg"
              variant="outline"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Decks
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 gap-4 max-w-md mx-auto"
          >
            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                <div className="text-sm text-muted-foreground mb-1">Questions Answered</div>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                  {QUESTIONS_PER_SESSION}
                </div>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <Target className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <div className="text-sm text-muted-foreground mb-1">Total in Deck</div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {deck.cards.length}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-blue-50/30 to-purple-50/30 dark:from-background dark:via-blue-950/20 dark:to-purple-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Button
            onClick={() => router.push('/decks')}
            variant="ghost"
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Decks
          </Button>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold">
                  {deck.name}
                </h1>
                <Badge variant="secondary" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
                  {difficulty === 'all' ? 'All Levels' : difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                </Badge>
              </div>
              <p className="text-muted-foreground">
                {deck.description}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {QUESTIONS_PER_SESSION} random questions per session
              </p>
            </div>
            <Card className="border-2 self-start sm:self-auto">
              <CardContent className="p-4 text-center w-full sm:w-[120px]">
                <div className="text-sm text-muted-foreground mb-1">Progress</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {Math.round(progress)}%
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-full"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <FlashCard
            card={currentCard}
            onNext={handleNext}
            onPrevious={handlePrevious}
            showNavigation={true}
            currentIndex={currentCardIndex}
            totalCards={sessionCards.length}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <Card className="border-2">
            <CardContent className="p-4 text-center">
              <Target className="h-6 w-6 text-primary mx-auto mb-2" />
              <div className="text-sm text-muted-foreground mb-1">Session Cards</div>
              <div className="text-2xl font-bold">
                {sessionCards.length}
              </div>
            </CardContent>
          </Card>
          <Card className="border-2">
            <CardContent className="p-4 text-center">
              <CheckCircle2 className="h-6 w-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
              <div className="text-sm text-muted-foreground mb-1">Studied</div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {studiedCards.size}
              </div>
            </CardContent>
          </Card>
          <Card className="border-2">
            <CardContent className="p-4 text-center">
              <Zap className="h-6 w-6 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
              <div className="text-sm text-muted-foreground mb-1">Remaining</div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {sessionCards.length - studiedCards.size}
              </div>
            </CardContent>
          </Card>
          <Card className="border-2">
            <CardContent className="p-4 text-center">
              <Trophy className="h-6 w-6 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
              <div className="text-sm text-muted-foreground mb-1">Total in Deck</div>
              <div className="text-lg font-bold">
                {deck.cards.length}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
