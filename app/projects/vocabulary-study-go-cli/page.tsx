import type { Metadata } from "next";
import Link from "next/link";
import { Github, Terminal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Vocabulary Study Go CLI | Neil Mahajan",
  description:
    "A command-line interface tool built with Go to help study and learn new vocabulary through interactive flashcard sessions with progress tracking and spaced repetition.",
};

export default function VocabularyStudyGoCliPage() {
  const technologies = [
    "Go",
    "CLI",
    "JSON",
    "Makefile",
    "Terminal UI",
    "File I/O",
    "Progress Tracking",
    "Spaced Repetition",
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
                July 2025
              </Badge>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Vocabulary Study Go CLI
            </h1>
            <p className="text-muted-foreground max-w-[800px] mb-6">
              A command-line interface tool built with Go to help study and
              learn new vocabulary through interactive flashcard sessions with
              progress tracking and spaced repetition.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button variant="outline" asChild>
                <Link
                  href="https://github.com/neilsmahajan/vocabulary_study_go_cli"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="ml-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>

          {/* Hero code example */}
          <div className="relative w-full bg-muted/40 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="h-5 w-5" />
              <span className="text-sm font-medium">Terminal</span>
            </div>
            <div className="font-mono text-sm space-y-2">
              <div className="text-muted-foreground">
                $ <span className="text-green-600">./vocab</span>
              </div>
              <div className="text-cyan-600">
                📚 Vocabulary Study Session
                <br />
                ────────────────────────────────────────
                <br />
              </div>
              <div className="text-muted-foreground">Card 1 of 1000</div>
              <div className="text-pink-400">
                <br />
                🔷 patent
              </div>
              <div className="text-muted-foreground">
                Part of Speech:{" "}
                <span className="text-orange-300">adjective</span>
              </div>
              <div className="text-cyan-600">
                Press [q]uit to exit or [Enter] to flip the card...
                <br />
                ────────────────────────────────────────
                <br />
              </div>
              <div className="text-blue-600">📖 glaringly obvious</div>
              <div className="text-green-600">
                💬 Since the book had been through no fewer than six proof runs,
                the staff was shocked to see such a patent spelling mistake
                remaining, right in the middle of the front cover!
                <br />
              </div>
              <div className="text-cyan-600">
                Did you know this word? [y]es / [n]o / [q]uit:
              </div>
            </div>
          </div>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="mb-4">
              The Vocabulary Study Go CLI is a command-line application designed
              to help users expand their vocabulary through interactive
              flashcard sessions. Built with Go, it provides an efficient and
              engaging way to learn new words while tracking progress over time.
            </p>
            <p className="mb-4">
              The application implements spaced repetition principles by
              tracking which words users know and don&apos;t know, allowing them
              to focus on challenging vocabulary. With features like
              customizable word lists, progress statistics, vocabulary
              management commands, and various study modes, it&apos;s an ideal
              tool for students, professionals, and language learners.
            </p>
            <p>
              The CLI tool stores vocabulary in JSON format and maintains user
              progress locally, making it lightweight and portable while
              providing powerful learning capabilities. Users can dynamically
              add and remove words through command-line operations, making it
              easy to customize their learning experience.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Interactive Flashcard Sessions:</strong> Learn new words
                and their definitions in an engaging way with immediate
                feedback.
              </li>
              <li>
                <strong>Progress Tracking:</strong> The application remembers
                which words you know and which you&apos;re still learning.
              </li>
              <li>
                <strong>Spaced Repetition:</strong> Focus on words you
                don&apos;t know yet for more efficient learning.
              </li>
              <li>
                <strong>Custom Vocabulary:</strong> Easily add your own words to
                the vocab.json file with definitions and example sentences.
              </li>
              <li>
                <strong>Dynamic Word Management:</strong> Add new words or
                remove existing ones directly from the command line with
                comprehensive metadata support.
              </li>
              <li>
                <strong>Study Statistics:</strong> Track your learning progress
                with detailed statistics on known vs. unknown words.
              </li>
              <li>
                <strong>Flexible Study Modes:</strong> Filter words by status
                (all, unknown, unseen) and limit session length.
              </li>
              <li>
                <strong>Progress Reset:</strong> Start fresh at any time while
                maintaining your vocabulary database.
              </li>
              <li>
                <strong>Add New Words:</strong> Easily add custom words with
                part of speech, definitions, and example sentences directly from
                the command line.
              </li>
              <li>
                <strong>Remove Words:</strong> Remove unwanted words from your
                vocabulary database with a simple command.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Usage Examples</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Basic Commands</h3>
                <div className="bg-muted/40 rounded-lg p-4 font-mono text-sm space-y-2">
                  <div>
                    <span className="text-muted-foreground">
                      # Start a study session
                    </span>
                  </div>
                  <div>
                    $ <span className="text-green-600">./vocab</span>
                  </div>
                  <div className="mt-3">
                    <span className="text-muted-foreground">
                      # Limit session to 10 words
                    </span>
                  </div>
                  <div>
                    $ <span className="text-green-600">./vocab</span> --limit=10
                  </div>
                  <div className="mt-3">
                    <span className="text-muted-foreground">
                      # Study only unknown words
                    </span>
                  </div>
                  <div>
                    $ <span className="text-green-600">./vocab</span>{" "}
                    --review=unknown
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">
                  Progress Management
                </h3>
                <div className="bg-muted/40 rounded-lg p-4 font-mono text-sm space-y-2">
                  <div>
                    <span className="text-muted-foreground">
                      # View learning statistics
                    </span>
                  </div>
                  <div>
                    $ <span className="text-green-600">./vocab</span> stats
                  </div>
                  <div className="mt-3">
                    <span className="text-muted-foreground">
                      # Reset all progress
                    </span>
                  </div>
                  <div>
                    $ <span className="text-green-600">./vocab</span> reset
                  </div>
                  <div className="mt-3">
                    <span className="text-muted-foreground">
                      # Show help information
                    </span>
                  </div>
                  <div>
                    $ <span className="text-green-600">./vocab</span> --help
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">
                  Vocabulary Management
                </h3>
                <div className="bg-muted/40 rounded-lg p-4 font-mono text-sm space-y-2">
                  <div>
                    <span className="text-muted-foreground">
                      # Add a new word to your vocabulary
                    </span>
                  </div>
                  <div>
                    $ <span className="text-green-600">./vocab</span> add
                    --word=précis --pos=noun \<br />
                    --definition=
                    <span className="text-yellow-600">
                      &quot;a summary or abstract of a text&quot;
                    </span>{" "}
                    \<br />
                    --example=
                    <span className="text-yellow-600">
                      &quot;You can read a brief precis here.&quot;
                    </span>
                  </div>
                  <div className="mt-3">
                    <span className="text-muted-foreground">
                      # Remove a word from your vocabulary
                    </span>
                  </div>
                  <div>
                    $ <span className="text-green-600">./vocab</span> remove
                    --word=précis
                  </div>
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
                <h3 className="text-lg font-medium mb-2">Architecture</h3>
                <p className="mb-4">
                  The application is built using Go&apos;s standard library with
                  a clean, modular architecture. It uses JSON for data storage,
                  making it human-readable and easily editable while maintaining
                  simplicity and performance.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Data Structure</h3>
                <div className="bg-muted/40 rounded-lg p-4 font-mono text-sm">
                  <div className="text-muted-foreground mb-2">
                    // vocab.json structure
                  </div>
                  <div>{"{"}</div>
                  <div className="ml-4">&quot;word&quot;: {"{"}</div>
                  <div className="ml-8">
                    &quot;part_of_speech&quot;: &quot;noun&quot;,
                  </div>
                  <div className="ml-8">
                    &quot;definition&quot;: &quot;A clear explanation&quot;,
                  </div>
                  <div className="ml-8">
                    &quot;example_sentence&quot;: &quot;Example usage&quot;
                  </div>
                  <div className="ml-4">{"}"}</div>
                  <div>{"}"}</div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">
                  Key Technical Features
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Command-line argument parsing for flexible usage</li>
                  <li>
                    JSON-based persistent storage for vocabulary and progress
                  </li>
                  <li>
                    Interactive terminal interface with user input handling
                  </li>
                  <li>State management for tracking learning progress</li>
                  <li>
                    Dynamic vocabulary management with add/remove commands
                  </li>
                  <li>
                    Comprehensive word metadata support (POS, definitions,
                    examples)
                  </li>
                  <li>Makefile for easy building and distribution</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Installation & Setup</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Prerequisites</h3>
                <p className="mb-3">
                  Ensure you have Go installed on your system. You can download
                  it from the official Go website.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Quick Start</h3>
                <div className="bg-muted/40 rounded-lg p-4 font-mono text-sm space-y-2">
                  <div>
                    <span className="text-muted-foreground">
                      # Clone the repository
                    </span>
                  </div>
                  <div>
                    $ git clone
                    https://github.com/neilsmahajan/vocabulary_study_go_cli.git
                  </div>
                  <div className="mt-3">
                    <span className="text-muted-foreground">
                      # Navigate to project directory
                    </span>
                  </div>
                  <div>$ cd vocabulary_study_go_cli</div>
                  <div className="mt-3">
                    <span className="text-muted-foreground">
                      # Build the application
                    </span>
                  </div>
                  <div>$ make build</div>
                  <div className="mt-3">
                    <span className="text-muted-foreground">
                      # Start studying!
                    </span>
                  </div>
                  <div>
                    $ <span className="text-green-600">./vocab</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Terminal Screenshots</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="relative w-full bg-muted/40 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Terminal className="h-5 w-5" />
                  <span className="text-sm font-medium">Terminal</span>
                </div>
                <div className="font-mono text-sm space-y-2">
                  <div className="text-muted-foreground">
                    $ <span className="text-green-600">./vocab</span> stats
                  </div>
                  <div className="text-cyan-600">
                    📊 Vocabulary Stats
                    <br />
                    ────────────────────────────────────────
                  </div>
                  <div className="text-muted-foreground">
                    Total words: 1000
                    <br />
                    Known: <span className="text-green-600">0</span>
                    <br />
                    Unknown: <span className="text-red-600">0</span>
                    <br />
                    Unseen: <span className="text-yellow-600">1000</span>
                  </div>
                  <br />
                  <div className="text-gray-600">
                    💡 <span className="text-blue-600">Progress:</span> 0.0%
                    [░░░░░░░░░░░░░░░░░░░░]
                  </div>
                </div>
              </div>

              <div className="relative w-full bg-muted/40 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Terminal className="h-5 w-5" />
                  <span className="text-sm font-medium">Terminal</span>
                </div>
                <div className="font-mono text-sm space-y-2">
                  <div className="text-muted-foreground">
                    $ <span className="text-green-600">./vocab</span> add
                    --word=précis --pos=noun \<br />
                    --definition=
                    <span className="text-yellow-600">
                      &quot;a summary or abstract of a text&quot;
                    </span>{" "}
                    \<br />
                    --example=
                    <span className="text-yellow-600">
                      &quot;You can read a brief precis here.&quot;
                    </span>
                  </div>
                  <div className="text-cyan-600">
                    📚 Adding New Word
                    <br />
                    ─────────────────────────────────────────
                  </div>
                  <div className="text-muted-foreground">
                    Word: <span className="text-pink-300">précis</span>
                    <br />
                    Part of speech:{" "}
                    <span className="text-yellow-600">noun</span>
                    <br />
                    Definition:{" "}
                    <span className="text-blue-600">
                      a summary or abstract of a text
                    </span>
                    <br />
                    Example:{" "}
                    <span className="text-green-600">
                      You can read a brief precis here.
                    </span>
                    <br />
                    <br />
                    Saving vocab word précis to vocab.json
                  </div>
                  <div className="text-green-600">
                    ✅ Added word &apos;précis&apos; to vocab
                  </div>
                </div>
              </div>

              <div className="relative w-full bg-muted/40 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Terminal className="h-5 w-5" />
                  <span className="text-sm font-medium">Terminal</span>
                </div>
                <div className="font-mono text-sm space-y-2">
                  <div className="text-muted-foreground">
                    $ <span className="text-green-600">./vocab</span> remove
                    --word=précis
                    <br />
                  </div>
                  <div className="text-cyan-600">
                    📚 Removing Word
                    <br />
                    ────────────────────────────────────────
                  </div>
                  <div className="text-muted-foreground">
                    Word to remove: <span className="text-red-600">précis</span>
                    <br />
                    <br />
                    Deleting word précis from vocab
                  </div>
                  <div className="text-green-600">
                    ✅ Removed word &apos;précis&apos; from vocab
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
