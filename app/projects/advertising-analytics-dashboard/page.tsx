import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

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
        <div>
          <h1 className="text-3xl font-bold mb-4">
            Advertising Analytics Dashboard
          </h1>
          <p className="text-muted-foreground max-w-[800px] mb-6">
            A unified web platform designed to resolve the fragmentation of
            digital advertising analytics across major platforms such as Google,
            Meta, and Microsoft.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mb-8">
            <Link
              href="https://advertisinganalyticsdashboard.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </Link>
            <Link
              href="https://github.com/Neilsmahajan/advertisinganalyticsdashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
          </div>
        </div>

        <div className="rounded-lg border p-6 mb-8">
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
            generation, and dynamic localization in English and Canadian French.
            Usability testing with 14 participants demonstrated the
            dashboard&apos;s intuitiveness, accuracy, and value for marketing
            professionals.
          </p>
        </div>

        <div className="rounded-lg border p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Tracking Data Service:</strong> Detect embedded analytics
              and advertising tags from any URL.
            </li>
            <li>
              <strong>Centralized advertising data:</strong> Aggregate campaign
              metrics from Google Analytics, Google Ads, Meta Ads, and Microsoft
              Ads.
            </li>
            <li>
              <strong>Secure OAuth login:</strong> Support Google, Meta, and
              Microsoft OAuth for seamless account connections.
            </li>
            <li>
              <strong>Query management:</strong> Allow users to save, view, and
              rerun analysis queries.
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
        </div>
      </div>
    </div>
  );
}
