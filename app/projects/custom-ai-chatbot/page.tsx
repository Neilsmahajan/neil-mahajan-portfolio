import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom AI Chatbot Avatar WordPress Plugin | Neil Mahajan",
  description:
    "A service that quickly creates customized conversational AI chatbots for clients, including personalized knowledge bases, predefined questions, and multilingual support.",
};

export default function CustomAIChatbotPage() {
  const technologies = [
    "PHP",
    "WordPress",
    "Docker",
    "Google Cloud Run",
    "OpenAI API",
    "Google Cloud Text-to-Speech",
    "HTML/CSS",
    "JavaScript",
  ];

  const teamMembers = [
    { name: "Neil Mahajan", role: "Project Leader" },
    { name: "Pranav Vad", role: "Team Member" },
    { name: "Abbhijit Venkatachalam", role: "Team Member" },
    { name: "Sai Kolla", role: "Team Member" },
  ];

  return (
    <div className="container py-12">
      <div className="flex flex-col gap-6">
        {/* Hero section with responsive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Project info */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="text-xs">
                Capstone Project
              </Badge>
              <Badge variant="outline" className="text-xs flex items-center">
                <Users className="mr-1 h-3 w-3" /> Team Project
              </Badge>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Custom AI Chatbot Avatar WordPress Plugin
            </h1>
            <p className="text-muted-foreground max-w-[800px] mb-6">
              A service that quickly creates customized conversational AI
              chatbots for clients, including personalized knowledge bases,
              predefined questions, and multilingual support.
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
                  href="https://createcustomchatbotplugin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="ml-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link
                  href="https://github.com/Neilsmahajan/create-custom-chatbot-avatar-wordpress-plugin"
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
              src="/Create Custom Chatbot Plugin Male French Chatbot Screenshot.png"
              alt="Custom AI Chatbot Avatar WordPress Plugin - Male French Chatbot"
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
              The Custom AI Chatbot Avatar WordPress Plugin Creation Service is
              a web application that allows Vloe&apos;s clients to generate a
              customized WordPress AI chatbot avatar plugin for their websites.
              Each client can personalize the chatbot plugin by inputting their
              own Knowledge Base, Predefined Questions, Speaking and Idle Avatar
              Selection, and Language Preference.
            </p>
            <p>
              The web application then generates a <code>chatbot.zip</code> file
              tailored to the client&apos;s needs, which can be deployed
              directly into their WordPress site. This improves customer
              engagement and reduces support inquiries by providing
              personalized, predefined questions, a knowledge base, language
              preferences, and avatars to address common customer inquiries.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Knowledge Base Customization:</strong> Clients can input
                specific knowledge related to their business or company for
                chatbot responses.
              </li>
              <li>
                <strong>Predefined Questions:</strong> Allows input of
                frequently asked questions for quick and automated responses.
              </li>
              <li>
                <strong>Speaking and Idle Avatar Selection:</strong> Clients can
                choose from a set of predefined avatars or upload their own
                images for the chatbot&apos;s speaking and idle states.
              </li>
              <li>
                <strong>Language Preference:</strong> Supports English and
                Canadian French. The chatbot&apos;s prompts and text-to-speech
                features will adapt based on the specified language in the
                shortcode.
              </li>
              <li>
                <strong>Custom Plugin Generation:</strong> Automatically creates
                a customized <code>chatbot.zip</code> plugin for WordPress.
              </li>
              <li>
                <strong>Shortcode-Based Deployment:</strong> Clients can
                manually specify the language using a shortcode and add the
                chatbot to specific pages.
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
              The service is built with a PHP backend that handles data
              processing, avatar uploads, and dynamic plugin generation. The
              frontend uses HTML, CSS, and JavaScript for a simple and
              user-friendly interface.
            </p>
            <p className="mb-4">
              The generated WordPress plugin integrates the OpenAI ChatGPT API
              for conversational responses and Google Cloud Text-to-Speech for
              voice interaction. The service is deployed as a dockerized
              serverless container function on Google Cloud Run, providing
              scalable, high-availability access.
            </p>
            <p>
              The system architecture includes a web frontend for user input, a
              PHP backend for plugin generation, integration with Google Cloud
              and OpenAI APIs for TTS and translation, and a Dockerized
              deployment architecture.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">My Contributions</h2>
            <p className="mb-4">
              As the team leader and scrum master, I led the development of the
              core functionalities, including:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                The front end in basic HTML and vanilla Javascript, and the back
                end using PHP development for user-uploaded keys and avatars and
                the entire code implementation.
              </li>
              <li>
                Dockerization of the web service and deployment as a serverless
                container to Google Cloud Run so that the service is accessible
                to everyone over the web as a Cloud Run service.
              </li>
              <li>
                Canadian French and English instruction page creation to
                demonstrate the instructions on how to create the chatbot using
                the service and an example workflow with template questions and
                knowledge base text.
              </li>
              <li>
                Transcript email generation when the user gives consent via an
                implemented checkbox in the frontend and provides their email
                before speaking to the chatbot.
              </li>
              <li>
                Avatar UX/UI improvement and speaking/idle state logic for
                determining when to display the idle animated chatbot with
                blinking or speaking animated chatbot with a moving mouth.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Team Members</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="p-4 border rounded-lg text-center"
                >
                  <h3 className="font-medium">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/Create Custom Chatbot Plugin Home Page Screenshot.png"
                  alt="Create Custom Chatbot Plugin Home Page"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/Create Custom Chatbot Plugin Instructions Page Screenshot.png"
                  alt="Create Custom Chatbot Plugin Instructions Page"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/Create Custom Chatbot Plugin Female English Chatbot Screenshot.png"
                  alt="Create Custom Chatbot Plugin Female English Chatbot"
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
