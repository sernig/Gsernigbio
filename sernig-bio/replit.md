# replit.md

## Overview

This is a full-stack web application built with React frontend and Express.js backend, featuring a modern tech stack with TypeScript, Tailwind CSS, and shadcn/ui components. The application appears to be a personal portfolio/showcase site for "SERNIG" with interactive elements, video content, and social media integration.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **State Management**: React Query for server state management
- **Routing**: React Router DOM for client-side navigation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Build**: esbuild for production bundling

### Database Architecture
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Management**: Drizzle Kit for migrations
- **Database Provider**: Configured for PostgreSQL (likely Neon based on dependencies)
- **Current Implementation**: In-memory storage with interface for easy database migration

## Key Components

### Frontend Components
- **Navigation**: Dynamic navigation with social media integration
- **HeroSection**: Full-screen hero with background image
- **VideoSection**: YouTube embed with scroll-based visibility
- **InteractiveStrips**: Hover-based content sections showcasing different skills
- **MovieQuotes**: Carousel component with animated quote transitions
- **ContactPopup**: Social media links modal

### Backend Components
- **Storage Interface**: Abstract storage layer supporting both in-memory and database implementations
- **Route Registration**: Modular route system with Express
- **Development Setup**: Vite integration for hot module replacement in development

### Shared Components
- **Schema**: Drizzle schema definitions with Zod validation
- **Types**: Shared TypeScript interfaces and types

## Data Flow

1. **Client-Server Communication**: RESTful API architecture with `/api` prefix
2. **State Management**: React Query handles server state caching and synchronization
3. **Form Handling**: React Hook Form with Zod schema validation
4. **Data Persistence**: Storage interface abstracts database operations
5. **Real-time Updates**: Prepared for WebSocket integration through HTTP server setup

## External Dependencies

### UI Framework
- **Radix UI**: Headless UI components for accessibility
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel functionality

### Development Tools
- **Vite**: Build tool with HMR and optimizations
- **ESBuild**: Fast JavaScript bundler for production
- **PostCSS**: CSS processing with Autoprefixer

### Database & Validation
- **Drizzle ORM**: Type-safe database operations
- **Zod**: Runtime type validation
- **React Hook Form**: Form state management with validation

### External Services
- **YouTube**: Video embedding for portfolio content
- **Social Media**: Integration with Instagram, Telegram, Twitch, Boosty platforms

## Deployment Strategy

### Development Environment
- **Local Server**: Express server with Vite middleware for HMR
- **Port Configuration**: Development on port 5000
- **Database**: PostgreSQL module enabled in Replit environment

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Deployment Target**: Autoscale deployment on Replit
- **External Port**: Port 80 mapping for production access

### Database Migration Path
- **Current**: In-memory storage for development
- **Future**: PostgreSQL integration ready via Drizzle configuration
- **Migration**: `npm run db:push` command available for schema deployment

## Changelog

Changelog:
- June 26, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.