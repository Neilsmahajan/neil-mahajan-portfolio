import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Github,
  Terminal,
  Crown,
  Target,
  Zap,
  Shield,
  Users,
  Trophy,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Checkers (Draughts) Game | Neil Mahajan",
  description:
    "A terminal-based American Checkers game written in Go featuring turn-based play, multi-jump sequences, forced captures, piece promotion, and win detection with a clean CLI interface.",
};

export default function CheckersPage() {
  const technologies = [
    "Go 1.21+",
    "CLI",
    "Game Logic",
    "Terminal UI",
    "Board Games",
    "Algorithms",
    "Input Validation",
    "Unicode",
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
                August 2025
              </Badge>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              ♟️ Checkers (Draughts)
            </h1>
            <p className="text-muted-foreground max-w-[800px] mb-6">
              A terminal-based American Checkers game written in Go featuring
              turn-based play, multi-jump sequences, forced captures, piece
              promotion, and win detection with a clean CLI interface.
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
                  href="https://github.com/neilsmahajan/checkers"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="ml-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>

          {/* Hero game board example */}
          <div className="relative w-full bg-muted/40 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="h-5 w-5" />
              <span className="text-sm font-medium">Terminal</span>
            </div>
            <div className="font-mono text-sm space-y-2 whitespace-pre">
              <div className="text-grey-600">Checkers CLI</div>
              <div className="space-y-2 leading-none">
                <div className="text-grey-600">    1    2    3    4    5    6    7    8 </div>
                <div className="text-grey-600">  +----+----+----+----+----+----+----+----+</div>
                <div className="text-grey-600">A | 🔴 |    | 🔴 |    | 🔴 |    | 🔴 |    |</div>
                <div className="text-grey-600">  +----+----+----+----+----+----+----+----+</div>
                <div className="text-grey-600">B |    | 🔴 |    | 🔴 |    | 🔴 |    | 🔴 |</div>
                <div className="text-grey-600">  +----+----+----+----+----+----+----+----+</div>
                <div className="text-grey-600">C | 🔴 |    | 🔴 |    | 🔴 |    | 🔴 |    |</div>
                <div className="text-grey-600">  +----+----+----+----+----+----+----+----+</div>
                <div className="text-grey-600">D |    |    |    |    |    |    |    |    |</div>
                <div className="text-grey-600">  +----+----+----+----+----+----+----+----+</div>
                <div className="text-grey-600">E |    |    |    |    |    |    |    |    |</div>
                <div className="text-grey-600">  +----+----+----+----+----+----+----+----+</div>
                <div className="text-grey-600">F |    | ⚫️ |    | ⚫️ |    | ⚫️ |    | ⚫️ |</div>
                <div className="text-grey-600">  +----+----+----+----+----+----+----+----+</div>
                <div className="text-grey-600">G | ⚫️ |    | ⚫️ |    | ⚫️ |    | ⚫️ |    |</div>
                <div className="text-grey-600">  +----+----+----+----+----+----+----+----+</div>
                <div className="text-grey-600">H |    | ⚫️ |    | ⚫️ |    | ⚫️ |    | ⚫️ |</div>
                <div className="text-grey-600">  +----+----+----+----+----+----+----+----+</div>
              </div>
              <div className="text-grey-600">Checkers CLI</div>
              <div className="text-grey-600">Input start and end position in format &lt;Start Row&gt;&lt;Start Column&gt;&lt;End Row&gt;<br/>&lt;End Column&gt; (e.g. C1D2)</div>
              <div className="text-grey-600">To jump multiple pieces, chain positions (e.g. C1E3G5). Use Q to quit.</div>
            </div>
          </div>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="mb-4">
              This Checkers (English Draughts) implementation is a complete,
              terminal-based game written in Go that demonstrates clean code
              architecture and game development principles. The project
              implements all standard American Checkers rules including diagonal
              movement, forced captures, multi-jump sequences, and piece
              promotion.
            </p>
            <p className="mb-4">
              Built as a learning exercise in structuring a small Go CLI game,
              the code is intentionally compact and readable while maintaining
              full functionality. The game features an 8x8 board with proper
              coordinate system (A-H rows, 1-8 columns), turn-based gameplay,
              and intelligent input validation.
            </p>
            <p>
              The project showcases practical application of Go's strengths in
              CLI applications, including clean package structure, efficient
              algorithms for move validation, and user-friendly terminal
              interface design with Unicode piece representation.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Users className="mr-2 h-5 w-5 text-blue-500" />
                  Game Mechanics
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Turn-based play between Red and Black players</li>
                  <li>Standard diagonal movement rules for pieces</li>
                  <li>Automatic forced capture detection and enforcement</li>
                  <li>Multi-jump capture sequences in single commands</li>
                  <li>Piece promotion to Queen (King) at far ranks</li>
                  <li>Win detection when opponent has no pieces</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Terminal className="mr-2 h-5 w-5 text-green-500" />
                  User Interface & Controls
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Clean 8x8 board display with coordinate labels</li>
                  <li>Unicode piece symbols (🔴/🟥 vs ⚫️/⬛️)</li>
                  <li>Intuitive coordinate input system (A1-H8)</li>
                  <li>Chain move input for multi-jumps (e.g., C3E5G7)</li>
                  <li>Case-insensitive input parsing</li>
                  <li>Clear error messages and move validation</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">
              Game Rules Implementation
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Target className="mr-2 h-5 w-5 text-red-500" />
                  Movement & Capture Logic
                </h3>
                <p className="mb-4">
                  The game implements authentic American Checkers rules with
                  proper direction restrictions and capture mechanics.
                </p>
                <div className="bg-muted/40 rounded-lg p-4">
                  <pre className="text-sm">
                    {`// Movement Rules:
• Normal Red pieces: move down (toward H)
• Normal Black pieces: move up (toward A)  
• Queens: move both forward and backward
• Captures: jump diagonally over opponent pieces
• Multi-jumps: chain captures in single turn
• Forced captures: must capture if available`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Crown className="mr-2 h-5 w-5 text-yellow-500" />
                  Promotion & Advanced Features
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    Automatic promotion to Queen when reaching opposite end
                  </li>
                  <li>Queen pieces gain bidirectional movement capabilities</li>
                  <li>
                    Forced capture validation prevents invalid quiet moves
                  </li>
                  <li>
                    Multi-jump sequence validation ensures legal continuity
                  </li>
                  <li>Board state copying for move validation dry-runs</li>
                  <li>Win condition detection (no remaining pieces)</li>
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
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Clean Architecture
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  The project follows Go best practices with a clean package
                  structure separating concerns between CLI interface and game
                  logic.
                </p>
                <div className="bg-muted/40 rounded-lg p-4">
                  <pre className="text-sm">
                    {`cmd/checkers/     # Entry point (main package)
internal/board/   # Core game logic: board state, movement, validation  
internal/cli/     # Command-line loop, input parsing, turn handling
bin/             # Build artifacts`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Key Algorithms</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Core game mechanics implemented with efficient validation and
                  state management.
                </p>
                <div className="bg-muted/40 rounded-lg p-4">
                  <pre className="text-sm">
                    {`• ValidateMoveSequence(): Validates entire multi-jump chains
• PlayerHasCapture(): Enforces forced capture rules
• Board copying: Safe state manipulation for validation
• Direction restrictions: Piece-specific movement logic
• Input parsing: Batch processing of move sequences`}
                  </pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Usage & Installation</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Installation</h3>
                <div className="bg-muted/40 rounded-lg p-4">
                  <pre className="text-sm">
                    {`# Clone and build
git clone https://github.com/neilsmahajan/checkers.git
cd checkers
make build   # or: go build -o bin/checkers ./cmd/checkers

# Run the game
./bin/checkers`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Gameplay Examples
                </h3>
                <div className="space-y-3">
                  <div className="bg-muted/40 rounded-lg p-4">
                    <div className="text-sm font-medium mb-2">Single Move:</div>
                    <pre className="text-sm text-green-600">C3D4</pre>
                  </div>
                  <div className="bg-muted/40 rounded-lg p-4">
                    <div className="text-sm font-medium mb-2">
                      Single Capture:
                    </div>
                    <pre className="text-sm text-green-600">C3E5</pre>
                  </div>
                  <div className="bg-muted/40 rounded-lg p-4">
                    <div className="text-sm font-medium mb-2">
                      Multi-Jump Chain:
                    </div>
                    <pre className="text-sm text-green-600">C3E5G7</pre>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Development Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Zap className="mr-2 h-5 w-5 text-yellow-500" />
                  Technical Achievements
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Atomic move sequence validation and execution</li>
                  <li>Efficient board state management with copying</li>
                  <li>Robust input parsing with error handling</li>
                  <li>Clean separation of game logic and UI</li>
                  <li>Unicode rendering for cross-platform compatibility</li>
                  <li>Makefile integration for build automation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Trophy className="mr-2 h-5 w-5 text-blue-500" />
                  Game Features
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Complete American Checkers rule implementation</li>
                  <li>Forced capture enforcement</li>
                  <li>Multi-jump chain processing</li>
                  <li>Piece promotion mechanics</li>
                  <li>Win/loss detection</li>
                  <li>Case-insensitive, user-friendly input</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">
              Current Limitations & Future Improvements
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Potential Enhancements
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Unit test coverage for move validation and game logic</li>
                  <li>Stalemate detection (no legal moves available)</li>
                  <li>
                    AI opponent implementation (minimax/alpha-beta pruning)
                  </li>
                  <li>Move history and PGN-like logging</li>
                  <li>Enhanced error messaging for better UX</li>
                  <li>ASCII fallback for terminals without Unicode support</li>
                  <li>Automated continuation of incomplete capture chains</li>
                  <li>Web or TUI (text UI) interface options</li>
                </ul>
              </div>
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                <p className="text-sm">
                  <strong>Note:</strong> The current implementation focuses on
                  core gameplay mechanics and clean code structure, making it an
                  excellent foundation for additional features and game modes.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Learning Outcomes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Go Programming Skills
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Package organization and internal visibility</li>
                  <li>Struct design and method implementation</li>
                  <li>Input validation and error handling</li>
                  <li>String parsing and coordinate systems</li>
                  <li>Build automation with Makefiles</li>
                  <li>CLI application architecture patterns</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Game Development Concepts
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Turn-based game loop implementation</li>
                  <li>Board game rule enforcement</li>
                  <li>State validation and rollback mechanisms</li>
                  <li>User input processing and command parsing</li>
                  <li>Game state representation and manipulation</li>
                  <li>Win condition detection algorithms</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Game Session Example</h2>
            <p className="mb-4">
              Here's what a typical game session looks like (multi-jump chain):
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="relative w-full bg-muted/40 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="h-5 w-5" />
              <span className="text-sm font-medium">Black's Turn Forced to Capture</span>
            </div>
            <div className="font-mono text-sm space-y-2 whitespace-pre">
              <div className="text-grey-600">It's Black's Turn</div>
              <div className="text-grey-600">G1F2</div>
              <div className="text-grey-600">You must take a capture if one is available</div>
              <div className="text-grey-600">E3C5</div>
              <div className="text-grey-600">Move from E3 to C5</div>
              <div className="space-y-2 leading-none">
                <div className="text-grey-600">    1    2    3    4    5    6    7    8 </div>
                <div className="text-grey-600">  +----+----+----+----+----+----+----+----+</div>
                <div className="text-grey-600">A | 🔴 |    | 🔴 |    | 🔴 |    | 🔴 |    |</div>
                <div className="text-grey-600">  +----+----+----+----+----+----+----+----+</div>
                <div className="text-grey-600">B |    |    |    | 🔴 |    | 🔴 |    | 🔴 |</div>
                <div className="text-grey-600">  +----+----+----+----+----+----+----+----+</div>
                <div className="text-grey-600">C | 🔴 |    | 🔴 |    | ⚫️ |    | 🔴 |    |</div>
                <div className="text-grey-600">  +----+----+----+----+----+----+----+----+</div>
                <div className="text-grey-600">D |    | 🔴 |    |    |    |    |    |    |</div>
                <div className="text-grey-600">  +----+----+----+----+----+----+----+----+</div>
                <div className="text-grey-600">E |    |    |    |    | ⚫️ |    |    |    |</div>
                <div className="text-grey-600">  +----+----+----+----+----+----+----+----+</div>
                <div className="text-grey-600">F |    |    |    | ⚫️ |    |    |    | ⚫️ |</div>
                <div className="text-grey-600">  +----+----+----+----+----+----+----+----+</div>
                <div className="text-grey-600">G | ⚫️ |    | ⚫️ |    | ⚫️ |    | ⚫️ |    |</div>
                <div className="text-grey-600">  +----+----+----+----+----+----+----+----+</div>
                <div className="text-grey-600">H |    | ⚫️ |    | ⚫️ |    | ⚫️ |    | ⚫️ |</div>
                <div className="text-grey-600">  +----+----+----+----+----+----+----+----+</div>
              </div>
              <div className="text-grey-600">It's Red's Turn</div>
            </div>
          </div>
            <div className="relative w-full bg-muted/40 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="h-5 w-5" />
              <span className="text-sm font-medium">Red's Turn Double Capture</span>
            </div>
            <div className="font-mono text-sm space-y-2 whitespace-pre">
              <div className="text-grey-600">It's Red's Turn</div>
              <div className="text-grey-600">B6D4F6</div>
              <div className="text-grey-600">Move from B6 to D4</div>
              <div className="text-grey-600">Move from D4 to F6</div>
              <div className="space-y-2 leading-none">
                <div className="text-grey-600">    1    2    3    4    5    6    7    8 </div>
                <div className="text-grey-600">  +----+----+----+----+----+----+----+----+</div>
                <div className="text-grey-600">A | 🔴 |    | 🔴 |    | 🔴 |    | 🔴 |    |</div>
                <div className="text-grey-600">  +----+----+----+----+----+----+----+----+</div>
                <div className="text-grey-600">B |    |    |    | 🔴 |    |    |    | 🔴 |</div>
                <div className="text-grey-600">  +----+----+----+----+----+----+----+----+</div>
                <div className="text-grey-600">C | 🔴 |    | 🔴 |    |    |    | 🔴 |    |</div>
                <div className="text-grey-600">  +----+----+----+----+----+----+----+----+</div>
                <div className="text-grey-600">D |    | 🔴 |    |    |    |    |    |    |</div>
                <div className="text-grey-600">  +----+----+----+----+----+----+----+----+</div>
                <div className="text-grey-600">E |    |    |    |    |    |    |    |    |</div>
                <div className="text-grey-600">  +----+----+----+----+----+----+----+----+</div>
                <div className="text-grey-600">F |    |    |    | ⚫️ |    | 🔴 |    | ⚫️ |</div>
                <div className="text-grey-600">  +----+----+----+----+----+----+----+----+</div>
                <div className="text-grey-600">G | ⚫️ |    | ⚫️ |    | ⚫️ |    | ⚫️ |    |</div>
                <div className="text-grey-600">  +----+----+----+----+----+----+----+----+</div>
                <div className="text-grey-600">H |    | ⚫️ |    | ⚫️ |    | ⚫️ |    | ⚫️ |</div>
                <div className="text-grey-600">  +----+----+----+----+----+----+----+----+</div>
              </div>
              <div className="text-grey-600">It's Black's Turn</div>
            </div>
          </div>
          </div>
            <div className="mt-4">
              <Button variant="outline" asChild>
                <Link
                  href="https://github.com/neilsmahajan/checkers"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="ml-2 h-4 w-4" />
                  Try the Game Yourself
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
