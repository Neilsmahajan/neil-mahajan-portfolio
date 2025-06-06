import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 py-12">
      {/* Hero Section */}
      <section className="w-full py-12 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <Image
                src="/profile-circle-image.png"
                alt="Neil Mahajan"
                fill
                className="object-cover rounded-full border-4 border-background shadow-lg"
                priority
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Neil Mahajan
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Software Engineer specializing in full-stack development, AI
                integration, and cloud solutions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link
                href="/projects"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
            About Me
          </h2>
          <p className="text-muted-foreground">
            I&apos;m a Computer Science graduate from Arizona State University
            (Barrett, The Honors College) with experience in full-stack
            development, AI integration, and cloud solutions. Currently working
            as an IT Solutions Engineer at Arizona Public Service.
          </p>
          <div>
            <Link href="/about" className="text-primary hover:underline">
              Learn more about me
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6">
                <h3 className="text-lg font-semibold">
                  Advertising Analytics Dashboard
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  A unified web platform to resolve fragmentation of digital
                  advertising analytics across major platforms like Google,
                  Meta, and Microsoft.
                </p>
                <Link
                  href="/projects/advertising-analytics-dashboard"
                  className="text-primary text-sm mt-4 inline-block hover:underline"
                >
                  View Project
                </Link>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6">
                <h3 className="text-lg font-semibold">
                  Custom AI Chatbot Avatar
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  A WordPress plugin creation service that generates customized
                  conversational AI chatbots with avatars for improved customer
                  engagement.
                </p>
                <Link
                  href="/projects/custom-ai-chatbot"
                  className="text-primary text-sm mt-4 inline-block hover:underline"
                >
                  View Project
                </Link>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6">
                <h3 className="text-lg font-semibold">
                  Multiplatform Video Upload
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  A Next.js 15 UI for OAuth-based one-click uploads of
                  short-form videos to YouTube Shorts, Instagram Reels, and
                  TikTok.
                </p>
                <Link
                  href="/projects/multiplatform-video-upload"
                  className="text-primary text-sm mt-4 inline-block hover:underline"
                >
                  View Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
