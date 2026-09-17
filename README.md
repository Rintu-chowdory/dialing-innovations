# Dialing Innovations

A modern, cloud-based contact center solution built with React, Vite, and Tailwind CSS.

## Features

- **Call Center Dashboard** — KPI cards with sparklines & trends, hourly call-volume chart, SLA/CSAT rings, live agent leaderboard and recent-call feed
- **Call History** — searchable, filterable (direction/status) call logs with pagination and working CSV export
- **Lead Management** — pipeline funnel with a 5-stage Kanban board
- **Messaging** — two-pane chat inbox with live-send demo thread
- **Voicemail** — voicemail cards with auto-generated transcripts
- **Settings** — integration toggles, agent management, notification & locale settings
- **Floating Softphone** — glass-style dialer with keypad, mute/transfer controls

## Design System

- Dark "midnight navy" theme with indigo→cyan gradient accents
- Inter typeface, custom card/pill/button components in `src/components/ui.jsx`
- Shared demo dataset in `src/data/mock.js` so all pages stay consistent
- CSS-only charts (sparklines, bar chart, progress rings) — no chart library needed

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- React Router DOM
- Lucide React (icons)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## Backend (optional live API)

`backend/app.py` is a FastAPI + SQLite REST API that serves the same data the
dashboard displays. Run it locally:

```bash
cd backend
pip install -r requirements.txt
uvicorn app:app --reload --port 8000
```

Endpoints: `/api/summary`, `/api/calls` (search/direction/status/page filters),
`/api/calls.csv`, `/api/agents`, `/api/leads`, `/api/threads`,
`/api/threads/{id}/messages` (GET + POST), `/api/voicemails`, `/api/health`.
The database auto-seeds demo data on first start.

Point the frontend at it by setting `VITE_API_URL` (see `.env.example`) before
building. Every page then shows a "Live API" badge instead of "Demo data", and
sent messages are persisted server-side.

## Deployment

This project is configured for automatic deployment to GitHub Pages. Push to the `main` branch to trigger the deployment workflow.

## Live Demo

[Dialing Innovations on GitHub Pages](https://rintu-chowdory.github.io/dialing-innovations/)
# Build Status\nAutomatically deploying to GitHub Pages
