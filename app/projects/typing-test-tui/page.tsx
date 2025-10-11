import type { Metadata } from "next";
import Link from "next/link";
import { Github, Terminal, BarChart2, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Typing Test TUI | Neil Mahajan",
  description:
    "A Monkeytype-inspired terminal typing trainer built with Go, Cobra, Bubble Tea, and Lip Gloss featuring multiple modes, rich datasets, and detailed performance analytics.",
};

export default function TypingTestTuiPage() {
  const technologies = [
    "Go 1.25",
    "Cobra",
    "Bubble Tea",
    "Lip Gloss",
    "Terminal UI",
    "Spaced Repetition",
    "JSON",
    "Makefile",
  ];

  const practiceModes = [
    {
      title: "Quote",
      description:
        "Curated quotes and programming aphorisms keep longer-form passages engaging, perfect for accuracy drills.",
    },
    {
      title: "Words",
      description:
        "Fixed word-count sessions with optional punctuation and numbers provide focused sprints to dial in consistency.",
    },
    {
      title: "Time",
      description:
        "Open-ended, duration-based streams simulate live typing tests and capture sustained performance trends.",
    },
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
                October 2025
              </Badge>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Typing Test TUI
            </h1>
            <p className="text-muted-foreground max-w-[800px] mb-6">
              Typing Test TUI is a Monkeytype-inspired typing trainer that runs
              entirely in the terminal. Built with Go, Cobra, Bubble Tea, and
              Lip Gloss, it delivers responsive layouts, multilingual datasets,
              and analytics so you can benchmark speed and accuracy without
              leaving your keyboard.
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
                  href="https://github.com/neilsmahajan/typing-test-tui"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button asChild>
                <Link
                  href="https://github.com/neilsmahajan/typing-test-tui#quick-start"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Terminal className="mr-2 h-4 w-4" />
                  Quick Start
                </Link>
              </Button>
            </div>
          </div>

          {/* Hero terminal example */}
          <div className="relative w-full bg-muted/40 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="h-5 w-5" />
              <span className="text-sm font-medium">Terminal</span>
            </div>
            <div className="font-mono text-sm space-y-2 whitespace-pre">
              <div className="text-muted-foreground">
                $ <span className="text-green-500">typing-test-tui</span> --mode quote --language code_go
              </div>
              <div className="text-pink-500">
                Quote Mode
              </div>
              <div className="text-muted-foreground">
                Language: Go · 25 words · 142 chars
              </div>
              <div className="space-y-0 leading-none">
                <div className="text-blue-500">╭────────────────────────────────────────────</div>
                <div className="text-blue-500">─╮</div>
                <div className="text-blue-500">│</div>
                <div className="text-blue-500">│</div>
                <div className="text-blue-500">│<span className="text-green-600">  // Go program to illustrate the↵</span></div>
                <div className="text-blue-500">│</div>
                <div className="text-blue-500">│<span className="text-green-600">  // use of an infinite loop↵</span></div>
                <div className="text-blue-500">│</div>
                <div className="text-blue-500">│<span className="text-green-600">  package main↵</span></div>
                <div className="text-blue-500">│</div>
                <div className="text-blue-500">│<span className="text-green-600">  import "fmt"↵</span></div>
                <div className="text-blue-500">│</div>
                <div className="text-blue-500">│<span className="text-green-600">  ↵</span></div>
                <div className="text-blue-500">│</div>
                <div className="text-blue-500">│<span className="text-green-600">  func main() &#123;↵</span></div>
                <div className="text-blue-500">│</div>
                <div className="text-blue-500">│<span className="text-green-600">      for &#123;↵</span></div>
                <div className="text-blue-500">│</div>
                <div className="text-blue-500">│<span className="text-green-600">          fmt.Printf&#40;"GeeksforGeeks"&#41;↵</span></div>
                <div className="text-blue-500">│</div>
                <div className="text-blue-500">│<span className="text-green-600">      &#125;↵</span></div>
                <div className="text-blue-500">│</div>
                <div className="text-blue-500">│<span className="text-green-600">  &#125;</span></div>
                <div className="text-blue-500">│</div>
                <div className="text-blue-500">│</div>
                <div className="text-blue-500">╰────────────────────────────────────────────</div>
                <div className="text-blue-500">─╯</div>
              </div>
              <div className="text-muted-foreground">
                Progress            │ WPM   │ Time
              </div>
              <div className="text-pink-500">
                142/142 chars (100%)  47.8    00:28
              </div>
              <br />
              <div className="text-green-600">
                ✅ Completed in 00:28 · WPM 47.79
              </div>
              <br />
                <div className="bg-gray-800 text-white px-2 py-1 rounded inline-block">
                  Press Enter for another quote or Ctrl+C to exit.
                </div>
            </div>
          </div>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="mb-4">
              Typing Test TUI brings the polish of modern web-based typing
              trainers to the command line. It offers multiple practice modes,
              rich languages and code corpora, and immediate performance
              insights. The project emphasizes ergonomic CLI design, quick
              startup, and the ability to run entirely offline once installed.
            </p>
            <p className="mb-4">
              Built with Cobra for flag parsing and command ergonomics, the app
              leans on Bubble Tea for stateful TUI interactions and Lip Gloss
              for theming. Datasets are stored locally as JSON, enabling rapid
              customization for personal languages, programming stacks, or team
              onboarding materials.
            </p>
            <p>
              The TUI shares the same responsive layout across macOS, Linux, and
              Windows terminals, making it ideal for daily drills, coding
              bootcamps, or developer onboarding exercises.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <BarChart2 className="mr-2 h-5 w-5 text-primary" />
                  Performance Analytics
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    Tracks raw WPM, adjusted WPM, accuracy, and error types per
                    session.
                  </li>
                  <li>
                    Highlights streaks, mistake density, and pacing for targeted
                    improvement.
                  </li>
                  <li>
                    Exports structured JSON logs that open doors for personal
                    dashboards.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-primary" />
                  Adaptive Practice
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    Toggle punctuation, numbers, and session duration with
                    ergonomic flags.
                  </li>
                  <li>
                    Quickly swap languages or code corpora using normalized
                    aliases.
                  </li>
                  <li>
                    Smart validation catches invalid combinations before the TUI
                    launches.
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">
              Practice Modes & Datasets
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {practiceModes.map((mode) => (
                <div key={mode.title} className="bg-muted/40 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">{mode.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {mode.description}
                  </p>
                </div>
              ))}
              <div className="bg-muted/40 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">
                  Language Coverage
                </h3>
                <p className="text-sm text-muted-foreground">
                  Ships with curated datasets for English, Spanish, French, and
                  Simplified Chinese, plus code samples across Go, Rust,
                  JavaScript, and more.
                </p>
              </div>
              <div className="bg-muted/40 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">Offline First</h3>
                <p className="text-sm text-muted-foreground">
                  All corpora live within the repository. No network calls are
                  required once installed, ensuring consistent performance on
                  flights or secure environments.
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
                <h3 className="text-lg font-semibold mb-2">State Management</h3>
                <p className="text-sm text-muted-foreground">
                  Bubble Tea models orchestrate session state, keystroke events,
                  timers, and view rendering. The architecture isolates mode
                  logic inside dedicated packages for maintainability.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Config & Flags</h3>
                <p className="text-sm text-muted-foreground">
                  Cobra commands normalize CLI flags, handle validation, and
                  surface actionable error messages before launching the TUI. A
                  shared configuration layer persists defaults across runs.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Rendering Pipeline
                </h3>
                <p className="text-sm text-muted-foreground">
                  Lip Gloss powers color themes, responsive layouts, and focused
                  prompts, while custom components render metrics, progress
                  bars, and result summaries with high contrast.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Usage & Installation</h2>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div>
                <p className="font-medium text-foreground">Install via Go</p>
                <div className="bg-muted/40 rounded-lg p-4 mt-2 font-mono text-xs">
                  go install github.com/neilsmahajan/typing-test-tui@latest
                </div>
              </div>
              <div>
                <p className="font-medium text-foreground">Build from Source</p>
                <div className="bg-muted/40 rounded-lg p-4 mt-2 font-mono text-xs space-y-1">
                  <div>
                    git clone
                    https://github.com/neilsmahajan/typing-test-tui.git
                  </div>
                  <div>cd typing-test-tui</div>
                  <div>make build</div>
                  <div>./bin/typing-test-tui --mode quote</div>
                </div>
              </div>
              <div>
                <p className="font-medium text-foreground">
                  Recommended Workflow
                </p>
                <p>
                  Use <code>make run</code> with <code>ARGS</code> to iterate on
                  new datasets, and run <code>make test</code> plus
                  <code>make lint</code> before contributing.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Performance & Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-muted/40 rounded-lg p-4">
                <p className="text-3xl font-bold text-primary">100+</p>
                <p className="text-sm text-muted-foreground">
                  Curated code and language datasets
                </p>
              </div>
              <div className="bg-muted/40 rounded-lg p-4">
                <p className="text-3xl font-bold text-primary">120s</p>
                <p className="text-sm text-muted-foreground">
                  Maximum timed session out of the box
                </p>
              </div>
              <div className="bg-muted/40 rounded-lg p-4">
                <p className="text-3xl font-bold text-primary">~105 WPM</p>
                <p className="text-sm text-muted-foreground">
                  Personal best sustained over a week of testing
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Learning Outcomes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Systems Design</h3>
                <p className="text-sm text-muted-foreground">
                  Crafted a modular architecture that separates CLI flag
                  parsing, session orchestration, and rendering, improving test
                  coverage and maintainability.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Developer Experience
                </h3>
                <p className="text-sm text-muted-foreground">
                  Focused on instant feedback loops, ergonomic shortcuts, and
                  human-friendly error messages inspired by popular typing
                  platforms.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Community Ready</h3>
                <p className="text-sm text-muted-foreground">
                  Documented contribution workflows, dataset extensions, and
                  linting pipelines so others can adopt or fork the tool with
                  minimal ramp-up.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Testing Discipline
                </h3>
                <p className="text-sm text-muted-foreground">
                  Hardened parsing, timing, and metric computations with
                  targeted unit tests to ensure correctness across practice
                  modes.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
