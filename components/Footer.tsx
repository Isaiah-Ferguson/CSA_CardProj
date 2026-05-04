import Link from 'next/link';
import { Github, BookOpen, Code2 } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/decks', label: 'Flash Cards' },
  { href: '/concepts', label: 'Concepts' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Code2 className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">CodeStack Academy</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Interactive flashcards and concept guides for developers leveling up their skills.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Navigate</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Developer credit */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Developer</h3>
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="h-4 w-4 text-muted-foreground shrink-0" />
              <span className="text-sm text-muted-foreground">Isaiah Ferguson</span>
            </div>
            <a
              href="https://github.com/Isaiah-Ferguson"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-4 w-4 shrink-0" />
              github.com/Isaiah-Ferguson
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-muted-foreground">
          <p>&copy; {year} CodeStack Academy. All rights reserved.</p>
          <p>
            Built with{' '}
            <span className="text-foreground font-medium">Next.js</span>,{' '}
            <span className="text-foreground font-medium">React</span> &{' '}
            <span className="text-foreground font-medium">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
