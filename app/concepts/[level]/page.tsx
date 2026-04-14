'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { learningLevels } from '@/data/learning-concepts';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Calendar, ChevronLeft, Code2, Lightbulb, GitCompare } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function ConceptsLevelPage() {
  const params = useParams();
  const levelParam = params.level as string;
  const levelNumber = parseInt(levelParam);
  
  // Find the level data based on the level number from URL
  const currentLevel = learningLevels.find(level => level.levelNumber === levelNumber);
  
  // If level not found, redirect or show error
  if (!currentLevel || currentLevel.weeks.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Level Not Found</h1>
          <Link href="/concepts">
            <Button>Back to Levels</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  const [selectedWeek, setSelectedWeek] = useState(currentLevel.weeks[0]);
  const [selectedConcept, setSelectedConcept] = useState(currentLevel.weeks[0].concepts[0]);
  const [activeExample, setActiveExample] = useState(0);

  // If no concept is selected or available, show message
  if (!selectedConcept) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">No Concepts Available</h1>
          <p className="text-muted-foreground mb-4">This week doesn't have any concepts yet.</p>
          <Link href="/concepts">
            <Button>Back to Levels</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-blue-50/30 to-purple-50/30 dark:from-background dark:via-blue-950/20 dark:to-purple-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Link href="/concepts">
            <Button variant="ghost" className="gap-2 text-foreground hover:text-primary">
              <ChevronLeft className="h-4 w-4" />
              Back to Levels
            </Button>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
              <Lightbulb className="h-6 w-6 text-white" />
            </div>
            <div>
              <Badge variant="secondary" className="mb-2">
                {currentLevel.title}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {currentLevel.title}
              </h1>
              <p className="text-foreground">
                {currentLevel.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Week Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Select a week</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {currentLevel.weeks.map((week) => (
              <Button
                key={week.id}
                variant={selectedWeek.id === week.id ? 'default' : 'outline'}
                onClick={() => {
                  setSelectedWeek(week);
                  if (week.concepts && week.concepts.length > 0) {
                    setSelectedConcept(week.concepts[0]);
                    setActiveExample(0);
                  }
                }}
                className={selectedWeek.id === week.id 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700' 
                  : 'text-foreground hover:bg-accent'}
              >
                Week {week.weekNumber}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Selected Week Info */}
        <motion.div
          key={selectedWeek.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl mb-2">{selectedWeek.title}</CardTitle>
                  <CardDescription className="text-base">{selectedWeek.description}</CardDescription>
                </div>
                <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  Week {selectedWeek.weekNumber}
                </Badge>
              </div>
            </CardHeader>
          </Card>
        </motion.div>

        {/* Concept Navigation */}
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar - Concept List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-1"
          >
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Topics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {selectedWeek.concepts.map((concept, index) => (
                  <Button
                    key={concept.id}
                    variant={selectedConcept.id === concept.id ? 'secondary' : 'ghost'}
                    className={`w-full justify-start text-left h-auto py-3 ${
                      selectedConcept.id === concept.id 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700' 
                        : 'hover:bg-accent'
                    }`}
                    onClick={() => {
                      setSelectedConcept(concept);
                      setActiveExample(0);
                    }}
                  >
                    <span className="text-sm font-medium break-words w-full">{concept.title}</span>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Main Content Area */}
          <motion.div
            key={selectedConcept.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-3 space-y-6 min-w-0"
          >
            {/* Concept Header */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">{selectedConcept.title}</CardTitle>
                <CardDescription className="text-base">{selectedConcept.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-yellow-500" />
                    Key Points
                  </h3>
                  <ul className="space-y-2">
                    {selectedConcept.keyPoints.map((point, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mt-2 flex-shrink-0" />
                        <span className="text-foreground">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Code Examples */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Code2 className="h-5 w-5" />
                  Interactive Code Examples
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs value={activeExample.toString()} onValueChange={(v: string) => setActiveExample(parseInt(v))}>
                  <TabsList className="w-full justify-start mb-4 flex-wrap h-auto gap-2 p-2">
                    {selectedConcept.codeExamples.map((example, index) => (
                      <TabsTrigger key={index} value={index.toString()} className="px-4 py-2 whitespace-normal text-center min-h-[2.5rem]">
                        {example.title}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  
                  <AnimatePresence mode="wait">
                    {selectedConcept.codeExamples.map((example, index) => (
                      <TabsContent key={index} value={index.toString()}>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="space-y-4"
                        >
                          <div className="rounded-lg overflow-hidden border-2 border-border overflow-x-auto">
                            <SyntaxHighlighter
                              language={example.language}
                              style={vscDarkPlus}
                              customStyle={{
                                margin: 0,
                                borderRadius: 0,
                                fontSize: '14px',
                                padding: '1.5rem',
                                overflowX: 'auto',
                                wordBreak: 'normal',
                                whiteSpace: 'pre'
                              }}
                            >
                              {example.code}
                            </SyntaxHighlighter>
                          </div>
                          <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-600 p-4 rounded-r-lg">
                            <p className="text-sm text-foreground leading-relaxed">
                              <span className="font-semibold text-blue-700 dark:text-blue-400">💡 Explanation: </span>
                              {example.explanation}
                            </p>
                          </div>
                        </motion.div>
                      </TabsContent>
                    ))}
                  </AnimatePresence>
                </Tabs>
              </CardContent>
            </Card>

            {/* Comparison Section (if available) */}
            {selectedConcept.comparison && (
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <GitCompare className="h-5 w-5" />
                    {selectedConcept.comparison.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedConcept.comparison.options.map((option, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                      >
                        <Card className="h-full border-2 hover:border-primary transition-colors">
                          <CardHeader>
                            <CardTitle className="text-lg text-primary">{option.name}</CardTitle>
                            <CardDescription>{option.description}</CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <div>
                              <span className="text-sm font-semibold text-muted-foreground">When to use:</span>
                              <p className="text-sm text-foreground mt-1">{option.whenToUse}</p>
                            </div>
                            <div>
                              <span className="text-sm font-semibold text-muted-foreground">Example:</span>
                              <p className="text-sm text-foreground mt-1">{option.example}</p>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
