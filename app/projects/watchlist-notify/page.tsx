import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "Watchlist Notify | Neil Mahajan",
  description:
    "Track your personal movie & TV show watchlist across streaming platforms and automatically get email alerts when titles become available on the services you already subscribe to.",
};

export default function WatchlistNotifyPage() {
  const technologies = [
    "Next.js 15",
    "React",
    "TypeScript",
    "Go",
    "Gin",
    "MongoDB Atlas",
    "Upstash Redis",
    "Auth0",
    "TMDb API",
    "Postmark",
    "Google Cloud Run",
    "Vercel",
    "Docker",
    "Cloudflare",
  ];

  return (
    <div className="container py-12">
      <div className="flex flex-col gap-6">
        {/* Hero section with responsive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Project info */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Badge variant="outline" className="text-xs">
                Personal Project
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Sept 2025 - Oct 2025
              </Badge>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Watchlist Notify
            </h1>
            <p className="text-muted-foreground max-w-[800px] mb-6">
              Track your personal movie & TV show watchlist across streaming
              platforms and automatically get email alerts when titles become
              available on the services you already subscribe to.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild>
                <Link
                  href="https://watchlistnotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="ml-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link
                  href="https://github.com/neilsmahajan/watchlist-notify"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="ml-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative w-full h-[350px] rounded-lg overflow-hidden">
            <Image
              src="/Watchlist Notify Dashboard Page.png"
              alt="Watchlist Notify Dashboard"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="mb-4">
              Watchlist Notify is a full-stack web application designed to solve
              a common problem: you maintain a list of movies and TV shows you
              want to watch, but you rarely know when they become available on
              the streaming services you already pay for. Instead of manually
              checking multiple platforms or paying for rentals of content
              that&apos;s already included in your subscriptions, Watchlist
              Notify centralizes your watchlist and subscription information to
              automatically notify you via email when content becomes
              streamable.
            </p>
            <p className="mb-4">
              The application features a modern Next.js frontend deployed on
              Vercel with Auth0 authentication, a high-performance Go backend
              API deployed as a serverless function on Google Cloud Run, and a
              scheduled digest worker that sends personalized email
              notifications through Postmark. The system integrates with The
              Movie Database (TMDb) API for comprehensive movie and TV show
              metadata and streaming availability information.
            </p>
            <p>
              Built with production-grade infrastructure including MongoDB Atlas
              for data persistence, Upstash Redis for caching TMDb API
              responses, and Cloudflare for DNS management and CDN, Watchlist
              Notify demonstrates modern cloud-native architecture patterns and
              best practices for scalable web applications.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Auth0 Authentication:</strong> Secure multi-provider
                authentication with Google OAuth and username/password login,
                using JWT tokens stored in HttpOnly cookies.
              </li>
              <li>
                <strong>Watchlist Management:</strong> Add, update, and delete
                movies and TV shows with rich metadata from TMDb including
                posters, release dates, and descriptions.
              </li>
              <li>
                <strong>Streaming Service Subscriptions:</strong> Track which
                services you subscribe to (Netflix, Max, Prime Video, Apple TV+,
                Disney+, Hulu, and more).
              </li>
              <li>
                <strong>Real-time Availability Checking:</strong> Instantly see
                which watchlist items are available on your subscribed services
                with up-to-date provider information from TMDb.
              </li>
              <li>
                <strong>Scheduled Email Notifications:</strong> Receive digest
                emails at your preferred frequency (daily, weekly, or monthly)
                when new content becomes available on your services.
              </li>
              <li>
                <strong>Customizable Notification Preferences:</strong>{" "}
                Configure notification intervals, choose which email to receive
                alerts at, and test emails before scheduling.
              </li>
              <li>
                <strong>Advanced Search:</strong> Search The Movie Database with
                real-time results, filtering by movies or TV shows, with
                detailed metadata display.
              </li>
              <li>
                <strong>Redis Caching:</strong> Upstash Redis caches TMDb API
                responses for improved performance with graceful fallback to
                direct API calls.
              </li>
              <li>
                <strong>Profile Management:</strong> Update display name, email
                preferences, and profile picture through an intuitive settings
                interface.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">System Architecture</h2>
            <div className="space-y-4">
              <p>
                Watchlist Notify utilizes a modern, cloud-native architecture
                with clear separation of concerns between frontend, backend, and
                background jobs:
              </p>

              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Frontend (Vercel)</h3>
                <p className="text-sm text-muted-foreground">
                  Next.js 15 with App Router, React 19, TypeScript, and Tailwind
                  CSS. Deployed on Vercel with Cloudflare DNS/CDN for global
                  edge distribution. Integrates Auth0 Next.js SDK for seamless
                  authentication flows.
                </p>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">
                  Backend API (Google Cloud Run)
                </h3>
                <p className="text-sm text-muted-foreground">
                  Go 1.25+ with Gin web framework, deployed as a containerized
                  serverless function on Google Cloud Run. Handles
                  authentication, user management, watchlist operations, and
                  TMDb API integration. Validates JWT tokens from Auth0 and
                  maintains session state via HttpOnly cookies.
                </p>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">
                  Digest Worker (Cloud Run Jobs)
                </h3>
                <p className="text-sm text-muted-foreground">
                  Scheduled Go application triggered hourly by Google Cloud
                  Scheduler. Queries MongoDB for users with active notification
                  preferences, checks TMDb for streaming availability, and sends
                  personalized digest emails via Postmark API.
                </p>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">
                  Data Layer (MongoDB Atlas & Upstash Redis)
                </h3>
                <p className="text-sm text-muted-foreground">
                  MongoDB Atlas provides multi-region data persistence with
                  automated backups for user profiles, watchlist items,
                  subscriptions, and notification preferences. Upstash Redis
                  caches TMDb API responses with configurable TTL to reduce
                  external API calls and improve response times.
                </p>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">External Integrations</h3>
                <p className="text-sm text-muted-foreground">
                  <strong>Auth0:</strong> Multi-provider authentication and user
                  management.
                  <br />
                  <strong>TMDb API:</strong> Movie/TV metadata, search, and
                  watch provider availability data.
                  <br />
                  <strong>Postmark:</strong> Transactional email delivery for
                  digest notifications.
                  <br />
                  <strong>Cloudflare:</strong> DNS management, CDN, and DDoS
                  protection.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">
              Technical Implementation
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">
                  Backend Architecture (Go + Gin)
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  The backend API is built with Go 1.25+ using the Gin web
                  framework for high-performance HTTP routing. The application
                  follows a clean architecture pattern with distinct layers for
                  handlers, services, and data access. JWT authentication is
                  implemented using HMAC signing with tokens stored in HttpOnly
                  cookies for security against XSS attacks.
                </p>
                <p className="text-sm text-muted-foreground">
                  MongoDB integration uses the official Go driver with
                  connection pooling and automatic index creation on startup.
                  The Redis cache layer uses go-redis client with graceful
                  fallback to direct TMDb API calls when cache is unavailable,
                  ensuring high availability.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">
                  Frontend Architecture (Next.js 15)
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Built with Next.js 15 App Router and React 19, leveraging
                  server-side rendering for optimal performance and SEO. The
                  Auth0 Next.js SDK handles OAuth flows seamlessly with
                  automatic token refresh and session management. TypeScript
                  provides type safety across the entire frontend codebase.
                </p>
                <p className="text-sm text-muted-foreground">
                  Tailwind CSS 4 powers the responsive design system with custom
                  components for search, watchlist cards, and settings panels.
                  Next.js Image component optimizes poster and profile images
                  with automatic lazy loading and format conversion.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">
                  Digest Worker & Email System
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  The digest worker is a standalone Go application deployed as a
                  Cloud Run Job, triggered hourly by Cloud Scheduler. It queries
                  MongoDB for users with active notification preferences,
                  determines which items in their watchlist are newly available
                  on their subscribed services, and generates personalized HTML
                  emails.
                </p>
                <p className="text-sm text-muted-foreground">
                  Postmark API handles email delivery with high deliverability
                  rates and detailed tracking. Users can configure notification
                  frequency (daily, weekly, monthly), test emails before
                  enabling notifications, and choose which email address
                  receives alerts.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Deployment & DevOps</h3>
                <p className="text-sm text-muted-foreground">
                  The backend is containerized with Docker and deployed to
                  Google Cloud Run for automatic scaling and zero-downtime
                  deployments. Container images are stored in Google Artifact
                  Registry. The frontend is deployed on Vercel with automatic
                  builds from the main branch. Cloudflare manages DNS with CNAME
                  records pointing to both Vercel and Cloud Run, providing edge
                  caching and DDoS protection.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Data Model</h2>
            <div className="space-y-4">
              <p>
                The application uses MongoDB collections to store user data,
                watchlist items, and notification preferences:
              </p>

              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Users Collection</h3>
                <p className="text-sm text-muted-foreground">
                  Stores user profiles with Auth0 ID, email, display name,
                  profile picture, and timestamps. Indexed on auth0_id for fast
                  authentication lookups.
                </p>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Watchlist Items</h3>
                <p className="text-sm text-muted-foreground">
                  Each item contains TMDb ID, media type (movie/TV), title,
                  overview, poster path, release date, and availability status.
                  Compound index on user_id and tmdb_id ensures unique entries
                  per user.
                </p>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Streaming Subscriptions</h3>
                <p className="text-sm text-muted-foreground">
                  Tracks which streaming services each user subscribes to,
                  storing provider IDs that map to TMDb&apos;s watch provider
                  data (e.g., Netflix=8, Prime Video=9, Disney+=337).
                </p>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Notification Preferences</h3>
                <p className="text-sm text-muted-foreground">
                  Contains user-specific settings including enabled status,
                  notification frequency (daily/weekly/monthly), email address
                  for alerts, and last notification timestamp.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Application Workflow</h2>
            <div className="space-y-3">
              <div className="flex gap-3">
                <Badge className="h-6">1</Badge>
                <p className="text-sm">
                  <strong>Authentication:</strong> User logs in via Auth0
                  (Google OAuth or username/password), receives JWT cookie, and
                  is redirected to dashboard.
                </p>
              </div>
              <div className="flex gap-3">
                <Badge className="h-6">2</Badge>
                <p className="text-sm">
                  <strong>Subscription Setup:</strong> User selects their
                  streaming service subscriptions from the settings page (e.g.,
                  Netflix, Hulu, Disney+).
                </p>
              </div>
              <div className="flex gap-3">
                <Badge className="h-6">3</Badge>
                <p className="text-sm">
                  <strong>Watchlist Building:</strong> User searches TMDb
                  database for movies/TV shows and adds items to their watchlist
                  with one click.
                </p>
              </div>
              <div className="flex gap-3">
                <Badge className="h-6">4</Badge>
                <p className="text-sm">
                  <strong>Availability Detection:</strong> Frontend fetches
                  watch provider data from TMDb (cached in Redis) and displays
                  availability badges on watchlist items.
                </p>
              </div>
              <div className="flex gap-3">
                <Badge className="h-6">5</Badge>
                <p className="text-sm">
                  <strong>Notification Configuration:</strong> User enables
                  digest emails, sets frequency preference, and tests email
                  delivery.
                </p>
              </div>
              <div className="flex gap-3">
                <Badge className="h-6">6</Badge>
                <p className="text-sm">
                  <strong>Scheduled Digests:</strong> Cloud Scheduler triggers
                  digest worker hourly; worker checks each user&apos;s
                  notification schedule, queries available content, and sends
                  emails via Postmark.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative w-full h-[350px] rounded-lg overflow-hidden">
                <Image
                  src="/Watchlist Notify Logged Out Home Page.png"
                  alt="Watchlist Notify - Landing Page"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-full h-[350px] rounded-lg overflow-hidden">
                <Image
                  src="/Watchlist Notify Search Page.png"
                  alt="Watchlist Notify - Search Page"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-full h-[350px] rounded-lg overflow-hidden">
                <Image
                  src="/Watchlist Notify Watchlist Page.png"
                  alt="Watchlist Notify - Watchlist Page"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-full h-[350px] rounded-lg overflow-hidden">
                <Image
                  src="/Watchlist Notify Settings Page Streaming Services.png"
                  alt="Watchlist Notify - Settings: Streaming Services"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-full h-[350px] rounded-lg overflow-hidden">
                <Image
                  src="/Watchlist Notify Settings Page Notification Prefrerences.png"
                  alt="Watchlist Notify - Settings: Notification Preferences"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-full h-[350px] rounded-lg overflow-hidden">
                <Image
                  src="/Watchlist Notify Profile Page.png"
                  alt="Watchlist Notify - Profile Page"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Future Enhancements</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Regional Support:</strong> Extend availability checking
                to international markets beyond the US with region-specific
                streaming services.
              </li>
              <li>
                <strong>Multiple Notification Channels:</strong> Add push
                notifications and SMS alerts alongside email digests.
              </li>
              <li>
                <strong>Instant Alerts:</strong> Per-item toggle for immediate
                notifications when specific titles become available.
              </li>
              <li>
                <strong>Browser Extension:</strong> One-click watchlist addition
                directly from Netflix, Hulu, and other streaming sites.
              </li>
              <li>
                <strong>Social Features:</strong> Public shareable lists and
                collaborative watchlists for families and friends.
              </li>
              <li>
                <strong>AI Recommendations:</strong> Personalized content
                suggestions based on viewing history and preferences.
              </li>
              <li>
                <strong>Advanced Filtering:</strong> Sort and filter watchlist
                by genre, release date, rating, or availability status.
              </li>
              <li>
                <strong>Price Tracking:</strong> Monitor rental/purchase prices
                across platforms and alert on price drops.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
