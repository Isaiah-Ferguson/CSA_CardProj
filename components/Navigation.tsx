'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Code2, Home, Library } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="p-2 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600"
            >
              <Code2 className="h-5 w-5 text-white" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CodeStack Academy
              </span>
              <span className="text-xs text-muted-foreground -mt-1">Flashcard Learning</span>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href="/"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive('/')
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-foreground/60 hover:text-foreground hover:bg-accent'
              }`}
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link
              href="/decks"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive('/decks')
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-foreground/60 hover:text-foreground hover:bg-accent'
              }`}
            >
              <Library className="h-4 w-4" />
              All Decks
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
