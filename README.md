# Learning Dashboard

## Tech Stack

* Next.js App Router
* TypeScript
* Supabase
* Tailwind CSS
* Framer Motion
* Lucide React

## Features

* Server Component data fetching
* Dynamic course cards from Supabase
* Animated progress bars
* Framer Motion stagger animations
* Responsive Bento Grid
* Collapsible Sidebar
* Loading Skeletons
* Error Handling

## Architecture

Data is fetched using Next.js Server Components and passed down to Client Components for animations.

Framer Motion is used for:

* Staggered page load
* Hover interactions
* Progress bar animations
* Sidebar layout animations

## Environment Variables

Create a `.env.local` file: in which api keys are stored

NEXT_PUBLIC_SUPABASE_URL=

NEXT_PUBLIC_SUPABASE_ANON_KEY=


Challenges

- Server/Client component split
- Dynamic icon rendering from Supabase
- Responsive Bento Grid