import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="container flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Neil Mahajan. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://www.linkedin.com/in/neil-mahajan/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="https://x.com/neilsmahajan"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="X Profile"
          >
            <Twitter className="h-5 w-5" />
          </Link>
          <Link
            href="https://github.com/neilsmahajan"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
