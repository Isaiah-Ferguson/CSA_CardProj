# 💻 CodeCards - Flashcard App for Coders

A modern, interactive flashcard application built with Next.js 16, designed specifically for developers to learn and review coding concepts.

## ✨ Features

- **🎯 Interactive Flashcards** - Beautiful 3D flip animations for an engaging learning experience
- **📚 Multiple Decks** - Organized by topics (JavaScript, React, TypeScript, Algorithms)
- **💡 Code Examples** - Syntax-highlighted code snippets on flashcards
- **🎨 Modern UI** - Built with Tailwind CSS and responsive design
- **🌓 Dark Mode** - Automatic dark mode support
- **📊 Progress Tracking** - Track your study progress through each deck
- **🏷️ Difficulty Levels** - Cards tagged as Easy, Medium, or Hard

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository or navigate to the project directory

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
├── app/
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout with navigation
│   ├── decks/
│   │   └── page.tsx          # All decks page
│   └── study/
│       └── [deckId]/
│           └── page.tsx      # Study mode for specific deck
├── components/
│   ├── FlashCard.tsx         # Interactive flashcard component
│   ├── DeckCard.tsx          # Deck preview card
│   └── Navigation.tsx        # Top navigation bar
├── data/
│   └── flashcards.ts         # Sample flashcard data
└── types/
    └── flashcard.ts          # TypeScript type definitions
```

## 🎮 How to Use

1. **Browse Decks** - View all available flashcard decks on the home page or decks page
2. **Start Studying** - Click on any deck to enter study mode
3. **Flip Cards** - Click on a flashcard to reveal the answer
4. **Navigate** - Use Previous/Next buttons to move through cards
5. **Track Progress** - Monitor your progress with the progress bar

## 🎨 Customization

### Adding New Flashcards

Edit `data/flashcards.ts` to add new decks or cards:

```typescript
{
  id: 'unique-id',
  question: 'Your question here',
  answer: 'Your answer here',
  code: 'Optional code snippet',
  language: 'javascript',
  category: 'JavaScript',
  difficulty: 'medium',
  tags: ['tag1', 'tag2']
}
```

### Styling

- Global styles: `app/globals.css`
- Tailwind configuration: Uses Tailwind CSS v4
- Custom animations: 3D flip effects in `globals.css`

## 🛠️ Built With

- **Next.js 16.2** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first CSS
- **Geist Font** - Modern font family

## 📝 Available Decks

1. **JavaScript Fundamentals** - Closures, variables, event loop
2. **React Hooks** - useCallback, useEffect, useLayoutEffect
3. **TypeScript Essentials** - Generics, types vs interfaces
4. **Data Structures** - Stack implementation, binary search

## 🚀 Deployment

Deploy easily on Vercel:

```bash
npm run build
```

Or deploy directly to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 📄 License

This project is open source and available for educational purposes.
