import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects | Neil Mahajan",
  description:
    "Explore Neil Mahajan's software engineering projects including web applications, AI integrations, and cloud solutions.",
};

export default function ProjectsPage() {
  const projects = [
    {
      title: "Typing Test TUI",
      description:
        "A Monkeytype-inspired terminal typing trainer built with Go, Cobra, Bubble Tea, and Lip Gloss that provides multilingual datasets, analytics, and configurable practice modes.",
      tags: [
        "Go",
        "Cobra",
        "Bubble Tea",
        "Lip Gloss",
        "Terminal UI",
        "CLI",
        "Spaced Repetition",
      ],
      date: "October 2025",
      link: "/projects/typing-test-tui",
    },
    {
      title: "Spotify to YouTube Music Migration",
      description:
        "A two-part tool that exports liked songs from Spotify using Go and automatically likes them on YouTube Music using Python, providing a free alternative to paid migration services.",
      tags: [
        "Go",
        "Python",
        "Spotify API",
        "YouTube Music API",
        "JSON",
        "OAuth",
      ],
      date: "September 2025",
      link: "/projects/spotify-to-ytmusic",
    },
    {
      title: "Checkers (Draughts) Game",
      description:
        "A terminal-based American Checkers game written in Go featuring turn-based play, multi-jump sequences, forced captures, piece promotion, and win detection with a clean CLI interface.",
      tags: ["Go", "CLI", "Game Development", "Terminal UI", "Board Game"],
      date: "August 2025",
      link: "/projects/checkers",
    },
    {
      title: "Advertising Analytics Dashboard",
      description:
        "A unified web platform designed to resolve the fragmentation of digital advertising analytics across major platforms such as Google, Meta, and Microsoft.",
      tags: ["Next.js", "TypeScript", "OAuth", "API Integration", "PostgreSQL"],
      date: "Aug 2024 - May 2025",
      link: "/projects/advertising-analytics-dashboard",
    },
    {
      title: "Custom AI Chatbot Avatar WordPress Plugin",
      description:
        "A service that quickly creates customized conversational AI chatbots for clients, including personalized knowledge bases, predefined questions, and multilingual support.",
      tags: ["PHP", "Docker", "OpenAI API", "Google Cloud", "WordPress"],
      date: "Aug 2024 - May 2025",
      link: "/projects/custom-ai-chatbot",
    },
    {
      title: "Multiplatform Video Upload",
      description:
        "A Next.js 15 UI for OAuth-based one-click uploads of short-form videos to YouTube Shorts, Instagram Reels, and TikTok.",
      tags: ["Next.js", "React", "OAuth", "API Integration"],
      date: "Mar 2025 - June 2025",
      link: "/projects/multiplatform-video-upload",
    },
    {
      title: "Vocabulary Study Go CLI",
      description:
        "A command-line interface tool built with Go to help study and learn new vocabulary through interactive flashcard sessions with progress tracking and spaced repetition.",
      tags: ["Go", "CLI", "Flashcards", "Progress Tracking", "JSON"],
      date: "July 2025",
      link: "/projects/vocabulary-study-go-cli",
    },
    {
      title: "Terminal Snake Game in Go",
      description:
        "A high-performance, terminal-based Snake game implementation written in Go, showcasing advanced concurrency patterns, data structures, and clean architecture principles.",
      tags: ["Go", "Goroutines", "Concurrency", "Terminal UI", "CLI"],
      date: "July 2025",
      link: "/projects/snake",
    },
    {
      title: "Project Tree Markdown CLI",
      description:
        "A simple CLI tool written in Go that generates Markdown-formatted tree structures of any directory. Perfect for creating README documentation that shows your project structure.",
      tags: ["Go", "CLI", "Markdown", "Documentation", "Tree Structure"],
      date: "August 2025",
      link: "/projects/project-tree-md",
    },
    {
      title: "Repfire - Workout Tracker",
      description:
        "A modern, cross-platform workout tracking mobile app built with React Native and Expo. Track your workouts, monitor your progress, and stay motivated on your fitness journey.",
      tags: ["React Native", "Expo", "TypeScript", "Mobile App", "iOS"],
      date: "Jul 2025 - Aug 2025",
      link: "/projects/repfire",
    },
  ];

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <p className="text-muted-foreground max-w-[800px] mb-8">
        Here are some of my recent projects showcasing my skills in full-stack
        development, AI integration, and cloud solutions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                  {project.date}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={project.link}
                className="text-primary text-sm mt-4 inline-block hover:underline"
              >
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
