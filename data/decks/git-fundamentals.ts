import { Deck } from '@/types/flashcard';

export const gitFundamentals: Deck = {
  id: '10',
  name: 'Git & GitHub Fundamentals',
  description: 'Essential Git and GitHub concepts for version control and collaboration',
  category: 'Git',
  cards: [
    {
      id: '10-1',
      question: 'What is Git?',
      answer: 'Git is a distributed version control system that tracks changes to your files over time, letting you undo mistakes, view history, and collaborate with others.',
      code: `# Check if Git is installed
git --version
# git version 2.x.x`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['git', 'basics', 'version-control']
    },
    {
      id: '10-2',
      question: 'What is a Git repository?',
      answer: 'A repository (repo) is a folder that Git is tracking. It contains all your project files plus a hidden .git folder that stores the entire history of changes.',
      code: `# Create a new repo in the current folder
git init

# The .git folder is created automatically
# ls -a
# .  ..  .git  index.html  style.css`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['repository', 'init', 'basics']
    },
    {
      id: '10-3',
      question: 'What does git init do?',
      answer: 'git init turns any folder into a Git repository by creating a hidden .git directory inside it. This is the first command you run to start tracking a project.',
      code: `mkdir my-project
git init
# Initialized empty Git repository in ./my-project/.git/`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['init', 'setup', 'basics']
    },
    {
      id: '10-4',
      question: 'What does git status do?',
      answer: 'git status shows the current state of your repo — which files have been changed, which are staged for the next commit, and which are untracked by Git.',
      code: `git status

# On branch main
# Changes not staged for commit:
#   modified:   index.html
# Untracked files:
#   style.css`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['status', 'basics', 'workflow']
    },
    {
      id: '10-5',
      question: 'What is the staging area?',
      answer: 'The staging area (also called the index) is where you place files before committing them. It lets you choose exactly which changes to include in the next commit.',
      code: `# Stage a specific file
git add index.html

# Stage all changed files
git add .

# Check what is staged
git status`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['staging', 'add', 'workflow']
    },
    {
      id: '10-6',
      question: 'What does git add do?',
      answer: 'git add moves changes from your working directory into the staging area, marking them to be included in the next commit.',
      code: `# Add one file
git add index.html

# Add all files in current folder
git add .

# Add all files of a specific type
git add *.css`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['add', 'staging', 'basics']
    },
    {
      id: '10-7',
      question: 'What does git commit do?',
      answer: 'git commit saves a snapshot of everything in the staging area to the repository history. Every commit has a unique ID (hash) and requires a message describing the change.',
      code: `git commit -m "Add navigation bar to homepage"

# [main a3f92d1] Add navigation bar to homepage
# 2 files changed, 15 insertions(+)`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['commit', 'basics', 'workflow']
    },
    {
      id: '10-8',
      question: 'What is a commit message and how should you write one?',
      answer: 'A commit message describes what changed and why. Use the imperative mood, be specific, and keep it under 72 characters. Good messages make history readable.',
      code: `# Good commit messages
git commit -m "Fix login button not working on mobile"
git commit -m "Add search bar to products page"
git commit -m "Remove unused CSS variables"

# Bad commit messages
git commit -m "fix stuff"
git commit -m "update"
git commit -m "asdfgh"`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['commit', 'best-practices', 'messages']
    },
    {
      id: '10-9',
      question: 'What does git log do?',
      answer: 'git log shows the full history of commits in the current branch — each with its hash, author, date, and message. Use --oneline for a compact view.',
      code: `git log --oneline

# a3f92d1 Add navigation bar to homepage
# 8b21c3e Fix navigation link colours
# 4d09e7a Initial commit`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['log', 'history', 'basics']
    },
    {
      id: '10-10',
      question: 'What is a commit hash?',
      answer: 'A commit hash is the unique ID automatically generated for every commit — a 40-character string like a3f92d1c8... Git lets you use just the first 7 characters.',
      code: `git log --oneline
# a3f92d1 Add navigation bar   ← short hash
# 8b21c3e Fix colours

# Reference a specific commit
git show a3f92d1`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['hash', 'commit', 'history']
    },
    {
      id: '10-11',
      question: 'What does git diff show?',
      answer: 'git diff shows the exact line-by-line changes in your working directory that have NOT yet been staged. Lines starting with + are additions, - are deletions.',
      code: `git diff

# -  color: red;
# +  color: blue;
# Lines removed shown in red (-)
# Lines added shown in green (+)`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['diff', 'changes', 'inspection']
    },
    {
      id: '10-12',
      question: 'How do you unstage a file after git add?',
      answer: 'Use git restore --staged <file> to remove a file from the staging area and return it to the working directory without losing your changes.',
      code: `# You ran git add by mistake
git add index.html

# Undo it — file goes back to "modified" but not staged
git restore --staged index.html`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['restore', 'staging', 'undo']
    },
    {
      id: '10-13',
      question: 'How do you discard changes to a file in the working directory?',
      answer: 'Use git restore <file> to throw away all unsaved changes to a file and revert it to how it was in the last commit.',
      code: `# Discard all changes to index.html since last commit
git restore index.html

# WARNING: This permanently discards your changes
# There is no undo for this command`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['restore', 'undo', 'working-directory']
    },
    {
      id: '10-14',
      question: 'What does git reset --soft HEAD~1 do?',
      answer: 'It undoes the last commit but keeps your file changes staged, so nothing is lost. HEAD~1 means "one commit before the current one".',
      code: `# Undo last commit — changes stay staged
git reset --soft HEAD~1

# Your files are unchanged
# The commit is gone but all edits are in staging
git status  # shows files as staged`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['reset', 'undo', 'commit']
    },
    {
      id: '10-15',
      question: 'What is a branch in Git?',
      answer: 'A branch is an independent line of development. It lets you work on a feature or bug fix in isolation without affecting the main codebase.',
      code: `# Create and switch to a new branch
git switch -c feature/navbar

# Work on your feature safely
# main branch is untouched until you merge`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['branch', 'basics', 'workflow']
    },
    {
      id: '10-16',
      question: 'What is the main (or master) branch?',
      answer: 'main is the default branch created when you initialize a repo. It is conventionally the stable, production-ready branch. Older repos may use master instead.',
      code: `git init
# Default branch: main

# See current branch
git branch
# * main`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['main', 'branch', 'basics']
    },
    {
      id: '10-17',
      question: 'How do you create a new branch?',
      answer: 'Use git switch -c <branchname> to create a new branch and immediately switch to it. This is the modern way; the older syntax is git checkout -b <branchname>.',
      code: `# Modern way (Git 2.23+)
git switch -c feature/login

# Older syntax (still works)
git checkout -b feature/login

# Verify you are on the new branch
git branch  # * feature/login`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['branch', 'switch', 'create']
    },
    {
      id: '10-18',
      question: 'How do you switch between branches?',
      answer: 'Use git switch <branchname> to move to an existing branch. Your working directory updates to reflect that branch\'s files.',
      code: `# Switch to main
git switch main

# Switch to a feature branch
git switch feature/navbar

# See all branches (* = current)
git branch`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['switch', 'branch', 'workflow']
    },
    {
      id: '10-19',
      question: 'How do you list all branches?',
      answer: 'git branch lists all local branches. The current branch is marked with an asterisk *. Use git branch -a to also see remote branches.',
      code: `# Local branches only
git branch
# * main
#   feature/navbar
#   bugfix/login

# Local + remote branches
git branch -a`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['branch', 'list', 'basics']
    },
    {
      id: '10-20',
      question: 'What does git merge do?',
      answer: 'git merge combines the changes from one branch into another. You run it while on the destination branch — Git weaves the two histories together.',
      code: `# Switch to main, then merge the feature branch in
git switch main
git merge feature/navbar

# If no conflicts:
# Merge made by 'recursive' strategy
# Fast-forward`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['merge', 'branch', 'workflow']
    },
    {
      id: '10-21',
      question: 'What is a merge conflict?',
      answer: 'A merge conflict happens when two branches both changed the same line of the same file. Git cannot auto-decide which version to keep, so it marks the file and asks you to resolve it manually.',
      code: `# Git marks the conflicting section:
<<<<<<< HEAD
<nav>Version from main</nav>
=======
<nav>Version from feature branch</nav>
>>>>>>> feature/navbar

# Fix: edit the file, remove the markers, keep correct code
git add index.html
git commit -m "Resolve merge conflict in nav"`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['merge', 'conflict', 'workflow']
    },
    {
      id: '10-22',
      question: 'How do you delete a branch?',
      answer: 'Use git branch -d <branchname> to delete a branch that has already been merged. Use -D (capital) to force-delete an unmerged branch.',
      code: `# Safe delete (only works if branch is merged)
git branch -d feature/navbar

# Force delete (merged or not)
git branch -D old-experiment`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['branch', 'delete', 'cleanup']
    },
    {
      id: '10-23',
      question: 'What is GitHub?',
      answer: 'GitHub is a web platform that hosts Git repositories online. It adds collaboration features like Pull Requests, Issues, Actions (CI/CD), and code review on top of Git.',
      code: `# Git is the tool (local)
# GitHub is the hosting platform (online)

# Other alternatives:
# GitLab — gitlab.com
# Bitbucket — bitbucket.org`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['github', 'basics', 'remote']
    },
    {
      id: '10-24',
      question: 'What is a remote in Git?',
      answer: 'A remote is a version of your repository hosted on another server (like GitHub). origin is the conventional name for your primary remote.',
      code: `# Add a remote called origin
git remote add origin https://github.com/user/repo.git

# View your remotes
git remote -v
# origin  https://github.com/user/repo.git (fetch)
# origin  https://github.com/user/repo.git (push)`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['remote', 'origin', 'github']
    },
    {
      id: '10-25',
      question: 'What does git push do?',
      answer: 'git push sends your local commits to the remote repository. Other people (or other machines) can then pull those changes.',
      code: `# Push current branch to origin
git push

# First push — set upstream tracking
git push -u origin main

# After -u is set, future pushes just need:
git push`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['push', 'remote', 'github']
    },
    {
      id: '10-26',
      question: 'What does git pull do?',
      answer: 'git pull fetches the latest changes from the remote and merges them into your current local branch. It is shorthand for git fetch + git merge.',
      code: `# Get the latest changes from origin
git pull

# Equivalent to:
git fetch origin
git merge origin/main`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['pull', 'remote', 'workflow']
    },
    {
      id: '10-27',
      question: 'What does git clone do?',
      answer: 'git clone downloads a remote repository to your local machine for the first time. It creates a new folder, copies all files, and sets up origin automatically.',
      code: `# Clone a repo into a new folder
git clone https://github.com/username/project.git

# Clone into a specific folder name
git clone https://github.com/username/project.git my-folder`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['clone', 'remote', 'github']
    },
    {
      id: '10-28',
      question: 'What does git fetch do?',
      answer: 'git fetch downloads remote changes to your local machine WITHOUT merging them. It lets you inspect what changed remotely before deciding to merge.',
      code: `# Download remote changes (don't merge yet)
git fetch origin

# Now you can compare
git diff main origin/main

# Merge when ready
git merge origin/main`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['fetch', 'remote', 'workflow']
    },
    {
      id: '10-29',
      question: 'What is a Pull Request (PR)?',
      answer: 'A Pull Request is a GitHub feature to propose merging one branch into another. It lets teammates review your code and discuss changes before they are merged.',
      code: `# 1. Push your feature branch to GitHub
git push origin feature/login

# 2. On GitHub: click "Compare & pull request"
# 3. Add a title and description
# 4. Request reviewers
# 5. Team reviews, approves
# 6. Merge the PR on GitHub`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['pull-request', 'github', 'collaboration']
    },
    {
      id: '10-30',
      question: 'What is .gitignore?',
      answer: 'A .gitignore file tells Git which files and folders to never track. Use it for sensitive files (API keys), build output, and OS junk like .DS_Store.',
      code: `# .gitignore file contents:
node_modules/
.env
.DS_Store
dist/
*.log

# Git will never track these files`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['gitignore', 'basics', 'setup']
    },
    {
      id: '10-31',
      question: 'What are the three main areas of Git?',
      answer: 'Working Directory (your files on disk), Staging Area (files marked for next commit), and Repository (committed history stored in .git).',
      code: `# Working Directory → Staging → Repository

git add .          # Working → Staging
git commit -m "…"  # Staging → Repository

git restore file   # Undo working directory changes
git reset --soft   # Undo a commit back to staging`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['workflow', 'basics', 'areas']
    },
    {
      id: '10-32',
      question: 'How do you configure Git with your name and email?',
      answer: 'Use git config --global to set your name and email. These appear on every commit you make and only need to be set once per machine.',
      code: `git config --global user.name "Isaiah Ferguson"
git config --global user.email "isaiah@example.com"

# Verify settings
git config --list`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['config', 'setup', 'basics']
    },
    {
      id: '10-33',
      question: 'What does git show do?',
      answer: 'git show displays the details of a specific commit — its message, author, date, and the exact lines that were changed.',
      code: `# Show the latest commit
git show

# Show a specific commit by hash
git show a3f92d1`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['show', 'history', 'inspection']
    },
    {
      id: '10-34',
      question: 'What does HEAD mean in Git?',
      answer: 'HEAD is a pointer to the commit you are currently on — usually the tip of your current branch. When you commit, HEAD moves forward to the new commit.',
      code: `git log --oneline
# a3f92d1 (HEAD -> main) Latest commit  ← HEAD is here
# 8b21c3e Previous commit
# 4d09e7a Initial commit`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['head', 'concepts', 'basics']
    },
    {
      id: '10-35',
      question: 'What is origin in Git?',
      answer: 'origin is the default name Git gives to the remote repository when you clone or run git remote add. It is just a shortcut name — you can rename it, but origin is the convention.',
      code: `git remote -v
# origin  https://github.com/user/repo.git (fetch)
# origin  https://github.com/user/repo.git (push)

# origin/main = remote's main branch
git push origin main`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['origin', 'remote', 'basics']
    },
    {
      id: '10-36',
      question: 'What is git log --oneline used for?',
      answer: 'It displays the commit history in a compact format — one line per commit showing just the short hash and message. Much easier to read than the full git log.',
      code: `git log --oneline
# a3f92d1 Add hero section to homepage
# 8b21c3e Fix navigation link colours
# 4d09e7a Initial commit`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['log', 'history', 'commands']
    },
    {
      id: '10-37',
      question: 'How do you amend the last commit message?',
      answer: 'Use git commit --amend to edit the most recent commit. This rewrites it with a new message (or new staged content). Only do this before pushing to a remote.',
      code: `# Fix a typo in the last commit message
git commit --amend -m "Correct commit message here"

# WARNING: Do not amend commits already pushed to a shared repo`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['amend', 'commit', 'undo']
    },
    {
      id: '10-38',
      question: 'What is the difference between git pull and git fetch?',
      answer: 'git fetch downloads remote changes without merging. git pull downloads AND merges them into your current branch. fetch is safer — it lets you review before merging.',
      code: `# fetch: download only, no merge
git fetch origin

# pull: download + merge in one step
git pull

# pull = fetch + merge
git fetch origin
git merge origin/main`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['fetch', 'pull', 'remote']
    },
    {
      id: '10-39',
      question: 'What command shows which branch you are currently on?',
      answer: 'git branch shows all local branches and marks the current one with an asterisk *. You can also see it in git status and most terminal prompts.',
      code: `git branch
# * feature/navbar   ← current branch
#   main
#   bugfix/login

# Also visible in:
git status
# On branch feature/navbar`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['branch', 'basics', 'navigation']
    },
    {
      id: '10-40',
      question: 'What is a fast-forward merge?',
      answer: 'A fast-forward merge happens when the branch being merged has no divergent history — Git simply moves the main branch pointer forward to include the new commits. No merge commit is created.',
      code: `git switch main
git merge feature/navbar
# Fast-forward
# main pointer simply advances to include feature commits

# History stays linear — no extra merge commit`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['merge', 'fast-forward', 'concepts']
    },
    {
      id: '10-41',
      question: 'What does git diff --staged show?',
      answer: 'git diff --staged shows the changes that are in the staging area — the difference between what is staged and what was in the last commit.',
      code: `git add index.html

# See what is staged (ready to commit)
git diff --staged

# Compare: git diff (unstaged) vs git diff --staged (staged)`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['diff', 'staging', 'inspection']
    },
    {
      id: '10-42',
      question: 'What does untracked mean in git status?',
      answer: 'Untracked files are new files in your working directory that Git has never seen before — they are not part of any previous commit and not yet staged.',
      code: `git status
# Untracked files:
#   (use "git add <file>..." to include in what will be committed)
#         new-file.html

# Fix: add the file to start tracking it
git add new-file.html`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['status', 'untracked', 'basics']
    },
    {
      id: '10-43',
      question: 'How do you push a new local branch to GitHub?',
      answer: 'Use git push -u origin <branchname>. The -u flag sets the upstream tracking so future git push commands on that branch know where to push.',
      code: `git switch -c feature/login
# ... make commits ...

# First push of this branch to GitHub
git push -u origin feature/login

# Future pushes on this branch
git push`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['push', 'branch', 'github']
    },
    {
      id: '10-44',
      question: 'What does git stash do?',
      answer: 'git stash temporarily saves your uncommitted changes to a stack and reverts your working directory to the last commit — useful when you need to switch branches without committing.',
      code: `# Save current work-in-progress
git stash

# Switch branches, do other work...
git switch main

# Come back and restore your stashed changes
git stash pop`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['stash', 'workflow', 'commands']
    },
    {
      id: '10-45',
      question: 'What is a README file on GitHub?',
      answer: 'A README.md file in the root of a repo is displayed automatically on the GitHub repo page. It should describe the project, how to install it, and how to use it.',
      code: `# My Project

## Description
A web app built with React and C#.

## Installation
\`\`\`bash
npm install
npm run dev
\`\`\`

## Usage
Visit http://localhost:3000`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['readme', 'github', 'documentation']
    },
    {
      id: '10-46',
      question: 'What is the difference between git reset --soft and git reset --hard?',
      answer: '--soft undoes the commit but keeps all your file changes staged. --hard undoes the commit AND discards all your file changes permanently. Always prefer --soft unless you are certain.',
      code: `# --soft: commit gone, files kept staged (safe)
git reset --soft HEAD~1

# --hard: commit gone, file changes DELETED (destructive!)
git reset --hard HEAD~1

# Rule: if in doubt, use --soft`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['reset', 'undo', 'soft-hard']
    },
    {
      id: '10-47',
      question: 'What does git log --graph show?',
      answer: 'git log --graph draws an ASCII art diagram of the branch structure alongside the commit history, showing where branches split and merged.',
      code: `git log --oneline --graph --all

# * a3f92d1 (HEAD -> main) Merge feature/navbar
# |\\
# | * 8b21c3e Add responsive styles
# | * 3f1a9b2 Build navbar component
# |/
# * 4d09e7a Initial commit`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['log', 'graph', 'visualization']
    },
    {
      id: '10-48',
      question: 'What is a fork on GitHub?',
      answer: 'A fork is your personal copy of someone else\'s GitHub repository. You can make changes in your fork without affecting the original. You then submit a Pull Request to propose your changes back.',
      code: `# 1. Click "Fork" on any GitHub repo page
# 2. Clone YOUR fork
git clone https://github.com/YOUR-username/project.git

# 3. Make changes, push to your fork
git push origin feature/my-fix

# 4. Open a Pull Request from your fork → original repo`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['fork', 'github', 'open-source']
    },
    {
      id: '10-49',
      question: 'What should you always do before starting new work on a shared repo?',
      answer: 'Always run git pull first to get the latest changes from the remote. This prevents conflicts and ensures you are building on top of the most current code.',
      code: `# Before starting any new work:
git switch main
git pull

# Then branch off the updated main
git switch -c feature/new-feature`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['workflow', 'best-practices', 'pull']
    },
    {
      id: '10-50',
      question: 'What is the typical Git workflow for adding a new feature?',
      answer: 'Pull latest → create feature branch → make commits → push branch → open Pull Request → get reviewed → merge → delete branch → pull again.',
      code: `git switch main
git pull                           # 1. Get latest
git switch -c feature/user-profile # 2. New branch
# ... make changes ...
git add .                          # 3. Stage
git commit -m "Add user profile"   # 4. Commit
git push -u origin feature/user-profile # 5. Push
# 6. Open Pull Request on GitHub
# 7. Review → Merge → Delete branch
git switch main
git pull                           # 8. Sync up`,
      language: 'bash',
      category: 'Git',
      difficulty: 'easy',
      tags: ['workflow', 'best-practices', 'github']
    },

    // ── MEDIUM ──────────────────────────────────────────────────────────────
    {
      id: '10-51',
      question: 'What is git rebase and how does it differ from git merge?',
      answer: 'git rebase replays your commits on top of another branch, creating a linear history with no merge commit. git merge preserves the branch history and adds a merge commit. Rebase gives cleaner history; merge preserves context.',
      code: `# Before rebase:
# main:    A - B - C
# feature:     D - E

# After: git switch feature && git rebase main
# main:    A - B - C
# feature:         D' - E'  (replayed on top of C)

# After: git merge (for comparison)
# main:    A - B - C - M  (M = merge commit)
#                   /
# feature:     D - E`,
      language: 'bash',
      category: 'Git',
      difficulty: 'medium',
      tags: ['rebase', 'merge', 'history']
    },
    {
      id: '10-52',
      question: 'What is git cherry-pick?',
      answer: 'git cherry-pick applies the changes from a specific commit onto your current branch, without merging the entire branch. Useful for pulling a single bug fix from another branch.',
      code: `# You want just one commit from another branch
git log --oneline feature/payments
# f3a91b2 Fix currency rounding bug  ← want this one
# 9c4d7e1 Add Stripe integration

# Apply just that commit to main
git switch main
git cherry-pick f3a91b2`,
      language: 'bash',
      category: 'Git',
      difficulty: 'medium',
      tags: ['cherry-pick', 'commits', 'advanced']
    },
    {
      id: '10-53',
      question: 'What does git stash pop vs git stash apply do?',
      answer: 'git stash pop restores the most recent stash AND removes it from the stash stack. git stash apply restores it but keeps the stash saved so you can apply it again elsewhere.',
      code: `git stash         # Save work-in-progress

# Restore AND remove from stash stack
git stash pop

# Restore but KEEP in stash stack
git stash apply

# List all stashes
git stash list
# stash@{0}: WIP on main: a3f92d1 Latest commit`,
      language: 'bash',
      category: 'Git',
      difficulty: 'medium',
      tags: ['stash', 'workflow', 'commands']
    },
    {
      id: '10-54',
      question: 'What is a detached HEAD state?',
      answer: 'A detached HEAD occurs when HEAD points directly to a commit instead of a branch. Commits made in this state are not attached to any branch and can be lost. Always create a branch if you want to keep your work.',
      code: `# This causes detached HEAD
git checkout a3f92d1

# You are in 'detached HEAD' state
# Any commits here are not on a branch

# Fix: create a branch to save your work
git switch -c my-recovery-branch

# Or return to main without saving
git switch main`,
      language: 'bash',
      category: 'Git',
      difficulty: 'medium',
      tags: ['head', 'detached', 'concepts']
    },
    {
      id: '10-55',
      question: 'How does git revert differ from git reset?',
      answer: 'git revert creates a NEW commit that undoes a previous commit — safe for shared branches. git reset rewrites history by removing commits — dangerous on shared branches because it changes commits others may have.',
      code: `# revert: safe — adds an "undo" commit
git revert a3f92d1
# Creates: "Revert 'Add broken feature'"

# reset: rewrites history — NEVER on shared branches
git reset --soft HEAD~1  # safe locally
git reset --hard HEAD~1  # destroys changes

# Rule: use revert on main/shared; reset only on local branches`,
      language: 'bash',
      category: 'Git',
      difficulty: 'medium',
      tags: ['revert', 'reset', 'undo']
    },
    {
      id: '10-56',
      question: 'What is an upstream branch and how do you set one?',
      answer: 'An upstream (tracking) branch is the remote branch your local branch is linked to. It allows git push and git pull to work without specifying remote/branch every time.',
      code: `# Set upstream on first push
git push -u origin feature/login

# Check upstream for each branch
git branch -vv
# * feature/login  a3f92d1 [origin/feature/login] Add login

# Change upstream later
git branch --set-upstream-to=origin/main main`,
      language: 'bash',
      category: 'Git',
      difficulty: 'medium',
      tags: ['upstream', 'remote', 'tracking']
    },
    {
      id: '10-57',
      question: 'What is git reflog and when would you use it?',
      answer: 'git reflog records every movement of HEAD — even commits that are no longer reachable from any branch. It is your safety net when you accidentally lose commits with reset or a bad rebase.',
      code: `git reflog
# a3f92d1 HEAD@{0}: commit: Add navbar
# 8b21c3e HEAD@{1}: reset: moving to HEAD~1
# f3a91b2 HEAD@{2}: commit: The lost commit!

# Recover a "lost" commit
git switch -c recovery-branch f3a91b2`,
      language: 'bash',
      category: 'Git',
      difficulty: 'medium',
      tags: ['reflog', 'recovery', 'advanced']
    },
    {
      id: '10-58',
      question: 'What is the difference between a local branch and a remote-tracking branch?',
      answer: 'A local branch (e.g. main) is one you commit to directly. A remote-tracking branch (e.g. origin/main) is a read-only snapshot of the remote branch, updated when you fetch or pull.',
      code: `# Local branch — you commit here
git switch main
git commit -m "my change"

# origin/main — read-only snapshot of GitHub's main
# Updated by:
git fetch origin

# See remote-tracking branches
git branch -r
# origin/main
# origin/feature/navbar`,
      language: 'bash',
      category: 'Git',
      difficulty: 'medium',
      tags: ['remote-tracking', 'branch', 'concepts']
    },
    {
      id: '10-59',
      question: 'What does git blame do?',
      answer: 'git blame shows who last modified each line of a file, when they did it, and in which commit. Useful for understanding why a line of code was written the way it is.',
      code: `git blame index.html

# a3f92d1 (Isaiah  2024-01-15) <nav class="navbar">
# 8b21c3e (Sarah   2024-01-10) <ul class="nav-list">
# f3a91b2 (Isaiah  2024-01-08) <li>Home</li>

# Show blame for specific lines
git blame -L 10,25 index.html`,
      language: 'bash',
      category: 'Git',
      difficulty: 'medium',
      tags: ['blame', 'history', 'inspection']
    },
    {
      id: '10-60',
      question: 'How do you resolve a merge conflict using VS Code?',
      answer: 'VS Code highlights conflict markers and shows Accept Current Change / Accept Incoming Change / Accept Both buttons. Click the right option, save the file, then stage and commit the resolved file.',
      code: `# 1. Run git merge — conflict occurs
git merge feature/navbar

# 2. Open file in VS Code
# VS Code shows:
# [Accept Current Change] [Accept Incoming Change] [Accept Both]

# 3. Click the correct option and save

# 4. Stage and commit the resolved file
git add index.html
git commit -m "Resolve navbar merge conflict"`,
      language: 'bash',
      category: 'Git',
      difficulty: 'medium',
      tags: ['merge', 'conflict', 'vscode']
    },
    {
      id: '10-61',
      question: 'What does --no-ff do in git merge?',
      answer: 'git merge --no-ff forces Git to always create a merge commit even when a fast-forward is possible. This preserves the fact that a feature branch existed in the history.',
      code: `# Default: fast-forward if possible (no merge commit)
git merge feature/navbar

# --no-ff: always create a merge commit
git merge --no-ff feature/navbar
# Merge branch 'feature/navbar'

# Useful for keeping clear branch history`,
      language: 'bash',
      category: 'Git',
      difficulty: 'medium',
      tags: ['merge', 'no-ff', 'history']
    },
    {
      id: '10-62',
      question: 'How do you delete a remote branch on GitHub from the terminal?',
      answer: 'Use git push origin --delete <branchname>. This removes the branch from GitHub (the remote) while leaving any local copy untouched.',
      code: `# Delete branch on the remote (GitHub)
git push origin --delete feature/navbar

# The local branch still exists
git branch  # feature/navbar still listed locally

# Delete local branch too (if wanted)
git branch -d feature/navbar`,
      language: 'bash',
      category: 'Git',
      difficulty: 'medium',
      tags: ['remote', 'branch', 'delete']
    },
    {
      id: '10-63',
      question: 'What is git tag and when should you use it?',
      answer: 'Tags mark a specific commit as significant — typically a release version like v1.0.0. Unlike branches, tags do not move as new commits are added.',
      code: `# Create a lightweight tag
git tag v1.0.0

# Create an annotated tag (recommended for releases)
git tag -a v1.0.0 -m "First stable release"

# Push tags to GitHub
git push origin --tags

# List all tags
git tag`,
      language: 'bash',
      category: 'Git',
      difficulty: 'medium',
      tags: ['tag', 'releases', 'versioning']
    },
    {
      id: '10-64',
      question: 'What is git shortlog?',
      answer: 'git shortlog summarises the commit history by author — showing how many commits each person made and their commit messages. Useful for changelogs and contributor summaries.',
      code: `git shortlog

# Isaiah Ferguson (12):
#   Add navigation bar
#   Fix login button
#   ...
# Sarah Chen (8):
#   Set up project structure
#   Add CSS reset
#   ...

git shortlog -sn  # just counts, sorted by number`,
      language: 'bash',
      category: 'Git',
      difficulty: 'medium',
      tags: ['shortlog', 'history', 'collaboration']
    },
    {
      id: '10-65',
      question: 'What does git clean do?',
      answer: 'git clean removes untracked files from your working directory. Use -n to preview what would be deleted, and -f to actually delete. Add -d to also remove untracked directories.',
      code: `# Preview what would be removed (safe — no deletion)
git clean -n

# Remove untracked files (irreversible!)
git clean -f

# Remove untracked files AND directories
git clean -fd`,
      language: 'bash',
      category: 'Git',
      difficulty: 'medium',
      tags: ['clean', 'untracked', 'commands']
    },
    {
      id: '10-66',
      question: 'How do you search the commit history for a specific string?',
      answer: 'Use git log -S"searchterm" (the pickaxe flag) to find commits that added or removed a specific string. Great for tracking when a function or variable was introduced.',
      code: `# Find commits that added or removed "loginUser"
git log -S"loginUser" --oneline

# f3a91b2 Add authentication module
# 8b21c3e Refactor user service

# Also search commit messages with --grep
git log --grep="fix" --oneline`,
      language: 'bash',
      category: 'Git',
      difficulty: 'medium',
      tags: ['log', 'search', 'history']
    },
    {
      id: '10-67',
      question: 'What is git bisect used for?',
      answer: 'git bisect uses binary search to find which commit introduced a bug. You mark a known good commit and a known bad commit, and Git checks out the middle commit repeatedly until it narrows down the culprit.',
      code: `git bisect start
git bisect bad              # current commit is broken
git bisect good 4d09e7a     # this old commit was fine

# Git checks out the midpoint — you test it
# If broken:
git bisect bad
# If working:
git bisect good

# Git narrows down until it finds the first bad commit
git bisect reset  # when done`,
      language: 'bash',
      category: 'Git',
      difficulty: 'medium',
      tags: ['bisect', 'debugging', 'advanced']
    },
    {
      id: '10-68',
      question: 'What is a Git hook?',
      answer: 'Git hooks are scripts that run automatically at specific points in the Git workflow (e.g. before a commit, before a push). They live in .git/hooks/ and are used to enforce rules or automate tasks.',
      code: `# Hooks live in .git/hooks/
ls .git/hooks/
# pre-commit   commit-msg   pre-push   post-merge

# Example: .git/hooks/pre-commit
#!/bin/sh
npm test  # Run tests before every commit
# If this exits non-zero, the commit is aborted`,
      language: 'bash',
      category: 'Git',
      difficulty: 'medium',
      tags: ['hooks', 'automation', 'advanced']
    },
    {
      id: '10-69',
      question: 'How do you squash multiple commits into one?',
      answer: 'Use git rebase -i HEAD~N (interactive rebase) to combine the last N commits. Change "pick" to "squash" (or "s") for the commits you want to fold into the one above them.',
      code: `# Squash last 3 commits into one
git rebase -i HEAD~3

# Editor opens:
# pick a3f92d1 Add navbar
# squash 8b21c3e Fix navbar typo
# squash f3a91b2 Fix navbar colour

# Change to 's', save, edit the combined message`,
      language: 'bash',
      category: 'Git',
      difficulty: 'medium',
      tags: ['squash', 'rebase', 'history']
    },
    {
      id: '10-70',
      question: 'What is the difference between git pull --rebase and git pull?',
      answer: 'git pull --rebase fetches remote changes and replays your local commits on top, keeping history linear. Plain git pull merges them, which can create a "merge commit" cluttering the log.',
      code: `# Default pull (creates merge commit if diverged)
git pull
# Merge branch 'origin/main' into main

# Pull with rebase (linear history, no merge commit)
git pull --rebase

# Set as default behaviour
git config --global pull.rebase true`,
      language: 'bash',
      category: 'Git',
      difficulty: 'medium',
      tags: ['pull', 'rebase', 'workflow']
    },
    {
      id: '10-71',
      question: 'What does git mv do?',
      answer: 'git mv renames or moves a file and automatically stages the change — equivalent to renaming the file manually, then running git rm on the old name and git add on the new one.',
      code: `# Rename a file
git mv old-name.html new-name.html

# Move a file to a subfolder
git mv index.html pages/index.html

# Git now tracks the rename in history
git log --follow pages/index.html`,
      language: 'bash',
      category: 'Git',
      difficulty: 'medium',
      tags: ['mv', 'rename', 'commands']
    },
    {
      id: '10-72',
      question: 'What does git rm do?',
      answer: 'git rm removes a file from both the working directory and the staging area (marks it for deletion in the next commit). Use --cached to remove from Git tracking only, keeping the file on disk.',
      code: `# Delete and stage the deletion
git rm old-file.html

# Remove from Git tracking but keep on disk
git rm --cached secret.env

# Add secret.env to .gitignore afterwards`,
      language: 'bash',
      category: 'Git',
      difficulty: 'medium',
      tags: ['rm', 'delete', 'commands']
    },
    {
      id: '10-73',
      question: 'What is a shallow clone?',
      answer: 'A shallow clone (git clone --depth N) downloads only the last N commits of history instead of the full repo. Much faster for large repos when you only need the latest code.',
      code: `# Clone with only the last 1 commit (fastest)
git clone --depth 1 https://github.com/user/repo.git

# Clone with last 10 commits
git clone --depth 10 https://github.com/user/repo.git

# Useful for CI/CD pipelines and large repos`,
      language: 'bash',
      category: 'Git',
      difficulty: 'medium',
      tags: ['clone', 'shallow', 'performance']
    },
    {
      id: '10-74',
      question: 'How do you see which commits changed a specific file?',
      answer: 'Use git log -- <filename> to see only the commits that touched that file. Add -p to also see the exact diff for each commit.',
      code: `# Show all commits that changed index.html
git log --oneline -- index.html

# Show commits with diffs for that file
git log -p -- index.html

# Show who changed each line (blame)
git blame index.html`,
      language: 'bash',
      category: 'Git',
      difficulty: 'medium',
      tags: ['log', 'file-history', 'inspection']
    },
    {
      id: '10-75',
      question: 'What is the purpose of git remote prune origin?',
      answer: 'It removes stale remote-tracking branches — local references to remote branches that no longer exist on GitHub (e.g. branches deleted after a PR merge).',
      code: `# After merging PRs on GitHub, branches get deleted there
# Your local machine still has stale references

git remote prune origin
# Pruning origin
# [deleted] origin/feature/old-login

# Also happens automatically with:
git fetch --prune`,
      language: 'bash',
      category: 'Git',
      difficulty: 'medium',
      tags: ['remote', 'prune', 'cleanup']
    },

    // ── HARD ────────────────────────────────────────────────────────────────
    {
      id: '10-76',
      question: 'What is an interactive rebase and what can you do with it?',
      answer: 'git rebase -i lets you rewrite history by reordering, editing, squashing, dropping, or splitting commits before they are shared. It gives you full control over your commit history.',
      code: `git rebase -i HEAD~4

# Editor opens — each line is a commit:
# pick a3f92d1 Add navbar
# pick 8b21c3e WIP typo fix
# pick f3a91b2 Another WIP
# pick 9c4d7e1 Navbar complete

# Commands: pick=keep, reword=edit msg,
# edit=pause to amend, squash=combine,
# fixup=combine (discard msg), drop=delete`,
      language: 'bash',
      category: 'Git',
      difficulty: 'hard',
      tags: ['rebase', 'interactive', 'history']
    },
    {
      id: '10-77',
      question: 'What is a Git submodule?',
      answer: 'A submodule is a Git repo embedded inside another Git repo. The parent repo tracks a specific commit of the submodule, not a branch. Used for shared libraries or dependencies managed as separate repos.',
      code: `# Add a submodule
git submodule add https://github.com/org/lib.git lib/

# Clone a repo that has submodules
git clone --recurse-submodules https://github.com/user/repo.git

# Update all submodules to their tracked commits
git submodule update --init --recursive`,
      language: 'bash',
      category: 'Git',
      difficulty: 'hard',
      tags: ['submodule', 'advanced', 'structure']
    },
    {
      id: '10-78',
      question: 'What is the danger of git push --force and when is git push --force-with-lease safer?',
      answer: '--force overwrites the remote branch unconditionally, potentially destroying teammates\' commits. --force-with-lease only succeeds if no one else has pushed since your last fetch — a much safer alternative.',
      code: `# DANGEROUS: overwrites remote regardless
git push --force origin main

# SAFER: fails if someone else pushed since your fetch
git push --force-with-lease origin main
# Error: rejected — remote has new commits!

# Rule: never --force on main or shared branches
# Only use after a local-only rebase on a personal branch`,
      language: 'bash',
      category: 'Git',
      difficulty: 'hard',
      tags: ['push', 'force', 'safety']
    },
    {
      id: '10-79',
      question: 'What happens to commit history during a rebase vs a merge, and which should you prefer?',
      answer: 'Rebase creates linear history by rewriting commits (new hashes), making logs easier to read. Merge preserves the true branch history with a merge commit. Prefer merge on shared branches (safe); rebase on local feature branches before merging (clean).',
      code: `# Merge — preserves branch structure
# A - B - C - M  (M = merge commit)
#         |  /
#         D - E

# Rebase — linear, rewrites commits
# A - B - C - D' - E'  (new hashes D', E')

# Common workflow:
git switch feature
git rebase main       # rebase locally to stay current
git switch main
git merge --no-ff feature  # merge with a clear merge commit`,
      language: 'bash',
      category: 'Git',
      difficulty: 'hard',
      tags: ['rebase', 'merge', 'strategy']
    },
    {
      id: '10-80',
      question: 'What is git worktree?',
      answer: 'git worktree lets you check out multiple branches simultaneously in different folders — all sharing the same .git directory. Useful for reviewing a PR while continuing work on another branch.',
      code: `# Check out a branch in a separate folder
git worktree add ../hotfix-review hotfix/bug-123

# You now have:
# ./my-project      (main branch)
# ../hotfix-review  (hotfix/bug-123 branch)

# Work in both folders simultaneously!

# Remove when done
git worktree remove ../hotfix-review`,
      language: 'bash',
      category: 'Git',
      difficulty: 'hard',
      tags: ['worktree', 'advanced', 'workflow']
    },
    {
      id: '10-81',
      question: 'How does Git store objects internally?',
      answer: 'Git stores everything as content-addressable objects in .git/objects/. There are 4 types: blob (file content), tree (directory), commit (snapshot + metadata), and tag. Each is identified by the SHA-1 hash of its content.',
      code: `# The 4 Git object types:
# blob   → stores file content
# tree   → stores directory structure (points to blobs/trees)
# commit → stores metadata + pointer to root tree
# tag    → annotated tag object

# Inspect an object
git cat-file -t a3f92d1   # → commit
git cat-file -p a3f92d1   # → show its content`,
      language: 'bash',
      category: 'Git',
      difficulty: 'hard',
      tags: ['internals', 'objects', 'concepts']
    },
    {
      id: '10-82',
      question: 'What is a Git tree object?',
      answer: 'A tree object represents a directory snapshot. It contains pointers to blob objects (files) and other tree objects (subdirectories), each with a filename and permission mode.',
      code: `# View the tree of a commit
git cat-file -p HEAD^{tree}

# 100644 blob a3f92d1  index.html
# 100644 blob 8b21c3e  style.css
# 040000 tree f3a91b2  src/

# Each commit points to one root tree object
# Trees point to blobs and sub-trees`,
      language: 'bash',
      category: 'Git',
      difficulty: 'hard',
      tags: ['internals', 'tree', 'objects']
    },
    {
      id: '10-83',
      question: 'How do you completely remove a file from all Git history (e.g. a committed secret)?',
      answer: 'Use git filter-repo (preferred) or the older git filter-branch to rewrite every commit and strip the file entirely. After rewriting, force-push all branches and rotate the compromised secret immediately.',
      code: `# Install git-filter-repo (recommended tool)
pip install git-filter-repo

# Remove a file from ALL history
git filter-repo --path secret.env --invert-paths

# Force push all branches
git push origin --force --all

# ALSO: rotate/invalidate the exposed secret immediately!
# The old commits exist in GitHub's cache for ~90 days`,
      language: 'bash',
      category: 'Git',
      difficulty: 'hard',
      tags: ['security', 'history-rewrite', 'filter-repo']
    },
    {
      id: '10-84',
      question: 'What is the difference between HEAD~1 and HEAD^1?',
      answer: 'HEAD~1 means "one commit back following the first parent". HEAD^1 also means "first parent". They are equivalent for regular commits. The difference matters on merge commits: HEAD^2 is the second parent (the merged branch), but HEAD~2 is two commits back on the first parent chain.',
      code: `# For a regular commit: identical
git reset HEAD~1
git reset HEAD^1

# For a MERGE commit (two parents):
git log --oneline
# a3f92d1 Merge feature into main  ← HEAD
# 8b21c3e main before merge        ← HEAD^1 = HEAD~1
# f3a91b2 last feature commit      ← HEAD^2 (second parent)

# HEAD~2 = grandparent via first parent chain
# HEAD^2 = second parent of the merge commit`,
      language: 'bash',
      category: 'Git',
      difficulty: 'hard',
      tags: ['head', 'parents', 'navigation']
    },
    {
      id: '10-85',
      question: 'What is git rerere and what problem does it solve?',
      answer: 'git rerere (Reuse Recorded Resolution) remembers how you resolved a merge conflict and automatically applies that same resolution if the same conflict occurs again — useful on long-running branches that are rebased frequently.',
      code: `# Enable rerere globally
git config --global rerere.enabled true

# First time: Git records your conflict resolution
# Second time: Git applies it automatically
git merge feature/login
# Resolved 'src/auth.ts' using previous resolution.

# See recorded resolutions
ls .git/rr-cache/`,
      language: 'bash',
      category: 'Git',
      difficulty: 'hard',
      tags: ['rerere', 'conflicts', 'advanced']
    },
    {
      id: '10-86',
      question: 'What is the ORIG_HEAD ref and when is it useful?',
      answer: 'ORIG_HEAD is automatically set by Git before any operation that moves HEAD significantly (merge, rebase, reset). It points to HEAD\'s position before the operation, making it easy to undo.',
      code: `# After a merge, ORIG_HEAD = state before merge
git merge feature/navbar

# Undo the merge by resetting to ORIG_HEAD
git reset --hard ORIG_HEAD

# Also set after:
# git rebase — undo rebase
git reset --hard ORIG_HEAD

# git reset — undo the reset
git reset --hard ORIG_HEAD`,
      language: 'bash',
      category: 'Git',
      difficulty: 'hard',
      tags: ['orig-head', 'undo', 'advanced']
    },
    {
      id: '10-87',
      question: 'How do you split a single large commit into multiple smaller commits?',
      answer: 'Use git rebase -i and mark the commit as "edit". Git pauses at that commit, you run git reset HEAD~1 to unstage it, then manually add and commit the changes in logical groups.',
      code: `# 1. Start interactive rebase
git rebase -i HEAD~3

# 2. Change "pick" to "edit" for the large commit, save

# 3. Git pauses at that commit
git reset HEAD~1   # unstage without losing changes

# 4. Selectively stage and commit in parts
git add src/auth.ts
git commit -m "Add authentication logic"

git add src/ui/login.tsx
git commit -m "Add login form component"

# 5. Continue the rebase
git rebase --continue`,
      language: 'bash',
      category: 'Git',
      difficulty: 'hard',
      tags: ['rebase', 'split-commit', 'history']
    },
    {
      id: '10-88',
      question: 'What is git archive?',
      answer: 'git archive creates a zip or tar archive of a specific commit, branch, or tag — without including the .git directory. Useful for creating clean source releases.',
      code: `# Create a zip of the current HEAD
git archive --format=zip HEAD > release.zip

# Archive a specific tag
git archive --format=tar.gz v1.0.0 > v1.0.0.tar.gz

# Archive a subdirectory only
git archive HEAD src/ | tar -x -C /tmp/src-only`,
      language: 'bash',
      category: 'Git',
      difficulty: 'hard',
      tags: ['archive', 'release', 'commands']
    },
    {
      id: '10-89',
      question: 'What is the index (staging area) at the object-model level?',
      answer: 'The index is a binary file at .git/index that stores a sorted list of blob SHA-1 hashes, filenames, and permissions for all staged files. Running git commit turns the index into a tree object and wraps it in a commit object.',
      code: `# The index = .git/index (binary file)
# It tracks: filename, permissions, blob SHA-1

# Read the index
git ls-files --stage

# 100644 a3f92d1 0  index.html
# 100644 8b21c3e 0  style.css

# git add writes to the index
# git commit reads the index to build a tree object`,
      language: 'bash',
      category: 'Git',
      difficulty: 'hard',
      tags: ['internals', 'index', 'objects']
    },
    {
      id: '10-90',
      question: 'What is a Git packfile?',
      answer: 'Git periodically compresses loose objects into a packfile (.pack) to save disk space and speed up transfers. It uses delta compression to store only the differences between similar objects.',
      code: `# Git stores objects as loose files initially
ls .git/objects/
# a3/  8b/  f3/  ...  info/  pack/

# Run garbage collection to pack loose objects
git gc

# Packfiles are in:
ls .git/objects/pack/
# pack-abc123.idx   (index for fast lookup)
# pack-abc123.pack  (compressed object data)`,
      language: 'bash',
      category: 'Git',
      difficulty: 'hard',
      tags: ['internals', 'packfile', 'performance']
    },
    {
      id: '10-91',
      question: 'How do you find and recover a dangling commit (a commit not reachable from any branch or tag)?',
      answer: 'Use git fsck --lost-found to find all unreachable objects. Dangling commits are listed and their content is placed in .git/lost-found/. You can then create a branch from one to recover it.',
      code: `git fsck --lost-found

# dangling commit f3a91b2abc...
# dangling blob   9c4d7e1def...

# Inspect the lost commit
git show f3a91b2

# Recover by branching from it
git switch -c recovered-work f3a91b2`,
      language: 'bash',
      category: 'Git',
      difficulty: 'hard',
      tags: ['fsck', 'recovery', 'internals']
    },
    {
      id: '10-92',
      question: 'What is the difference between merge strategies: recursive, ort, and octopus?',
      answer: 'recursive (legacy default) and ort (new default in Git 2.34+) handle two-branch merges with conflict resolution. octopus is used when merging 3+ branches simultaneously — it cannot handle conflicts.',
      code: `# Git chooses strategy automatically based on branch count

# Two branches — uses 'ort' (Git 2.34+) or 'recursive'
git merge feature/a

# Three+ branches — uses 'octopus' (no conflicts allowed)
git merge feature/a feature/b feature/c

# Force a specific strategy
git merge -s recursive feature/a
git merge -s ort feature/a`,
      language: 'bash',
      category: 'Git',
      difficulty: 'hard',
      tags: ['merge', 'strategy', 'internals']
    },
    {
      id: '10-93',
      question: 'What is git notes and how does it differ from commit messages?',
      answer: 'git notes attaches extra information to a commit without changing the commit itself (and thus without changing its hash). Useful for adding CI results, code review comments, or deployment info post-hoc.',
      code: `# Add a note to the latest commit
git notes add -m "Deployed to staging 2024-01-20"

# Add a note to a specific commit
git notes add -m "Reviewed by Sarah" a3f92d1

# View notes in git log
git log --show-notes

# Notes are not pushed by default — push explicitly
git push origin refs/notes/*`,
      language: 'bash',
      category: 'Git',
      difficulty: 'hard',
      tags: ['notes', 'metadata', 'advanced']
    },
    {
      id: '10-94',
      question: 'What is sparse checkout and when would you use it?',
      answer: 'Sparse checkout lets you check out only a subset of a repo\'s files — useful for monorepos where you only need one subdirectory (e.g. one microservice) without downloading the entire codebase.',
      code: `# Enable sparse checkout
git clone --no-checkout https://github.com/org/monorepo.git
cd monorepo
git sparse-checkout init --cone

# Only check out the 'services/api' directory
git sparse-checkout set services/api

git checkout main
# Only services/api files are on disk`,
      language: 'bash',
      category: 'Git',
      difficulty: 'hard',
      tags: ['sparse-checkout', 'monorepo', 'advanced']
    },
    {
      id: '10-95',
      question: 'How does Git detect renames during a diff?',
      answer: 'Git does not explicitly track renames — it detects them at diff time by comparing content similarity between deleted and added files. The default similarity threshold is 50%. Use -M flag or diff.renames config to control this.',
      code: `# Enable rename detection in diff (default)
git diff -M

# Show renames with similarity threshold
git diff -M90%   # only report if >90% similar

# See renames in log
git log --follow -- newname.ts
# --follow traces the file through renames

# Config
git config diff.renames true`,
      language: 'bash',
      category: 'Git',
      difficulty: 'hard',
      tags: ['diff', 'rename-detection', 'internals']
    },
    {
      id: '10-96',
      question: 'What is the "garbage collector" in Git and when does it run?',
      answer: 'git gc (garbage collect) cleans up loose objects, packs them into packfiles, prunes unreachable objects older than the expiry window (default 2 weeks for unreachable, 90 days via reflog), and compresses the repo. It runs automatically after certain operations.',
      code: `# Run manually
git gc

# Aggressive compression (slow, more thorough)
git gc --aggressive

# Check when it would auto-trigger
git config gc.auto       # default: 6700 loose objects

# View repo size before/after
git count-objects -vH`,
      language: 'bash',
      category: 'Git',
      difficulty: 'hard',
      tags: ['gc', 'internals', 'performance']
    },
    {
      id: '10-97',
      question: 'What is a "three-way merge" and how does Git use it?',
      answer: 'A three-way merge compares three versions of a file: the common ancestor (merge base), yours (HEAD), and theirs (the branch being merged). Changes from the ancestor to each side are applied. Conflicts only occur when both sides changed the same region differently.',
      code: `# Three inputs to a merge:
# 1. Merge base = last common ancestor commit
# 2. HEAD       = your current branch tip
# 3. MERGE_HEAD = the branch being merged in

git merge-base main feature/navbar
# → 4d09e7a  (the common ancestor commit)

# Git compares:
# base → HEAD  (your changes)
# base → them  (their changes)
# No overlap = auto-merge; overlap = conflict`,
      language: 'bash',
      category: 'Git',
      difficulty: 'hard',
      tags: ['merge', 'three-way', 'internals']
    },
    {
      id: '10-98',
      question: 'How do you use git log to filter commits by date, author, and message simultaneously?',
      answer: 'Combine --author, --since/--until, --grep, and --all-match flags. By default multiple --grep flags match any; use --all-match to require all conditions to be true.',
      code: `# Commits by a specific author since a date
git log --author="Isaiah" --since="2024-01-01" --oneline

# Commits matching a message pattern
git log --grep="fix" --oneline

# ALL conditions must match (not just any)
git log --author="Isaiah" --grep="fix" --all-match --oneline

# Date range
git log --after="2024-01-01" --before="2024-06-01" --oneline`,
      language: 'bash',
      category: 'Git',
      difficulty: 'hard',
      tags: ['log', 'filtering', 'advanced']
    },
    {
      id: '10-99',
      question: 'What is the difference between a symbolic ref and a direct ref in Git?',
      answer: 'A direct ref stores a SHA-1 hash directly (e.g. tags, detached HEAD). A symbolic ref stores the name of another ref (e.g. HEAD → refs/heads/main). This is why checking out a branch updates HEAD without changing its content.',
      code: `# HEAD is a symbolic ref
cat .git/HEAD
# ref: refs/heads/main   ← points to a branch name

# After git checkout <hash> — becomes direct ref
cat .git/HEAD
# a3f92d1abc...           ← stores SHA-1 directly (detached)

# Branches are direct refs
cat .git/refs/heads/main
# a3f92d1abc...

# Read any ref
git symbolic-ref HEAD     # → refs/heads/main`,
      language: 'bash',
      category: 'Git',
      difficulty: 'hard',
      tags: ['refs', 'symbolic-ref', 'internals']
    },
    {
      id: '10-100',
      question: 'What is the commit graph and how does Git use it for performance?',
      answer: 'The commit graph file (.git/objects/info/commit-graph) is an optional precomputed index of commit ancestors, generation numbers, and tree hashes. It dramatically speeds up operations like git log, rebase, and merge-base that need to traverse commit ancestry.',
      code: `# Generate the commit-graph file
git commit-graph write --reachable

# Auto-update on fetch (recommended)
git config --global fetch.writeCommitGraph true

# Verify it exists
ls .git/objects/info/
# commit-graph

# Operations that benefit:
# git log --graph, git merge-base,
# git branch --contains, git rebase`,
      language: 'bash',
      category: 'Git',
      difficulty: 'hard',
      tags: ['commit-graph', 'performance', 'internals']
    }
  ]
};
