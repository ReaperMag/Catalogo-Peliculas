# 📋 Movie Catalog IMDB - Project Plan

## Overview

This project is a movie catalog application styled after IMDB, built entirely with **React** (pure frontend, no backend API). All movie data will be stored and managed locally (JSON files and/or localStorage). The primary focus of this project is **Git workflow and collaboration** for a team of 6 members.

The application will provide:
- Movie browsing with search and filter capabilities
- Movie detail views
- User favorites/collection management
- Responsive design for desktop and mobile

## Project Type: 🌐 WEB

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS (or CSS modules - decide based on team preference)
- **Data Storage**: Local JSON files + localStorage
- **Routing**: React Router (for navigation between pages)
- **State Management**: React Context or Zustand (lightweight for local data)
- **Build Tool**: Vite with React Compiler/Babel

## Success Criteria ✅

| Criteria | Measurement |
|----------|-------------|
| Git Collaboration | All 6 team members can commit without conflicts using branch strategy |
| Repository Health | `npm run lint` passes with 0 errors on all feature branches |
| Component Reusability | ≥ 80% of UI components are reusable across pages |
| Data Persistence | Movie data persists after page refresh (localStorage) |
| Build Success | `npm run build` completes without errors |
| Type Safety | TypeScript with 0 type errors in production build |
| Accessibility | Basic WCAG AA compliance (color contrast, touch targets) |

## Tech Stack 🛠️

| Area | Technology | Rationale |
|------|-----------|-----------|
| Frontend | React 19 + TypeScript | Latest stable, type safety for 6 developers |
| Build | Vite | Fast HMR, optimized builds |
| Styling | Tailwind CSS v4 | Utility-first, easy theming, fast to develop |
| Routing | React Router DOM | Standard routing for SPA |
| State | React Context + useReducer | Simple state for local data, no complex libs needed |
| Data | JSON files imported + localStorage | Pure local storage, no API needed |
| Icons | react-icons or Lucide React | Consistent icon set |
| Forms | React Hook Form + Zod | Simple form validation if needed |

## File Structure 📁

```
movie-catalog-imdb/
├── .agent/              # Agent scripts and skills
├── src/
│   ├── assets/          # Images, icons, fonts
│   ├── components/      # Reusable UI components
│   │   ├── common/      # Buttons, inputs, modals (shared by all)
│   │   ├── layout/      # Header, Footer, Sidebar
│   │   └── molecules/   # SearchBar, CardList, FilterChip
│   ├── contexts/        # React Context providers
│   │   └── MoviesContext.tsx
│   ├── data/            # Local JSON data files
│   │   └── movies.json  # Initial movie dataset
│   ├── pages/           # Page components (Router routes)
│   │   ├── HomePage.tsx
│   │   ├── MoviesPage.tsx
│   │   ├── MovieDetailPage.tsx
│   │   ├── SearchPage.tsx
│   │   └── FavoritesPage.tsx
│   ├── App.tsx          # Main app wrapper with Router
│   └── main.tsx         # Entry point
├── public/              # Static assets
├── .gitignore           # Already configured
├── eslint.config.js     # Already configured
├── package.json         # Already configured
├── tsconfig.json        # Already configured
└── vite.config.ts       # Already configured
```

## Git Workflow for 6 Members 🌿

### Branch Strategy

| Branch | Purpose | Who Creates |
|--------|---------|-------------|
| `main` | Production-ready code only | Maintainers |
| `develop` | Integration branch for features | Team lead |
| `feature/*` | New features | Any team member |
| `bugfix/*` | Bug fixes | Any team member |
| `hotfix/*` | Production emergencies | Team lead |

### Workflow Process

1. **Start of day**: Pull `develop` → create feature branch `feature/<initials>/<feature-name>`
2. **Work in short increments**: Commit frequently with conventional commits
3. **Push feature branch**: To remote repository
4. **Create Pull Request**: Against `develop` branch
5. **Code Review**: Team members review (at least 1 reviewer required)
6. **Merge**: After approval, merge via squash commit
7. **Delete feature branch**: After merge

### Conventional Commits

```
<type>(<scope>): <description>

[type]:
- feat: new feature
- fix: bug fix
- docs: documentation
- style: formatting, missing semicolons, etc.
- refactor: refactoring production code
- test: adding missing tests
- chore: updating tasks, dependencies, etc.

Example: feat(movies): add search component
Example: fix(header): resolve mobile menu toggle issue
```

