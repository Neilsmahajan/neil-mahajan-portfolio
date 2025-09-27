import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Github,
  ExternalLink,
  Music,
  Download,
  Upload,
  Zap,
  Shield,
  Terminal,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Spotify to YouTube Music Migration | Neil Mahajan",
  description:
    "A two-part tool that exports liked songs from Spotify using Go and automatically likes them on YouTube Music using Python, providing a free alternative to paid migration services.",
};

export default function SpotifyToYouTubeMusicPage() {
  const technologies = [
    "Go 1.22+",
    "Python 3.10+",
    "Spotify API",
    "YouTube Music API",
    "JSON",
    "OAuth 2.0",
    "ytmusicapi",
    "HTTP Clients",
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
                September 2025
              </Badge>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              🎵 Spotify to YouTube Music
            </h1>
            <p className="text-muted-foreground max-w-[800px] mb-6">
              A two-part tool that exports liked songs from Spotify using Go and
              automatically likes them on YouTube Music using Python, providing
              a free alternative to paid migration services.
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
                  href="https://github.com/neilsmahajan/spotify-to-ytmusic"
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
              <span className="text-sm font-medium">Migration Process</span>
            </div>
            <div className="font-mono text-sm space-y-2">
              <div className="text-muted-foreground">
                # Step 1: Export from Spotify
              </div>
              <div className="text-green-600">$ cd spotify && go run .</div>
              <div className="text-cyan-600">
                ✅ Exported 3,254 liked songs to JSON
              </div>
              <br />
              <div className="text-muted-foreground">
                # Step 2: Import to YouTube Music
              </div>
              <div className="text-green-600">
                $ cd ../youtube && python main.py
              </div>
              <div className="text-cyan-600">
                [1] Liked: DUMBO by Travis Scott
                <br />
                [2] Liked: LOCO by Yeat
                <br />
                [3] Liked: Sicko Mode by Travis Scott
                <br />
                ...
                <br />
                ✅ Successfully migrated 3,182 songs
                <br />
                ⚠️ 72 songs saved to unmatched.json
              </div>
            </div>
          </div>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="mb-4">
              Spotify to YouTube Music is a free, open-source migration tool
              that I created during my personal transition from Spotify Premium
              to YouTube Music Premium. Frustrated by the limitations and costs
              of existing migration services, I built this two-part solution to
              automatically transfer all liked songs between platforms.
            </p>
            <p className="mb-4">
              The tool consists of a Go program that fetches all liked songs
              from Spotify using the official API, and a Python script that uses
              the ytmusicapi library to search for and like matching songs on
              YouTube Music. This approach ensures reliability and transparency
              while providing full control over the migration process.
            </p>
            <p>
              The project demonstrates practical API integration, cross-language
              programming, and solving real-world problems with custom tooling.
              It successfully migrated over 3,000 songs from my personal library
              with high accuracy and detailed logging.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Download className="mr-2 h-5 w-5 text-blue-500" />
                  Spotify Export (Go)
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Fetches all liked songs using official Spotify API</li>
                  <li>Handles OAuth 2.0 authentication automatically</li>
                  <li>
                    Paginates through large libraries (50 songs per request)
                  </li>
                  <li>Exports structured JSON with complete metadata</li>
                  <li>
                    Supports libraries of any size (tested with 3,254+ songs)
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Upload className="mr-2 h-5 w-5 text-green-500" />
                  YouTube Music Import (Python)
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Searches and likes songs on YouTube Music</li>
                  <li>Uses browser session authentication</li>
                  <li>Implements rate limiting to avoid API blocks</li>
                  <li>Logs unmatched songs for manual review</li>
                  <li>Progress tracking with detailed console output</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Architecture & Design</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Zap className="mr-2 h-5 w-5 text-yellow-500" />
                  Two-Part Architecture
                </h3>
                <p className="mb-4">
                  The project is split into two independent programs that
                  communicate through a JSON file. This design choice provides
                  flexibility, reliability, and the ability to use the best
                  language for each task - Go for efficient API calls and Python
                  for YouTube Music integration.
                </p>
                <div className="bg-muted/40 rounded-lg p-4">
                  <pre className="text-sm">
                    {`spotify-to-ytmusic/
├── spotify/              # Go program
│   ├── main.go          # Spotify API integration
│   ├── go.mod           # Dependencies
│   └── .env             # API credentials
├── youtube/             # Python script  
│   ├── main.py          # YouTube Music integration
│   ├── requirements.txt # Python dependencies
│   └── headers_auth.json # Browser session data
└── spotify_liked.json   # Shared data format`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Shield className="mr-2 h-5 w-5 text-red-500" />
                  Security & Privacy
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    All sensitive files (.env, headers_auth.json) are gitignored
                  </li>
                  <li>Uses official APIs where available (Spotify)</li>
                  <li>Browser session authentication for YouTube Music</li>
                  <li>
                    No data sent to external services - purely local operation
                  </li>
                  <li>Complete transparency with open-source code</li>
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
                  Spotify Integration (Go)
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  The Go program handles OAuth 2.0 authentication with Spotify
                  and efficiently fetches large music libraries through
                  paginated API calls.
                </p>
                <div className="bg-muted/40 rounded-lg p-4">
                  <pre className="text-sm">
                    {`// Key features implemented:
• OAuth 2.0 flow with PKCE
• Paginated API requests (limit 50 per call)
• JSON marshaling with proper struct tags  
• Error handling and rate limiting
• Environment variable configuration`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  YouTube Music Integration (Python)
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  The Python script uses ytmusicapi to search for songs and like
                  them, with sophisticated matching algorithms and error
                  handling.
                </p>
                <div className="bg-muted/40 rounded-lg p-4">
                  <pre className="text-sm">
                    {`# Key features implemented:
• Browser session authentication
• Fuzzy song matching algorithms
• Rate limiting (0.3s between requests)
• Progress tracking and logging
• Unmatched song collection for review`}
                  </pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Setup & Configuration</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Spotify API Setup
                </h3>
                <div className="space-y-2 text-sm">
                  <p>
                    1. Create a Spotify Developer app at developer.spotify.com
                  </p>
                  <p>
                    2. Add redirect URI:{" "}
                    <code className="bg-muted px-2 py-1 rounded">
                      http://127.0.0.1:3000/callback
                    </code>
                  </p>
                  <p>
                    3. Copy credentials to{" "}
                    <code className="bg-muted px-2 py-1 rounded">
                      spotify/.env
                    </code>
                  </p>
                </div>
                <div className="bg-muted/40 rounded-lg p-4 mt-3">
                  <pre className="text-sm">
                    {`SPOTIFY_ID=your_spotify_client_id
SPOTIFY_SECRET=your_spotify_client_secret`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">
                  YouTube Music Authentication
                </h3>
                <div className="space-y-2 text-sm">
                  <p>1. Open YouTube Music in Chrome while logged in</p>
                  <p>2. Open DevTools → Network tab, refresh page</p>
                  <p>3. Filter by "player" and copy request headers</p>
                  <p>
                    4. Save headers to{" "}
                    <code className="bg-muted px-2 py-1 rounded">
                      youtube/headers_auth.json
                    </code>
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Usage Examples</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Step 1: Export from Spotify
                </h3>
                <div className="bg-muted/40 rounded-lg p-4">
                  <pre className="text-sm">
                    {`cd spotify
go run .

# Output:
# Opens Spotify login in browser
# Fetches all liked songs with pagination
# Saves to spotify_liked.json (e.g., 3,254 tracks)`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Step 2: Import to YouTube Music
                </h3>
                <div className="bg-muted/40 rounded-lg p-4">
                  <pre className="text-sm">
                    {`cd youtube
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python main.py

# Output:
# [1] Liked: DUMBO by Travis Scott
# [2] Liked: LOCO by Yeat
# [3] Liked: Sicko Mode by Travis Scott
# ...
# ✅ Successfully migrated 3,182/3,254 songs
# ⚠️  72 unmatched songs saved to unmatched.json`}
                  </pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Performance & Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-muted/40 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary">3,254</div>
                <div className="text-sm text-muted-foreground">
                  Songs Exported
                </div>
              </div>
              <div className="bg-muted/40 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-600">3,182</div>
                <div className="text-sm text-muted-foreground">
                  Successfully Migrated
                </div>
              </div>
              <div className="bg-muted/40 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-yellow-600">97.8%</div>
                <div className="text-sm text-muted-foreground">
                  Success Rate
                </div>
              </div>
              <div className="bg-muted/40 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">~45min</div>
                <div className="text-sm text-muted-foreground">
                  Total Migration Time
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Migration tested on a personal library of 3,254 liked songs with
              excellent success rate and detailed logging of any unmatched
              tracks.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Learning Outcomes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Technical Skills</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>OAuth 2.0 implementation in Go</li>
                  <li>REST API integration and pagination</li>
                  <li>Cross-language data sharing via JSON</li>
                  <li>Python web scraping and API usage</li>
                  <li>Rate limiting and error handling</li>
                  <li>Environment configuration and security</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Project Management
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Solving personal problems with custom tools</li>
                  <li>Choosing appropriate languages for each task</li>
                  <li>Documentation and user experience design</li>
                  <li>Security-conscious development practices</li>
                  <li>Open-source project structure and licensing</li>
                  <li>Real-world testing with large datasets</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Project Impact</h2>
            <p className="mb-4">
              This project solved a real personal need during my transition from
              Spotify to YouTube Music Premium. By building a custom solution, I
              avoided paying for migration services while gaining full control
              over the process and learning valuable API integration skills.
            </p>
            <p className="mb-4">
              The open-source nature of the project means others facing the same
              transition can benefit from this free alternative to paid
              services. The comprehensive documentation and error handling make
              it accessible to users with varying technical backgrounds.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" asChild>
                <Link
                  href="https://github.com/neilsmahajan/spotify-to-ytmusic"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="ml-2 h-4 w-4" />
                  View Source Code
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
