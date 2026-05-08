"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import FlashCard from "@/components/FlashCard";
import { decks } from "@/data/flashcards";
import { FlashCard as FlashCardType } from "@/types/flashcard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  RotateCcw,
  BookOpen,
  Zap,
  Target,
  CheckCircle2,
  Trophy,
} from "lucide-react";

const QUESTIONS_PER_SESSION = 10;

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

type Difficulty = "all" | "easy" | "medium" | "hard";

export default function StudyPage() {
  const params = useParams();
  const router = useRouter();
  const deckId = params.deckId as string;

  const deck = decks.find((d) => d.id === deckId);
  const [difficulty, setDifficulty] = useState<Difficulty>("all");
  const [sessionCards, setSessionCards] = useState<FlashCardType[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [studiedCards, setStudiedCards] = useState<Set<string>>(new Set());
  const [isCompleted, setIsCompleted] = useState(false);
  const [showDifficultySelector, setShowDifficultySelector] = useState(true);
  const [isBrowseMode, setIsBrowseMode] = useState(false);

  const startSession = (selectedDifficulty: Difficulty, browseAll = false) => {
    if (!deck) return;

    let filteredCards = deck.cards;
    if (selectedDifficulty !== "all") {
      filteredCards = deck.cards.filter(
        (card) => card.difficulty === selectedDifficulty,
      );
    }

    if (filteredCards.length === 0) {
      filteredCards = deck.cards;
    }

    const shuffled = shuffleArray(filteredCards);
    const selected = browseAll
      ? shuffled
      : shuffled.slice(0, Math.min(QUESTIONS_PER_SESSION, filteredCards.length));
    setIsBrowseMode(browseAll);
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
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Deck not found</h1>
          <Button
            onClick={() => router.push("/decks")}
            variant="outline"
            size="sm"
            className="text-primary border-primary/40 hover:border-primary hover:bg-primary/5"
          >
            {" "}
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Decks
          </Button>
        </div>
      </div>
    );
  }

  if (showDifficultySelector) {
    const difficultyCount = {
      all: deck.cards.length,
      easy: deck.cards.filter((c) => c.difficulty === "easy").length,
      medium: deck.cards.filter((c) => c.difficulty === "medium").length,
      hard: deck.cards.filter((c) => c.difficulty === "hard").length,
    };

    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div>
            <Button
              onClick={() => router.push("/decks")}
              variant="outline"
              size="sm"
              className="text-primary border-primary/40 hover:border-primary hover:bg-primary/5"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Decks
            </Button>

            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="inline-flex p-4 rounded-full bg-primary mb-6"
              >
                <Target className="h-12 w-12 text-white" />
              </motion.div>
              <h1 className="text-4xl font-bold mb-4 text-muted-foreground">{deck.name}</h1>
              <p className="text-xl text-muted-foreground mb-2">
                {deck.description}
              </p>
              <Badge variant="secondary" className="text-sm">
                {deck.cards.length} total questions
              </Badge>
            </div>

            {/* Quick Study */}
            <Card className="border-2 mb-4">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="h-4 w-4 text-primary" />
                  <h2 className="text-lg font-bold">Quick Study</h2>
                  <Badge variant="secondary" className="ml-auto text-xs">{QUESTIONS_PER_SESSION} random cards</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  {QUESTIONS_PER_SESSION} randomly shuffled cards from the selected difficulty
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {([
                    { diff: "all" as Difficulty, label: "All Levels", dot: null, count: difficultyCount.all, border: "hover:border-primary", bg: "hover:bg-accent" },
                    { diff: "easy" as Difficulty, label: "Easy", dot: "bg-green-500", count: difficultyCount.easy, border: "hover:border-green-500", bg: "hover:bg-green-50 dark:hover:bg-green-950/20" },
                    { diff: "medium" as Difficulty, label: "Medium", dot: "bg-yellow-500", count: difficultyCount.medium, border: "hover:border-yellow-500", bg: "hover:bg-yellow-50 dark:hover:bg-yellow-950/20" },
                    { diff: "hard" as Difficulty, label: "Hard", dot: "bg-red-500", count: difficultyCount.hard, border: "hover:border-red-500", bg: "hover:bg-red-50 dark:hover:bg-red-950/20" },
                  ].map(({ diff, label, dot, count, border, bg }) => (
                    <motion.div key={diff} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        onClick={() => { setDifficulty(diff); startSession(diff, false); }}
                        variant="outline"
                        className={`w-full h-auto py-5 flex flex-col items-center gap-2 border-2 ${border} ${bg}`}
                        disabled={count === 0}
                      >
                        <div className="flex items-center gap-2">
                          {dot ? <div className={`w-3 h-3 rounded-full ${dot}`} /> : <Zap className="h-4 w-4" />}
                          <span className="text-base font-semibold">{label}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{count} cards available</span>
                      </Button>
                    </motion.div>
                  )))}
                </div>
              </CardContent>
            </Card>

            {/* Browse All */}
            <Card className="border-2 mb-8">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-1">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <h2 className="text-lg font-bold">Browse All Cards</h2>
                  <Badge variant="secondary" className="ml-auto text-xs">Full deck</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  Go through every card in the selected difficulty
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {([
                    { diff: "all" as Difficulty, label: "All Cards", dot: null, count: difficultyCount.all, border: "hover:border-primary", bg: "hover:bg-accent" },
                    { diff: "easy" as Difficulty, label: "All Easy", dot: "bg-green-500", count: difficultyCount.easy, border: "hover:border-green-500", bg: "hover:bg-green-50 dark:hover:bg-green-950/20" },
                    { diff: "medium" as Difficulty, label: "All Medium", dot: "bg-yellow-500", count: difficultyCount.medium, border: "hover:border-yellow-500", bg: "hover:bg-yellow-50 dark:hover:bg-yellow-950/20" },
                    { diff: "hard" as Difficulty, label: "All Hard", dot: "bg-red-500", count: difficultyCount.hard, border: "hover:border-red-500", bg: "hover:bg-red-50 dark:hover:bg-red-950/20" },
                  ].map(({ diff, label, dot, count, border, bg }) => (
                    <motion.div key={diff} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        onClick={() => { setDifficulty(diff); startSession(diff, true); }}
                        variant="outline"
                        className={`w-full h-auto py-5 flex flex-col items-center gap-2 border-2 ${border} ${bg}`}
                        disabled={count === 0}
                      >
                        <div className="flex items-center gap-2">
                          {dot ? <div className={`w-3 h-3 rounded-full ${dot}`} /> : <BookOpen className="h-4 w-4" />}
                          <span className="text-base font-semibold">{label}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{count} cards</span>
                      </Button>
                    </motion.div>
                  )))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  if (sessionCards.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent mx-auto" />
      </div>
    );
  }

  const currentCard = sessionCards[currentCardIndex];

  const handleNext = () => {
    setStudiedCards((prev) => new Set(prev).add(currentCard.id));
    if (currentCardIndex < sessionCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentCardIndex > 0) setCurrentCardIndex(currentCardIndex - 1);
  };

  const handleNewSession = () => {
    setShowDifficultySelector(true);
    setSessionCards([]);
  };

  const progress = ((studiedCards.size + 1) / sessionCards.length) * 100;

  // ── Completion screen (Quick Study only) ────────────────────────────────────
  if (isCompleted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="mb-8"
          >
            <div className="inline-flex p-6 rounded-full bg-primary mb-6">
              <Trophy className="h-16 w-16 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Session Complete!
            </h1>
            <p className="text-xl text-muted-foreground mb-2">
              You've completed {sessionCards.length} question{sessionCards.length !== 1 ? "s" : ""} from{" "}
              {deck.name}
            </p>
            <p className="text-muted-foreground">Great job! Ready for another round?</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              onClick={handleNewSession}
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              New Session
            </Button>
            <Button
              onClick={() => router.push("/decks")}
              variant="outline"
              size="sm"
              className="text-primary border-primary/40 hover:border-primary hover:bg-primary/5"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Decks
            </Button>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                <div className="text-sm text-muted-foreground mb-1">Questions Answered</div>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                  {sessionCards.length}
                </div>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-sm text-muted-foreground mb-1">Total in Deck</div>
                <div className="text-3xl font-bold text-primary">{deck.cards.length}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // ── Browse All: full card grid ───────────────────────────────────────────────
  if (isBrowseMode) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <Button
                onClick={() => router.push("/decks")}
                variant="outline"
                size="sm"
                className="text-primary border-primary/40 hover:border-primary hover:bg-primary/5"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Decks
              </Button>
              <Button
                onClick={handleNewSession}
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                New Session
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-3 mb-1">
              <h1 className="text-3xl font-bold text-foreground">{deck.name}</h1>
              <Badge variant="secondary" className="bg-primary text-primary-foreground border-0">
                {difficulty === "all" ? "All Levels" : difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </Badge>
              <Badge variant="secondary">{sessionCards.length} cards</Badge>
            </div>
            <p className="text-muted-foreground">{deck.description}</p>
            <p className="text-sm text-muted-foreground mt-1">Click any card to reveal its answer</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sessionCards.map((card) => (
              <FlashCard key={card.id} card={card} showNavigation={false} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ── Quick Study: single card with Next / Previous ────────────────────────────
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <Button
              onClick={() => router.push("/decks")}
              variant="outline"
              size="sm"
              className="text-primary border-primary/40 hover:border-primary hover:bg-primary/5"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Decks
            </Button>
            <Button
              onClick={handleNewSession}
              size="sm"
              variant="outline"
              className="text-primary border-primary/40 hover:border-primary hover:bg-primary/5"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              New Session
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-foreground">{deck.name}</h1>
                <Badge variant="secondary" className="bg-primary text-primary-foreground border-0">
                  {difficulty === "all" ? "All Levels" : difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                </Badge>
              </div>
              <p className="text-muted-foreground">{deck.description}</p>
              <p className="text-sm text-muted-foreground mt-1">
                {QUESTIONS_PER_SESSION} random questions per session
              </p>
            </div>
            <Card className="border-2 self-start sm:self-auto">
              <CardContent className="p-4 text-center w-28">
                <div className="text-sm text-muted-foreground mb-1">Progress</div>
                <div className="text-3xl font-bold text-primary">{Math.round(progress)}%</div>
              </CardContent>
            </Card>
          </div>

          <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
              className="bg-primary h-full"
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
      </div>
    </div>
  );
}
