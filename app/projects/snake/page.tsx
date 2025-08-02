import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Terminal, Code, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Terminal Snake Game in Go | Neil Mahajan",
  description:
    "A high-performance, terminal-based Snake game implementation written in Go, showcasing advanced concurrency patterns, data structures, and clean architecture principles.",
};

export default function SnakeGamePage() {
  const technologies = [
    "Go",
    "Goroutines",
    "Channels",
    "Concurrency",
    "Terminal UI",
    "ANSI Escape Sequences",
    "Linked Lists",
    "CLI",
  ];

  return (
    <div className="container py-12">
      <div className="flex flex-col gap-6">
        {/* Hero section with responsive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Project info */}
          <div>
            <Badge variant="outline" className="text-xs mb-2">
              Personal Project
            </Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              🐍 Terminal Snake Game in Go
            </h1>
            <p className="text-muted-foreground max-w-[800px] mb-6">
              A high-performance, terminal-based Snake game implementation
              written in Go, showcasing advanced concurrency patterns, data
              structures, and clean architecture principles.
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
                  href="https://github.com/Neilsmahajan/snake"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="ml-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative w-full bg-muted/40 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="h-5 w-5" />
              <span className="text-sm font-medium">Terminal</span>
            </div>
            <div className="font-mono text-sm space-y-2 whitespace-pre">
              <div className="text-green-600">🐍 SNAKE GAME 🐍</div>
              <div>
                <span className="text-cyan-600">Score: </span>
                <span className="text-yellow-600">6</span>
              </div>
              <br />
              <div className="space-y-0 leading-none">
                <div className="text-blue-600">████████████████████████████████████████</div>
                <div className="text-blue-600">█                                      █</div>
                <div className="text-blue-600">█                                      █</div>
                <div className="text-blue-600">█                                      █</div>
                <div className="text-blue-600">█                                      █</div>
                <div className="text-blue-600">█           <span className="text-green-600">●●●●●●●</span>                    █</div>
                <div className="text-blue-600">█                                      █</div>
                <div className="text-blue-600">█                                      █</div>
                <div className="text-blue-600">█                                      █</div>
                <div className="text-blue-600">█                                      █</div>
                <div className="text-blue-600">█                            <span className="text-red-600">♦</span>         █</div>
                <div className="text-blue-600">█                                      █</div>
                <div className="text-blue-600">█                                      █</div>
                <div className="text-blue-600">█                                      █</div>
                <div className="text-blue-600">█                                      █</div>
                <div className="text-blue-600">█                                      █</div>
                <div className="text-blue-600">█                                      █</div>
                <div className="text-blue-600">█                                      █</div>
                <div className="text-blue-600">█                                      █</div>
                <div className="text-blue-600">████████████████████████████████████████</div>
              </div>
              <div className="text-sm text-muted-foreground mt-4">
                <span className="text-cyan-600">Controls:</span> W/K↑ S/J↓ A/H← D/L→ Q/ESC=Quit
              </div>
            </div>
          </div>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="mb-4">
              This Terminal Snake Game is a sophisticated implementation written
              in Go that demonstrates mastery of concurrent programming,
              efficient data structures, and clean architecture principles. The
              game features real-time terminal manipulation, non-blocking input
              handling, and smooth gameplay mechanics.
            </p>
            <p className="mb-4">
              Built with performance and maintainability in mind, the project
              showcases advanced Go concepts including goroutines for concurrent
              input processing, channels for safe communication, and efficient
              data structures like linked lists for optimal snake body
              management.
            </p>
            <p>
              The game supports multiple difficulty levels with configurable
              board sizes and speeds, responsive controls, and cross-platform
              compatibility across macOS, Linux, and Windows terminals.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Zap className="mr-2 h-5 w-5 text-yellow-500" />
                  Performance & Concurrency
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    <strong>Goroutines & Channels:</strong> Non-blocking input
                    handling with safe concurrent communication
                  </li>
                  <li>
                    <strong>Efficient Data Structures:</strong> Linked list
                    implementation for O(1) head/tail operations
                  </li>
                  <li>
                    <strong>Real-time Processing:</strong> Game loop with
                    precise timing and input processing
                  </li>
                  <li>
                    <strong>Memory Optimization:</strong> ~2MB baseline memory
                    footprint with minimal allocations
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Terminal className="mr-2 h-5 w-5 text-blue-500" />
                  Gameplay & UI
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    <strong>Multiple Difficulty Levels:</strong> Three board
                    sizes (Small, Medium, Large) and configurable speeds
                  </li>
                  <li>
                    <strong>Responsive Controls:</strong> Vim-style (hjkl) and
                    WASD movement with direction locking
                  </li>
                  <li>
                    <strong>Terminal Programming:</strong> Raw terminal
                    manipulation and ANSI escape sequences
                  </li>
                  <li>
                    <strong>Cross-platform:</strong> Works seamlessly on macOS,
                    Linux, and Windows
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">
              Technical Implementation
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3 flex items-center">
                  <Code className="mr-2 h-5 w-5" />
                  Architecture & Design Patterns
                </h3>
                <div className="bg-muted/40 rounded-lg p-4 space-y-3">
                  <div>
                    <h4 className="font-medium mb-2">
                      1. Concurrent Input Processing
                    </h4>
                    <div className="bg-background rounded p-3 font-mono text-sm">
                      <div className="text-green-600">
                        // Non-blocking input handling with goroutines
                      </div>
                      <div>inputChannel := make(chan types.UserInput)</div>
                      <div>stopChannel := make(chan struct{ })</div>
                      <div className="mt-2">
                        go func() {"{"}
                        <br />
                        &nbsp;&nbsp;defer wg.Done()
                        <br />
                        &nbsp;&nbsp;input.ListenForInput(inputChannel, s,
                        stopChannel)
                        <br />
                        {"}"}()
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">
                      2. Efficient Snake Body Management
                    </h4>
                    <div className="bg-background rounded p-3 font-mono text-sm">
                      <div className="text-green-600">
                        // Using container/list for O(1) head/tail operations
                      </div>
                      <div>type Snake struct {"{"}</div>
                      <div>
                        &nbsp;&nbsp;Body&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*list.List
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//
                        Doubly-linked list
                      </div>
                      <div>&nbsp;&nbsp;ShouldGrow&nbsp;&nbsp;bool</div>
                      <div>{"}"}</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">
                      3. Channel-based Communication
                    </h4>
                    <div className="bg-background rounded p-3 font-mono text-sm">
                      <div className="text-green-600">
                        // Type-safe communication between goroutines
                      </div>
                      <div>type UserInput struct {"{"}</div>
                      <div>&nbsp;&nbsp;Direction&nbsp;&nbsp;&nbsp;string</div>
                      <div>
                        &nbsp;&nbsp;Error&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;error
                      </div>
                      <div>{"}"}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Project Structure</h3>
                <div className="bg-muted/40 rounded-lg p-4 font-mono text-sm">
                  <div>snake/</div>
                  <div>├── cmd/</div>
                  <div>│&nbsp;&nbsp;&nbsp;└── main.go</div>
                  <div>├── internal/</div>
                  <div>│&nbsp;&nbsp;&nbsp;├── board/</div>
                  <div>
                    │&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;└── draw_board.go
                  </div>
                  <div>│&nbsp;&nbsp;&nbsp;├── fruit/</div>
                  <div>
                    │&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;└── create_fruit.go
                  </div>
                  <div>│&nbsp;&nbsp;&nbsp;├── input/</div>
                  <div>
                    │&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├──
                    get_difficulty_input.go
                  </div>
                  <div>
                    │&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;└──
                    listen_for_input.go
                  </div>
                  <div>│&nbsp;&nbsp;&nbsp;├── snake/</div>
                  <div>
                    │&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├── move_snake.go
                  </div>
                  <div>
                    │&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;└── new_snake.go
                  </div>
                  <div>│&nbsp;&nbsp;&nbsp;└── types/</div>
                  <div>
                    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── types.go
                  </div>
                  <div>├── go.mod</div>
                  <div>└── README.md</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Performance Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-muted/40 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-600">~2MB</div>
                <div className="text-sm text-muted-foreground">
                  Memory Footprint
                </div>
              </div>
              <div className="bg-muted/40 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">&lt;1%</div>
                <div className="text-sm text-muted-foreground">CPU Usage</div>
              </div>
              <div className="bg-muted/40 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-600">
                  &lt;16ms
                </div>
                <div className="text-sm text-muted-foreground">
                  Input Latency
                </div>
              </div>
              <div className="bg-muted/40 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-orange-600">80x40</div>
                <div className="text-sm text-muted-foreground">
                  Max Board Size
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Gameplay Mechanics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Controls</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between bg-muted/40 rounded p-2">
                    <span className="font-mono">W / K</span>
                    <span className="text-sm">Move Up</span>
                  </div>
                  <div className="flex items-center justify-between bg-muted/40 rounded p-2">
                    <span className="font-mono">S / J</span>
                    <span className="text-sm">Move Down</span>
                  </div>
                  <div className="flex items-center justify-between bg-muted/40 rounded p-2">
                    <span className="font-mono">A / H</span>
                    <span className="text-sm">Move Left</span>
                  </div>
                  <div className="flex items-center justify-between bg-muted/40 rounded p-2">
                    <span className="font-mono">D / L</span>
                    <span className="text-sm">Move Right</span>
                  </div>
                  <div className="flex items-center justify-between bg-muted/40 rounded p-2">
                    <span className="font-mono">Q / ESC</span>
                    <span className="text-sm">Quit Game</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Game Rules</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Snake grows when consuming fruit (F)</li>
                  <li>Game ends on wall or self-collision</li>
                  <li>Score increases with each fruit consumed</li>
                  <li>Fruit spawns randomly in unoccupied positions</li>
                  <li>Direction locking prevents reverse movement</li>
                  <li>Configurable board sizes and speeds</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Installation & Usage</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-3">Quick Start</h3>
                <div className="bg-muted/40 rounded-lg p-4 font-mono text-sm space-y-2">
                  <div className="text-muted-foreground">
                    # Clone the repository
                  </div>
                  <div>git clone https://github.com/Neilsmahajan/snake.git</div>
                  <div>cd snake</div>
                  <div className="text-muted-foreground mt-3">
                    # Install dependencies
                  </div>
                  <div>go mod tidy</div>
                  <div className="text-muted-foreground mt-3">
                    # Run the game
                  </div>
                  <div>go run cmd/main.go</div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Build & Deploy</h3>
                <div className="bg-muted/40 rounded-lg p-4 font-mono text-sm space-y-2">
                  <div className="text-muted-foreground">
                    # Build for current platform
                  </div>
                  <div>go build -o snake cmd/main.go</div>
                  <div>./snake</div>
                  <div className="text-muted-foreground mt-3">
                    # Cross-compile for different platforms
                  </div>
                  <div>
                    GOOS=linux GOARCH=amd64 go build -o snake-linux cmd/main.go
                  </div>
                  <div>
                    GOOS=windows GOARCH=amd64 go build -o snake-windows.exe
                    cmd/main.go
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Learning Outcomes</h2>
            <p className="mb-4">
              This project demonstrates mastery of several advanced Go concepts
              and software engineering principles:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Go Fundamentals</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Goroutines & concurrency patterns</li>
                  <li>Channel communication</li>
                  <li>Error handling patterns</li>
                  <li>Memory management</li>
                  <li>Interface design</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Software Engineering
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Clean architecture principles</li>
                  <li>Modular design patterns</li>
                  <li>Resource management</li>
                  <li>Cross-platform compatibility</li>
                  <li>Performance optimization</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Game Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Game Configuration</h3>
                <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/Snake Game Inputting Board Size and Speed.png"
                    alt="Snake Game - Board Size and Speed Configuration"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Players can configure board size and game speed before
                  starting
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Game End Screen</h3>
                <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/Snake Game End Screen.png"
                    alt="Snake Game - End Screen with Final Score"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  End screen showing final score and game board state
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
