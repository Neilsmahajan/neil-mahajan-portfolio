import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Terminal, Code, TreePine, Folder } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Project Tree Markdown CLI | Neil Mahajan",
  description:
    "A simple CLI tool written in Go that generates Markdown-formatted tree structures of any directory. Perfect for creating README documentation that shows your project structure.",
};

export default function ProjectTreeMdPage() {
  const technologies = [
    "Go",
    "CLI",
    "Markdown",
    "Tree Structure",
    "Box Drawing Characters",
    "File System",
    "Makefile",
    "Documentation",
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
              🌳 Project Tree Markdown CLI
            </h1>
            <p className="text-muted-foreground max-w-[800px] mb-6">
              A simple CLI tool written in Go that generates Markdown-formatted
              tree structures of any directory. Perfect for creating README
              documentation that shows your project structure.
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
                  href="https://github.com/neilsmahajan/project-tree-md"
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
              <span className="text-sm font-medium">Terminal Output</span>
            </div>
            <div className="font-mono text-sm space-y-2">
              <div className="text-muted-foreground">
                $ <span className="text-green-600">./project-tree-md</span>
              </div>
              <div className="text-cyan-600">
                ```
                <br />
                project-tree-md
                <br />
                ├── cmd/
                <br />
                │&nbsp;&nbsp;&nbsp;└── main.go
                <br />
                ├── internal/
                <br />
                │&nbsp;&nbsp;&nbsp;├── cli/
                <br />
                │&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;└── cli.go
                <br />
                │&nbsp;&nbsp;&nbsp;└── tree/
                <br />
                │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── printer.go
                <br />
                ├── .gitignore
                <br />
                ├── go.mod
                <br />
                ├── LICENSE
                <br />
                ├── Makefile
                <br />
                └── README.md
                <br />
                ```
              </div>
            </div>
          </div>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="mb-4">
              Project Tree Markdown is a lightweight CLI tool built with Go that
              generates clean, properly formatted tree structures of directory
              hierarchies in Markdown format. It&apos;s designed specifically
              for developers who want to document their project structure in
              README files and documentation.
            </p>
            <p className="mb-4">
              The tool uses box-drawing characters to create visually appealing
              tree representations and includes smart filtering to automatically
              skip common unwanted files and directories like .git,
              node_modules, and various build artifacts. This makes the output
              clean and focused on the important project structure.
            </p>
            <p>
              Built with simplicity and efficiency in mind, the tool provides a
              straightforward command-line interface with minimal dependencies,
              making it easy to integrate into any development workflow or build
              process.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <TreePine className="mr-2 h-5 w-5 text-green-500" />
                  Clean Output & Formatting
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    Generates properly formatted tree structures using
                    box-drawing characters
                  </li>
                  <li>
                    Output wrapped in markdown code blocks, ready for README
                    files
                  </li>
                  <li>Copy-paste ready format for documentation</li>
                  <li>Consistent and professional visual representation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Folder className="mr-2 h-5 w-5 text-blue-500" />
                  Smart Filtering & Efficiency
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    Automatically skips common unwanted files and directories
                  </li>
                  <li>Filters out .git, node_modules, build artifacts</li>
                  <li>Excludes system files like .DS_Store and Thumbs.db</li>
                  <li>Preserves important hidden files like .gitignore</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Usage Examples</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Basic Commands</h3>
                <div className="bg-muted/40 rounded-lg p-4 font-mono text-sm space-y-2">
                  <div className="text-muted-foreground">
                    # Generate tree for current directory
                  </div>
                  <div>
                    $ <span className="text-green-600">./project-tree-md</span>
                  </div>
                  <br />
                  <div className="text-muted-foreground">
                    # Generate tree for specific directory
                  </div>
                  <div>
                    $ <span className="text-green-600">./project-tree-md</span>{" "}
                    <span className="text-blue-600">-path</span>{" "}
                    /path/to/your/project
                  </div>
                  <br />
                  <div className="text-muted-foreground"># Show help</div>
                  <div>
                    $ <span className="text-green-600">./project-tree-md</span>{" "}
                    <span className="text-blue-600">-help</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Make Commands</h3>
                <div className="bg-muted/40 rounded-lg p-4 font-mono text-sm space-y-2">
                  <div className="text-muted-foreground">
                    # Build the project
                  </div>
                  <div>
                    $ <span className="text-green-600">make build</span>
                  </div>
                  <br />
                  <div className="text-muted-foreground">
                    # Build and run on current directory
                  </div>
                  <div>
                    $ <span className="text-green-600">make run</span>
                  </div>
                  <br />
                  <div className="text-muted-foreground">
                    # Run development tasks (format, vet, test, build)
                  </div>
                  <div>
                    $ <span className="text-green-600">make dev</span>
                  </div>
                  <br />
                  <div className="text-muted-foreground">
                    # Build for multiple platforms
                  </div>
                  <div>
                    $ <span className="text-green-600">make build-all</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">
                  Installation Options
                </h3>
                <div className="bg-muted/40 rounded-lg p-4 font-mono text-sm space-y-2">
                  <div className="text-muted-foreground">
                    # Build from source using Make
                  </div>
                  <div>
                    $ <span className="text-green-600">git clone</span>{" "}
                    https://github.com/neilsmahajan/project-tree-md.git
                  </div>
                  <div>
                    $ <span className="text-green-600">cd</span> project-tree-md
                  </div>
                  <div>
                    $ <span className="text-green-600">make build</span>
                  </div>
                  <br />
                  <div className="text-muted-foreground">
                    # Install system-wide
                  </div>
                  <div>
                    $ <span className="text-green-600">make install</span>{" "}
                    <span className="text-muted-foreground">
                      # Installs to /usr/local/bin
                    </span>
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
                  a clean, modular architecture. It includes a CLI package for
                  command-line argument handling and a tree package for the core
                  tree generation and printing functionality.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Project Structure</h3>
                <div className="bg-muted/40 rounded-lg p-4 font-mono text-sm">
                  <div className="text-cyan-600">project-tree-md/</div>
                  <div>├── cmd/</div>
                  <div>│&nbsp;&nbsp;&nbsp;└── main.go</div>
                  <div>├── internal/</div>
                  <div>│&nbsp;&nbsp;&nbsp;├── cli/</div>
                  <div>│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;└── cli.go</div>
                  <div>│&nbsp;&nbsp;&nbsp;└── tree/</div>
                  <div>
                    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── printer.go
                  </div>
                  <div>├── .gitignore</div>
                  <div>├── go.mod</div>
                  <div>├── LICENSE</div>
                  <div>├── Makefile</div>
                  <div>└── README.md</div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">
                  Key Technical Features
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Efficient directory traversal using Go&apos;s filepath
                    package
                  </li>
                  <li>
                    Smart filtering system to exclude unwanted files and
                    directories
                  </li>
                  <li>
                    Box-drawing character formatting for clean tree output
                  </li>
                  <li>Command-line flag parsing for path specification</li>
                  <li>Cross-platform compatibility (macOS, Linux, Windows)</li>
                  <li>Makefile for easy building and development workflow</li>
                  <li>Minimal dependencies using only Go standard library</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Filtering System</h2>
            <p className="mb-4">
              The tool includes a comprehensive filtering system that
              automatically excludes common files and directories that
              don&apos;t add value to project documentation:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Version Control</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>.git</li>
                  <li>.github</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">IDE/Editor</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>.vscode</li>
                  <li>.idea</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Dependencies</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>node_modules</li>
                  <li>vendor</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Build Artifacts</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>target</li>
                  <li>build</li>
                  <li>dist</li>
                  <li>__pycache__</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">System Files</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>.DS_Store</li>
                  <li>Thumbs.db</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Environment</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>.env</li>
                  <li>.env.local</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Important hidden files like .gitignore, .dockerignore, and similar
              configuration files are preserved in the output.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Use Cases & Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Code className="mr-2 h-5 w-5 text-purple-500" />
                  Documentation
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Perfect for README files and project documentation</li>
                  <li>Shows project structure at a glance</li>
                  <li>Helps new contributors understand codebase layout</li>
                  <li>Professional presentation for portfolios</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Terminal className="mr-2 h-5 w-5 text-orange-500" />
                  Development Workflow
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Quick project structure overview</li>
                  <li>Easy integration into build processes</li>
                  <li>Lightweight tool with minimal dependencies</li>
                  <li>Cross-platform compatibility</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Example Output</h2>
            <p className="mb-4">
              Here&apos;s what the tool generates when run on its own source
              code:
            </p>
            <div className="bg-muted/40 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <TreePine className="h-5 w-5" />
                <span className="text-sm font-medium">Generated Tree</span>
              </div>
              <div className="font-mono text-sm">
                <div className="text-cyan-600">```</div>
                <div>project-tree-md</div>
                <div>├── cmd/</div>
                <div>│&nbsp;&nbsp;&nbsp;└── main.go</div>
                <div>├── internal/</div>
                <div>│&nbsp;&nbsp;&nbsp;├── cli/</div>
                <div>│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;└── cli.go</div>
                <div>│&nbsp;&nbsp;&nbsp;└── tree/</div>
                <div>
                  │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── printer.go
                </div>
                <div>├── .gitignore</div>
                <div>├── go.mod</div>
                <div>├── LICENSE</div>
                <div>├── Makefile</div>
                <div>└── README.md</div>
                <div className="text-cyan-600">```</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
