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
      title: "Advertising Analytics Dashboard",
      description:
        "A unified web platform designed to resolve the fragmentation of digital advertising analytics across major platforms such as Google, Meta, and Microsoft.",
      tags: ["Next.js", "TypeScript", "OAuth", "API Integration", "PostgreSQL"],
      link: "/projects/advertising-analytics-dashboard",
    },
    {
      title: "Custom AI Chatbot Avatar WordPress Plugin",
      description:
        "A service that quickly creates customized conversational AI chatbots for clients, including personalized knowledge bases, predefined questions, and multilingual support.",
      tags: ["PHP", "Docker", "OpenAI API", "Google Cloud", "WordPress"],
      link: "/projects/custom-ai-chatbot",
    },
    {
      title: "Multiplatform Video Upload",
      description:
        "A Next.js 15 UI for OAuth-based one-click uploads of short-form videos to YouTube Shorts, Instagram Reels, and TikTok.",
      tags: ["Next.js", "React", "OAuth", "API Integration"],
      link: "/projects/multiplatform-video-upload",
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
              <h3 className="text-lg font-semibold">{project.title}</h3>
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
