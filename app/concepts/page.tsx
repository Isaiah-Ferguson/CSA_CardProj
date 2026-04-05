'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Lightbulb, Trophy, Rocket, Star, Crown, ArrowRight } from 'lucide-react';

export default function ConceptsHomePage() {
  const levels = [
    {
      id: 'combine',
      number: 'combine',
      title: 'Combine',
      description: '4 Week Coding Combine Introduction to Computer Programming, Logic, and C#',
      icon: Trophy,
      color: 'from-yellow-500 to-amber-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-950/20',
      borderColor: 'border-yellow-500',
      textColor: 'text-yellow-700 dark:text-yellow-300',
      difficulty: 'All Levels',
      topics: ['C#', 'Unity 3d', 'Game Development', 'Programming Fundamentals']
    },
    {
      id: 'level-1',
      number: 1,
      title: 'Level One',
      description: 'Foundation web development concepts - HTML, CSS, JavaScript',
      icon: Star,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50 dark:bg-green-950/20',
      borderColor: 'border-green-500',
      textColor: 'text-green-700 dark:text-green-300',
      difficulty: 'Beginner',
      topics: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 'level-2',
      number: 2,
      title: 'Level Two',
      description: 'API Development - dotNet, C#, and RESTful APIs',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
      borderColor: 'border-blue-500',
      textColor: 'text-blue-700 dark:text-blue-300',
      difficulty: 'Intermediate',
      topics: ['OOP', 'Data Structures', 'APIs']
    },
    {
      id: 'level-3',
      number: 3,
      title: 'Level Three',
      description: 'Advanced Javascript Frameworks - React, Next.js',
      icon: Trophy,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/20',
      borderColor: 'border-purple-500',
      textColor: 'text-purple-700 dark:text-purple-300',
      difficulty: 'Advanced',
      topics: ['Design Patterns', 'Performance', 'Security']
    },
    {
      id: 'level-4',
      number: 4,
      title: 'Level Four',
      description: 'Internship Preparation - CLEAN API Architecture',
      icon: Crown,
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50 dark:bg-orange-950/20',
      borderColor: 'border-orange-500',
      textColor: 'text-orange-700 dark:text-orange-300',
      difficulty: 'Expert',
      topics: ['Architecture', 'Scalability', 'Advanced Patterns']
    }
  ];

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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-4 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600">
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Learning Concepts
          </h1>
          
          <p className="text-xl text-foreground mb-4 max-w-2xl mx-auto">
            Choose your level and explore in-depth coding concepts
          </p>
          
          <Badge variant="secondary" className="px-4 py-2 text-sm">
            5 Levels Available
          </Badge>
        </motion.div>

        {/* Level Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {levels.map((level, index) => {
            const Icon = level.icon;
            return (
              <motion.div
                key={level.id}
                variants={itemVariants}
              >
                <Link href={`/concepts/${level.number}`}>
                  <Card className={`group h-full border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer overflow-hidden relative`}>
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${level.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    <CardHeader className="relative">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${level.color}`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <Badge 
                          variant="secondary" 
                          className={`${level.bgColor} ${level.textColor} border ${level.borderColor}`}
                        >
                          {level.difficulty}
                        </Badge>
                      </div>
                      
                      <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors flex items-center justify-between">
                        {level.title}
                        <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </CardTitle>
                      
                      <CardDescription className="text-base leading-relaxed">
                        {level.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="relative">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-muted-foreground">Topics include:</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {level.topics.map((topic, idx) => (
                            <span
                              key={idx}
                              className={`px-3 py-1 rounded-full text-xs font-medium ${level.bgColor} ${level.textColor} border ${level.borderColor}`}
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    
                    {/* Bottom gradient bar */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${level.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Card className="max-w-3xl mx-auto border-2">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">How It Works</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <div className="text-3xl mb-2">📚</div>
                  <h4 className="font-semibold mb-2">Choose Your Level</h4>
                  <p className="text-sm text-muted-foreground">
                    Select a level that matches your current skill level
                  </p>
                </div>
                <div>
                  <div className="text-3xl mb-2">💡</div>
                  <h4 className="font-semibold mb-2">Explore Concepts</h4>
                  <p className="text-sm text-muted-foreground">
                    Dive deep into weekly concepts with interactive examples
                  </p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🚀</div>
                  <h4 className="font-semibold mb-2">Master Skills</h4>
                  <p className="text-sm text-muted-foreground">
                    Progress through levels and become an expert developer
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
