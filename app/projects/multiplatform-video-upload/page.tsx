import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "Multiplatform Video Upload | Neil Mahajan",
  description:
    "A Next.js 15 UI for OAuth-based one-click uploads of short-form videos to YouTube Shorts, Instagram Reels, and TikTok.",
};

export default function MultiplatformVideoUploadPage() {
  const technologies = [
    "Next.js 15",
    "React",
    "TypeScript",
    "NextAuth.js",
    "OAuth",
    "Neon Database",
    "PostgreSQL",
    "Prisma ORM",
    "Vercel",
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
              Multiplatform Video Upload
            </h1>
            <p className="text-muted-foreground max-w-[800px] mb-6">
              A Next.js 15 UI for OAuth-based one-click uploads of short-form
              videos to YouTube Shorts, Instagram Reels, and TikTok.
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
                  href="https://multiplatformvideoupload.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="ml-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link
                  href="https://github.com/Neilsmahajan/multi-platform-video-upload"
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
              src="/Multiplatform Video Upload Dashboard Page Screenshot.png"
              alt="Multiplatform Video Upload Dashboard"
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
              The Multiplatform Video Upload application is a frontend UI for a
              multi-platform video upload service built using Next.js 15 with
              the App Router and shadcn/ui components. It allows users to
              connect their YouTube, Instagram/Meta, and TikTok accounts and
              upload a single short-form video along with additional details.
              The video can be published as YouTube Shorts, Instagram Reels, and
              TikTok videos.
            </p>
            <p>
              This personal project was created to simplify the process of
              uploading short-form videos to multiple platforms, saving time and
              ensuring consistent content across different social media
              channels.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Landing Page:</strong> A visually engaging homepage with
                a clear call-to-action.
              </li>
              <li>
                <strong>Authentication:</strong> Login and registration pages
                for user account management.
              </li>
              <li>
                <strong>Dashboard:</strong> View connected platform statuses,
                recent uploads, and quick statistics.
              </li>
              <li>
                <strong>Platform Connections:</strong> UI to connect to YouTube,
                Instagram/Meta, and TikTok.
              </li>
              <li>
                <strong>Video Upload:</strong> Upload a video file with preview
                and file details, general description field, and
                platform-specific settings via tabs (custom titles,
                descriptions, tags, etc.).
              </li>
              <li>
                <strong>Settings:</strong> Manage account information, platform
                connections, and notification preferences.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">
              Technical Implementation
            </h2>
            <p className="mb-4">
              The application is built using Next.js 15 with the App Router,
              providing a modern and responsive user interface. It uses
              NextAuth.js for authentication, Neon database (PostgreSQL) for
              data storage, and Prisma ORM for database management.
            </p>
            <p className="mb-4">
              The frontend is designed with shadcn/ui components, offering a
              clean and intuitive user experience. The application is deployed
              on Vercel, ensuring fast and reliable access.
            </p>
            <p>
              Future enhancements will include implementing the backend logic
              for authentication, file storage, and database management, as well
              as integrating with the YouTube Data API, TikTok Content Posting
              API, and Instagram API for posting content.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/Multiplatform Video Upload Home Page Screenshot.png"
                  alt="Multiplatform Video Upload Home Page"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/Multiplatform Video Upload Dashboard Page Screenshot.png"
                  alt="Multiplatform Video Upload Dashboard Page"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/Multiplatform Video Upload Upload Page Screenshot.png"
                  alt="Multiplatform Video Upload Upload Page"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/Multiplatform Video Upload Settings Page Screenshot.png"
                  alt="Multiplatform Video Upload Settings Page"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
