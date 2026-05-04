'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Trophy, Rocket, Star, Crown, ArrowRight } from 'lucide-react';

export default function ConceptsHomePage() {
  const levels = [
    {
      id: 'combine',
      number: 'combine',
      title: 'Combine',
      description: '4 Week Coding Combine Introduction to Computer Programming, Logic, and C#',
      icon: Trophy,
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
      bgColor: 'bg-orange-50 dark:bg-orange-950/20',
      borderColor: 'border-orange-500',
      textColor: 'text-orange-700 dark:text-orange-300',
      difficulty: 'Expert',
      topics: ['Architecture', 'Scalability', 'Advanced Patterns']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-lg bg-primary">
              <Lightbulb className="h-6 w-6 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Learning Concepts
            </h1>
          </div>
          <p className="text-lg text-muted-foreground ml-13">
            Choose your level and explore in-depth coding concepts
          </p>
        </div>

        {/* Level Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {levels.map((level) => {
            const Icon = level.icon;
            return (
              <Link key={level.id} href={`/concepts/${level.number}`}>
                <Card className="group h-full border-2 hover:border-primary transition-all duration-200 hover:shadow-md cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-2.5 rounded-lg bg-primary">
                        <Icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <Badge
                        variant="secondary"
                        className={`${level.bgColor} ${level.textColor} border ${level.borderColor}`}
                      >
                        {level.difficulty}
                      </Badge>
                    </div>

                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors flex items-center justify-between">
                      {level.title}
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardTitle>

                    <CardDescription className="text-sm leading-relaxed">
                      {level.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-2">
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Topics include</span>
                      <div className="flex flex-wrap gap-1.5">
                        {level.topics.map((topic, idx) => (
                          <span
                            key={idx}
                            className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${level.bgColor} ${level.textColor} border ${level.borderColor}`}
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>


      </div>
    </div>
  );
}
