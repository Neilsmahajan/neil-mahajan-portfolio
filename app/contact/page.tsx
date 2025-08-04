import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Neil Mahajan",
  description:
    "Get in touch with Neil Mahajan for collaboration, job opportunities, or questions.",
};

export default function ContactPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Contact Me</h1>
      <p className="text-muted-foreground max-w-[800px] mb-8">
        I&apos;m always open to new opportunities, collaborations, or just a
        friendly chat. Feel free to reach out through any of the channels below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-lg border p-6">
          <h2 className="text-lg font-semibold mb-2">Email</h2>
          <p className="text-muted-foreground mb-2">Reach out via email</p>
          <Link
            href="mailto:neilsmahajan@gmail.com"
            className="text-primary hover:underline"
          >
            neilsmahajan@gmail.com
          </Link>
        </div>

        <div className="rounded-lg border p-6">
          <h2 className="text-lg font-semibold mb-2">Phone</h2>
          <p className="text-muted-foreground mb-2">Call or text</p>
          <Link
            href="tel:+16232354581"
            className="text-primary hover:underline"
          >
            (623) 235-4581
          </Link>
        </div>

        <div className="rounded-lg border p-6">
          <h2 className="text-lg font-semibold mb-2">LinkedIn</h2>
          <p className="text-muted-foreground mb-2">Connect professionally</p>
          <Link
            href="https://linkedin.com/in/neil-mahajan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            linkedin.com/in/neil-mahajan
          </Link>
        </div>

        <div className="rounded-lg border p-6">
          <h2 className="text-lg font-semibold mb-2">X (Twitter)</h2>
          <p className="text-muted-foreground mb-2">Follow me on X</p>
          <Link
            href="https://x.com/neilsmahajan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            x.com/neilsmahajan
          </Link>
        </div>

        <div className="rounded-lg border p-6">
          <h2 className="text-lg font-semibold mb-2">GitHub</h2>
          <p className="text-muted-foreground mb-2">Check out my code</p>
          <Link
            href="https://github.com/neilsmahajan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            github.com/neilsmahajan
          </Link>
        </div>
      </div>
    </div>
  );
}
