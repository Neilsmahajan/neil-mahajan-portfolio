import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "Productivity Timer | Neil Mahajan",
  description:
    "A productivity timer application built with Go, Gin, HTMX, Alpine.js, Templ, and MongoDB with OAuth authentication for tracking time spent on various tasks.",
};

export default function ProductivityTimerPage() {
  const technologies = [
    "Go",
    "Gin",
    "HTMX",
    "Alpine.js",
    "Templ",
    "MongoDB",
    "OAuth",
    "Goth",
    "Swagger",
    "Railway",
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
                December 2025
              </Badge>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Productivity Timer
            </h1>
            <p className="text-muted-foreground max-w-[800px] mb-6">
              A productivity timer application for tracking time spent on
              various tasks with custom tags, session management, and
              comprehensive statistics across time periods.
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
                  href="https://timer.neilsmahajan.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="ml-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link
                  href="https://github.com/neilsmahajan/productivity-timer"
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
              src="/Productivity Timer Running Timer Page.png"
              alt="Productivity Timer - Running Timer"
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
              Productivity Timer is a full-stack web application designed to
              help users track and manage their time across various tasks. The
              application allows users to start stopwatch-style timer sessions
              while assigning custom tags to categorize their work. All session
              data is saved to the user&apos;s profile, enabling them to analyze
              their productivity patterns and understand where they&apos;re
              spending their time across different time periods.
            </p>
            <p className="mb-4">
              Built with a modern Go backend using the Gin web framework, the
              application leverages HTMX for dynamic page updates without
              writing JavaScript, Alpine.js for lightweight client-side
              interactivity, and Templ for type-safe HTML templating. MongoDB
              provides flexible document storage for user sessions and
              statistics, while OAuth authentication via Goth ensures secure
              access with multiple provider support.
            </p>
            <p>
              The application is deployed on Railway with continuous deployment
              from the main branch, featuring comprehensive API documentation
              via Swagger and a CI/CD pipeline using GitHub Actions for linting,
              testing, building, and security scanning.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Timer Sessions:</strong> Start, stop, and reset timer
                sessions with an intuitive stopwatch interface that tracks time
                in real-time.
              </li>
              <li>
                <strong>Custom Tags:</strong> Assign custom tags to each timer
                session to categorize and organize your work activities.
              </li>
              <li>
                <strong>Statistics Dashboard:</strong> View comprehensive
                statistics and summaries of time spent on tasks, organized by
                tag and time period.
              </li>
              <li>
                <strong>OAuth Authentication:</strong> Secure multi-provider
                authentication supporting Google, GitHub, and other OAuth
                providers via the Goth library.
              </li>
              <li>
                <strong>Session History:</strong> Access detailed history of all
                timer sessions with the ability to view, filter, and manage past
                entries.
              </li>
              <li>
                <strong>Time Period Analysis:</strong> Analyze productivity
                patterns across different time periods to identify trends and
                optimize workflows.
              </li>
              <li>
                <strong>Real-time Updates:</strong> HTMX enables seamless page
                updates without full page reloads, providing a smooth user
                experience.
              </li>
              <li>
                <strong>API Documentation:</strong> Full Swagger/OpenAPI
                documentation for all API endpoints, accessible through the
                built-in Swagger UI.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">System Architecture</h2>
            <div className="space-y-4">
              <p>
                Productivity Timer follows a clean, modular architecture with
                clear separation between the API layer, business logic, and data
                access:
              </p>

              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Backend (Go + Gin)</h3>
                <p className="text-sm text-muted-foreground">
                  The core of the application is built with Go using the Gin web
                  framework for high-performance HTTP routing. The codebase is
                  organized into distinct packages: cmd/api for the application
                  entrypoint, internal/server for HTTP handlers and routing,
                  internal/auth for authentication logic, internal/database for
                  MongoDB operations, and internal/models for data structures.
                </p>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">
                  Frontend (HTMX + Alpine.js + Templ)
                </h3>
                <p className="text-sm text-muted-foreground">
                  The frontend leverages a hypermedia-driven approach using
                  HTMX, which enables dynamic page updates by exchanging HTML
                  fragments with the server rather than JSON. Alpine.js provides
                  lightweight client-side interactivity for the timer
                  functionality, while Templ generates type-safe HTML templates
                  that compile to Go code.
                </p>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Database (MongoDB)</h3>
                <p className="text-sm text-muted-foreground">
                  MongoDB provides flexible document storage for user profiles,
                  timer sessions, and aggregated statistics. The schema-less
                  nature allows for easy evolution of the data model as new
                  features are added.
                </p>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">
                  Authentication (OAuth via Goth)
                </h3>
                <p className="text-sm text-muted-foreground">
                  The Goth library handles OAuth authentication flows,
                  supporting multiple providers including Google and GitHub.
                  This allows users to sign in with their existing accounts
                  without creating new credentials.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">API Endpoints</h2>
            <div className="space-y-4">
              <p>
                The API follows RESTful conventions with versioned endpoints
                under /api/v1. Auth routes remain at the root level for OAuth
                provider compatibility:
              </p>

              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Authentication Routes</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>
                    <code>GET /auth/:provider</code> - Initiate OAuth flow
                  </p>
                  <p>
                    <code>GET /auth/:provider/callback</code> - OAuth callback
                    handler
                  </p>
                  <p>
                    <code>GET /logout/:provider</code> - Logout and clear session
                  </p>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Timer Routes</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>
                    <code>POST /api/v1/timer/start</code> - Start a new timer
                    session
                  </p>
                  <p>
                    <code>POST /api/v1/timer/stop</code> - Stop the current timer
                  </p>
                  <p>
                    <code>POST /api/v1/timer/reset</code> - Reset/complete the
                    timer session
                  </p>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Statistics Routes</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>
                    <code>GET /api/v1/stats/summary</code> - Get overall stats
                    summary
                  </p>
                  <p>
                    <code>GET /api/v1/stats/tag/:tag/sessions</code> - Get
                    sessions for a specific tag
                  </p>
                  <p>
                    <code>DELETE /api/v1/stats/tag/:tag</code> - Delete tag and
                    all associated sessions
                  </p>
                </div>
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
                <h3 className="font-semibold mb-2">HTMX Integration</h3>
                <p className="text-sm text-muted-foreground">
                  HTMX powers the dynamic interactions throughout the
                  application. When users start, stop, or reset timers, HTMX
                  sends AJAX requests to the server and swaps the returned HTML
                  fragments directly into the DOM. This approach eliminates the
                  need for a separate frontend build process and reduces
                  JavaScript complexity while maintaining a responsive user
                  experience.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">
                  Templ Type-Safe Templates
                </h3>
                <p className="text-sm text-muted-foreground">
                  Templ provides compile-time type checking for HTML templates,
                  catching errors before runtime. Templates are defined as Go
                  functions that return templ.Component, enabling composition
                  and reuse while maintaining full IDE support with
                  autocomplete and error detection.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Alpine.js Timer Logic</h3>
                <p className="text-sm text-muted-foreground">
                  Alpine.js handles the client-side timer display, updating the
                  elapsed time in real-time without requiring server round
                  trips. The lightweight framework integrates seamlessly with
                  HTMX, managing local state while HTMX handles server
                  communication.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Swagger Documentation</h3>
                <p className="text-sm text-muted-foreground">
                  API documentation is automatically generated using swag from
                  annotations in the Go handler functions. The Swagger UI is
                  accessible at /swagger/index.html, providing interactive API
                  exploration and testing capabilities.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Project Structure</h2>
            <div className="bg-muted p-4 rounded-lg">
              <pre className="text-sm text-muted-foreground overflow-x-auto">
{`productivity-timer/
├── cmd/api/              # Application entrypoint
├── docs/                 # Generated Swagger/OpenAPI documentation
├── internal/
│   ├── auth/             # Authentication logic
│   ├── database/         # Database operations
│   ├── models/           # Data models
│   └── server/           # HTTP handlers and routing
└── web/templates/        # Templ templates`}
              </pre>
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
                  <strong>Authentication:</strong> User signs in via OAuth
                  (Google or GitHub), creating a session and storing user data
                  in MongoDB.
                </p>
              </div>
              <div className="flex gap-3">
                <Badge className="h-6">2</Badge>
                <p className="text-sm">
                  <strong>Start Timer:</strong> User enters a custom tag name
                  and starts the timer. The session begins tracking time with
                  Alpine.js updating the display in real-time.
                </p>
              </div>
              <div className="flex gap-3">
                <Badge className="h-6">3</Badge>
                <p className="text-sm">
                  <strong>Stop/Reset Timer:</strong> User can pause the timer or
                  complete the session. Completed sessions are saved to MongoDB
                  with the tag, duration, and timestamps.
                </p>
              </div>
              <div className="flex gap-3">
                <Badge className="h-6">4</Badge>
                <p className="text-sm">
                  <strong>View Statistics:</strong> User navigates to the stats
                  page to see summaries of time spent on different tags,
                  filterable by time period.
                </p>
              </div>
              <div className="flex gap-3">
                <Badge className="h-6">5</Badge>
                <p className="text-sm">
                  <strong>Manage Sessions:</strong> User can view detailed
                  session history, drill down into specific tags, and delete
                  tags with all associated sessions.
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
                  src="/Productivity Timer Running Timer Page.png"
                  alt="Productivity Timer - Running Timer"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-full h-[350px] rounded-lg overflow-hidden">
                <Image
                  src="/Productivity Timer Stats Page.png"
                  alt="Productivity Timer - Stats Page"
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
                <strong>Pomodoro Mode:</strong> Add support for Pomodoro
                technique with configurable work and break intervals.
              </li>
              <li>
                <strong>Goals & Targets:</strong> Set daily, weekly, or monthly
                time goals for specific tags and track progress.
              </li>
              <li>
                <strong>Data Export:</strong> Export session data to CSV or JSON
                for external analysis and backup.
              </li>
              <li>
                <strong>Charts & Visualizations:</strong> Add graphical
                representations of productivity trends over time.
              </li>
              <li>
                <strong>Mobile App:</strong> Build a companion mobile
                application for tracking time on the go.
              </li>
              <li>
                <strong>Team Features:</strong> Support for team workspaces with
                shared projects and collaborative time tracking.
              </li>
              <li>
                <strong>Integrations:</strong> Connect with calendar apps, task
                managers, and project management tools.
              </li>
              <li>
                <strong>Notifications:</strong> Reminders to start tracking,
                break alerts, and daily summary emails.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
