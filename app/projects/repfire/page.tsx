import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Github, Apple, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Repfire - Workout Tracker | Neil Mahajan",
  description:
    "A modern, cross-platform workout tracking mobile app built with React Native and Expo. Track your workouts, monitor your progress, and stay motivated on your fitness journey.",
};

export default function RepfirePage() {
  const technologies = [
    "React Native 0.79.5",
    "Expo 53",
    "TypeScript",
    "Expo Router",
    "AsyncStorage",
    "React Navigation",
    "Lucide React Native",
    "React Native Reanimated",
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
                Jul 2025 - Aug 2025
              </Badge>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              🔥 Repfire
            </h1>
            <p className="text-muted-foreground max-w-[800px] mb-6">
              A modern, cross-platform workout tracking mobile app built with
              React Native and Expo. Track your workouts, monitor your progress,
              and stay motivated on your fitness journey.
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
                  href="https://apps.apple.com/us/app/repfire/id6749026161"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Apple className="mr-2 h-4 w-4" />
                  App Store
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link
                  href="https://github.com/Neilsmahajan/workout-tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/Repfire iOS Phone Image 01.png"
              alt="Repfire App - Home Screen"
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
              Repfire is a modern, cross-platform workout tracking mobile app
              designed to help fitness enthusiasts track their workouts, monitor
              progress, and stay motivated on their fitness journey. Built with
              React Native and Expo, the app provides a seamless experience
              across both iOS and Android devices.
            </p>
            <p className="mb-4">
              The app features an offline-first approach with all data stored
              locally on the user&apos;s device, ensuring privacy and
              accessibility even without an internet connection. With its clean,
              intuitive interface and smooth animations, Repfire makes workout
              tracking simple and enjoyable.
            </p>
            <p>
              Currently available on the iOS App Store, with Android version
              coming soon. The app has been designed with modern UI principles
              and focuses on providing an excellent user experience for fitness
              tracking.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Create Custom Workouts:</strong> Design personalized
                workout routines with multiple exercises tailored to your
                fitness goals.
              </li>
              <li>
                <strong>Track Sets & Reps:</strong> Record weight, reps, and
                sets for each exercise with an intuitive input interface.
              </li>
              <li>
                <strong>Workout History:</strong> View your complete workout
                history with detailed statistics and progress tracking.
              </li>
              <li>
                <strong>Progress Monitoring:</strong> Track your fitness journey
                over time with visual progress indicators and analytics.
              </li>
              <li>
                <strong>Cross-Platform:</strong> Works seamlessly on both iOS
                and Android devices with native performance.
              </li>
              <li>
                <strong>Offline-First:</strong> All data is stored locally on
                your device, ensuring privacy and accessibility without internet
                connection.
              </li>
              <li>
                <strong>Modern UI:</strong> Clean, intuitive interface with
                smooth animations and responsive design.
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
              Repfire is built using React Native 0.79.5 with Expo 53, providing
              a modern development experience and native performance. The app
              uses TypeScript for type safety and Expo Router for file-based
              navigation, making the codebase maintainable and scalable.
            </p>
            <p className="mb-4">
              The data architecture uses AsyncStorage for local data
              persistence, ensuring that all workout data is stored securely on
              the user&apos;s device. The app features a simple yet efficient
              data model with Workouts, Exercises, and Sets, making it easy to
              track complex workout routines.
            </p>
            <p className="mb-4">
              The user interface is built with React Native StyleSheet and
              Lucide React Native icons, providing a clean and modern look. The
              app includes smooth animations using React Native Reanimated and
              gesture handling for an enhanced user experience.
            </p>
            <p>
              Future roadmap includes exercise templates, workout analytics,
              progress photos, social sharing features, backup and sync
              functionality, rest timer, and exercise instructions with
              animations.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Data Model</h2>
            <p className="mb-4">
              The app uses a simple and efficient data structure designed for
              optimal performance and ease of use:
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <pre className="text-sm">
                <code>{`interface Workout {
  id: string;
  name: string;
  date?: string;
  exercises: Exercise[];
}

interface Exercise {
  id: string;
  name: string;
  date?: string;
  sets: WorkoutSet[];
}

interface WorkoutSet {
  id: string;
  weight: number;
  reps: number;
}`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">App Store Availability</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center p-6 border rounded-lg">
                <Apple className="h-12 w-12 mr-4 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">iOS App Store</h3>
                  <p className="text-muted-foreground">
                    Available now for iPhone and iPad
                  </p>
                  <Button asChild className="mt-2">
                    <Link
                      href="https://apps.apple.com/us/app/repfire/id6749026161"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download on App Store
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center p-6 border rounded-lg opacity-50">
                <Smartphone className="h-12 w-12 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold">Google Play Store</h3>
                  <p className="text-muted-foreground">
                    Android version coming soon
                  </p>
                  <Button disabled className="mt-2">
                    Coming Soon
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">App Screenshots</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/Repfire iOS Phone Image 01.png"
                  alt="Repfire App - Home Screen"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/Repfire iOS Phone Image 02.png"
                  alt="Repfire App - Workout Creation"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/Repfire iOS Phone Image 03.png"
                  alt="Repfire App - Exercise Tracking"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/Repfire iOS Phone Image 04.png"
                  alt="Repfire App - Workout History"
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
