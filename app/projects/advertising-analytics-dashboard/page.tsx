import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ViewFullSizeButton } from "@/components/view-full-size-button";

export const metadata: Metadata = {
  title: "Advertising Analytics Dashboard | Neil Mahajan",
  description:
    "A unified web platform designed to resolve the fragmentation of digital advertising analytics across major platforms such as Google, Meta, and Microsoft.",
};

export default function AdvertisingAnalyticsDashboardPage() {
  const technologies = [
    "Next.js 15",
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Neon",
    "Prisma ORM",
    "Auth.js",
    "OAuth",
    "Vercel",
    "Cloudflare",
    "next-intl",
  ];

  return (
    <div className="container py-12">
      <div className="flex flex-col gap-6">
        {/* Hero section with responsive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Project info */}
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Advertising Analytics Dashboard
            </h1>
            <p className="text-muted-foreground max-w-[800px] mb-6">
              A unified web platform designed to resolve the fragmentation of
              digital advertising analytics across major platforms such as
              Google, Meta, and Microsoft.
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
                  href="https://advertisinganalyticsdashboard.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="ml-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link
                  href="https://github.com/Neilsmahajan/advertisinganalyticsdashboard"
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
              src="/Advertising Analytics Dashboard Home Page Screenshot.png"
              alt="Advertising Analytics Dashboard Home Page"
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
              The Advertising Analytics Dashboard is a unified web platform
              designed to resolve the fragmentation of digital advertising
              analytics across major platforms such as Google, Meta, and
              Microsoft. Developed as an Honors Thesis project for Vloe, a
              Quebec-based advertising agency, the dashboard enables businesses
              and agencies to retrieve, analyze, and report on advertising and
              tracking data from multiple accounts and platforms in a single,
              user-friendly interface.
            </p>
            <p>
              Key features include detection of embedded tracking tags,
              OAuth-based account connections, query saving, PDF report
              generation, and dynamic localization in English and Canadian
              French. Usability testing with 14 participants demonstrated the
              dashboard&apos;s intuitiveness, accuracy, and value for marketing
              professionals.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Tracking Data Service:</strong> Detect embedded
                analytics and advertising tags from any URL.
              </li>
              <li>
                <strong>Centralized advertising data:</strong> Aggregate
                campaign metrics from Google Analytics, Google Ads, Meta Ads,
                and Microsoft Ads.
              </li>
              <li>
                <strong>Secure OAuth login:</strong> Support Google, Meta, and
                Microsoft OAuth for seamless account connections.
              </li>
              <li>
                <strong>Query management:</strong> Allow users to save, view,
                and rerun analysis queries.
              </li>
              <li>
                <strong>PDF report generation:</strong> Enable export of results
                as localized, formatted PDF reports.
              </li>
              <li>
                <strong>Bilingual localization:</strong> Support English and
                Canadian French.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">System Architecture</h2>
            <div className="lg:flex lg:gap-8 items-start">
              <div className="relative w-full lg:w-1/2 mx-auto mb-6 lg:mb-0">
                <div className="relative h-[600px] md:h-[700px] lg:h-[650px] rounded-lg overflow-hidden">
                  <Image
                    src="/Advertisng Analytics Dashboard System Architecture.png"
                    alt="Advertising Analytics Dashboard System Architecture"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="mt-2 text-center text-sm text-muted-foreground">
                  <ViewFullSizeButton imagePath="/Advertisng Analytics Dashboard System Architecture.png" />
                </div>
              </div>

              <div className="lg:w-1/2">
                <p className="mb-4">
                  The Advertising Analytics Dashboard utilizes a modern tech
                  stack with Next.js 15 for the frontend and backend,
                  integrating with OAuth providers for secure authentication and
                  API access. The platform connects to multiple advertising
                  service APIs including Google Analytics, Google Ads, Meta Ads,
                  and Microsoft Ads.
                </p>
                <p className="mb-4">
                  The application employs PostgreSQL via Neon for database
                  storage, Prisma ORM for database management, and next-intl for
                  localization in English and Canadian French. The system is
                  deployed on Vercel with Cloudflare for CDN and security
                  services.
                </p>
                <h3 className="text-xl font-medium mt-6 mb-3">
                  Architecture Highlights
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Frontend & Backend:</strong> Next.js 15 App Router
                    for server components and API routes
                  </li>
                  <li>
                    <strong>Authentication:</strong> Auth.js with OAuth
                    providers for Google, Meta, and Microsoft
                  </li>
                  <li>
                    <strong>Database:</strong> PostgreSQL hosted on Neon with
                    Prisma ORM
                  </li>
                  <li>
                    <strong>API Integration:</strong> Connection to multiple
                    advertising APIs for analytics data
                  </li>
                  <li>
                    <strong>Localization:</strong> Bilingual support with
                    next-intl for English and Canadian French
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Service Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative w-full h-[350px] rounded-lg overflow-hidden">
                <Image
                  src="/Advertising Analytics Dashboard Google Analytics Service Page Screenshot.png"
                  alt="Advertising Analytics Dashboard Google Analytics Service Page"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-full h-[350px] rounded-lg overflow-hidden">
                <Image
                  src="/Advertising Analytics Dashboard Google Ads Service Page Screenshot.png"
                  alt="Advertising Analytics Dashboard Google Ads Service Page"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-full h-[350px] rounded-lg overflow-hidden">
                <Image
                  src="/Advertising Analytics Dashboard Meta Ads Service Page Screenshot.png"
                  alt="Advertising Analytics Dashboard Meta Ads Service Page"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-full h-[350px] rounded-lg overflow-hidden">
                <Image
                  src="/Advertising Analytics Dashboard Microsoft Ads Service Page Screenshot.png"
                  alt="Advertising Analytics Dashboard Microsoft Ads Service Page"
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