### Conflict Prevention

- Daily standup (15 min) to sync work
- Feature branches must be based on latest `develop`
- If merge conflict: communicate with team, resolve together
- Never force-push to `develop`

## Component Breakdown & Team Assignment 👥

### Component Architecture (Reusable, Simple)

| Component | Category | Responsibility | Team Member |
|-----------|----------|----------------|-------------|
| `Button` | Common | Generic button with variants (primary, secondary, danger) | Member 1 |
| `Input` | Common | Text input with label, error state | Member 2 |
| `MovieCard` | Molecule | Displays poster, title, year rating | Member 3 |
| `SearchBar` | Molecule | Input + button for searching movies | Member 4 |
| `FilterChip` | Molecule | Clickable filters (genre, year, rating) | Member 5 |
| `Pagination` | Molecule | Page navigation controls | Member 6 |
| `Header` | Layout | Navigation bar, login/logout button | Member 1 (backup) |
| `Footer` | Layout | Copyright, links | Member 2 (backup) |
| `MovieModal` | Complex | Detail view with full movie info | Member 3 (backup) |
| `FavoritesList` | Complex | List of user-selected favorites | Member 4 (backup) |

### Component Interaction Flow

```
App.tsx
  └── Router (Routes)
       ├── HomePage -> HeroSection + MovieGrid
       │              └── MovieCard (repeated)
       ├── MoviesPage -> SearchBar + MovieGrid
       ├── MovieDetailPage -> MovieModal
       ├── SearchPage -> SearchResults + FilterChip
       └── FavoritesPage -> FavoritesList
```

## Data Strategy 💾

### Local Data Structure (movies.json)

```json
[
  {
    "id": "m1",
    "title": "The Matrix",
    "year": 1999,
    "rating": 8.7,
    "genre": ["Sci-Fi", "Action"],
    "poster": "https://image.tmdb.org/poster/w/xBHvZcjRiWyoffQWB2aQJ8HpXs.jpg",
    "synopsis": "A computer hacker learns about the true nature of reality..."
  },
  // ... more movies
]
```

### Persistence Strategy

1. **Initial data**: Import from `src/data/movies.json` (static import in App.tsx)
2. **User favorites**: Store in `localStorage` under key `favorite-movies`
3. **Search/filter state**: React state (lost on refresh, acceptable for MVP)
4. **Data format**: All movies have unique `id` field for identification

### Data Loading Pattern

```tsx
// src/App.tsx
import moviesData from './data/movies.json?raw';

const App = () => {
  const [movies, setMovies] = useState(moviesData);
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem('favorite-movies');
    return stored ? JSON.parse(stored) : [];
  });
  
  const toggleFavorite = (movieId) => {
    setFavorites(prev => {
      if (prev.includes(movieId)) return prev.filter(id => id !== movieId);
      return [...prev, movieId];
    });
    localStorage.setItem('favorite-movies', JSON.stringify(favorites));
  };
};
```

## Phase X: Verification 🔄

### Verification Checklist (MANDATORY)

> 🔴 **DO NOT mark project complete until ALL checks pass.**

| Check | Command | Status |
|-------|---------|--------|
| **Lint & Type Check** | `npm run lint && npx tsc --noEmit` | ⬜ Not run |
| **Security Scan** | `python .agent/scripts/vulnerability-scanner/scripts/security_scan.py .` | ⬜ Not run |
| **Build Verification** | `npm run build` | ⬜ Not run |
| **Development Server** | `npm run dev` (manual test) | ⬜ Not run |
| **Git Status Check** | `git status` + `git log --oneline -5` | ⬜ Not run |

### Phase X Completion Marker

After all checks pass, add to plan file:

```markdown
## ✅ PHASE X COMPLETE
- Lint: ✅ Pass - no errors
- Security: ✅ No critical issues
- Build: ✅ Success
- Git: ✅ All 6 members can commit/merge without conflicts
- Date: [Current Date]
```

---

> **📌 NEXT STEPS:**
> 1. Team agrees on Git branch naming conventions
> 2. First team member sets up repository remote
> 3. Create `develop` branch and push
> 4. Start with `MovieCard` component (Member 1) as the first feature
> 5. Import initial `movies.json` data
> 6. Begin development with daily sync calls