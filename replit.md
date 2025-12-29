# Rishabh Mathur Portfolio

## Overview

A modern, animated personal portfolio website for Rishabh Mathur, showcasing professional experience in finance (CIBC, Scotia Wealth Management, Credit Suisse), education at UBC, projects, and technical skills. Built as a full-stack application with a React frontend featuring Framer Motion animations and an Express backend serving portfolio data from PostgreSQL.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript, using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming (dark mode default with black/white color scheme)
- **UI Components**: shadcn/ui component library (new-york style) with Radix UI primitives
- **Animations**: Framer Motion for scroll-based reveals, hover effects, and page transitions; Lottie for hero section animations
- **State Management**: TanStack React Query for server state with custom hooks (`use-portfolio.ts`)
- **Typography**: DM Sans (body), Outfit (display), JetBrains Mono (code)

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Pattern**: RESTful endpoints under `/api/` prefix
- **Database**: PostgreSQL with Drizzle ORM
- **Schema Validation**: Zod for runtime type checking, drizzle-zod for schema-to-validation integration
- **Development**: Vite dev server integration with HMR support

### Data Model
Portfolio content stored in PostgreSQL with five main tables:
- `experiences` - Work history (title, company, period, location, description)
- `education` - Academic background
- `projects` - Portfolio projects and competitions
- `skills` - Categorized skill sets (stored as JSONB arrays)
- `courses` - Relevant coursework with specializations

### Build System
- Development: `tsx` for TypeScript execution, Vite for frontend HMR
- Production: Custom build script using esbuild for server bundling, Vite for client
- Database migrations: Drizzle Kit with `db:push` command

### Project Structure
```
client/           # React frontend
  src/
    components/   # UI components (Hero, Navigation, Timeline, etc.)
    hooks/        # Custom React hooks for data fetching
    pages/        # Route components
    lib/          # Utilities (queryClient, utils)
server/           # Express backend
  routes.ts       # API route handlers with database seeding
  storage.ts      # Database abstraction layer
  db.ts           # Drizzle/PostgreSQL connection
shared/           # Shared types and schemas
  schema.ts       # Drizzle table definitions
  routes.ts       # API contract definitions with Zod
```

## External Dependencies

### Database
- **PostgreSQL**: Primary data store, connection via `DATABASE_URL` environment variable
- **Drizzle ORM**: Type-safe database queries and migrations

### Frontend Libraries
- **Framer Motion**: Animation library for scroll reveals and interactions
- **Lottie React**: JSON-based animations (hero section shooting star effect)
- **Radix UI**: Accessible component primitives (dialogs, dropdowns, tooltips, etc.)
- **TanStack React Query**: Server state management and caching
- **Lucide React**: Icon library

### Build Tools
- **Vite**: Frontend bundler with React plugin
- **esbuild**: Server bundling for production
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS/Autoprefixer**: CSS processing

### Replit Integration
- `@replit/vite-plugin-runtime-error-modal`: Error overlay in development
- `@replit/vite-plugin-cartographer`: Development tooling
- `@replit/vite-plugin-dev-banner`: Development environment indicator