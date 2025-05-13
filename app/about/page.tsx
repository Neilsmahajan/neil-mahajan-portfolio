import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Neil Mahajan",
  description:
    "Learn about Neil Mahajan's education, skills, work experience, and awards.",
};

export default function AboutPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">About Me</h1>

      {/* Education Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Education</h2>
        <div className="rounded-lg border p-6 mb-4">
          <h3 className="text-xl font-semibold">
            Arizona State University (Barrett, The Honors College)
          </h3>
          <p className="text-muted-foreground mb-2">August 2022 to May 2025</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Bachelor of Science – BS, Computer Science</li>
            <li>GPA: 3.71, Major GPA: 3.73</li>
            <li>Graduated in 3 years Magna Cum Laude with Honors</li>
          </ul>
        </div>

        <div className="rounded-lg border p-6">
          <h3 className="text-xl font-semibold">Basis Scottsdale</h3>
          <p className="text-muted-foreground mb-2">August 2015 to May 2022</p>
          <ul className="list-disc pl-5">
            <li>Completed 17 AP Courses in 4 Years</li>
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Python",
            "Java",
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "SQL",
            "AWS",
            "Azure",
            "GCP",
          ].map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Work Experience</h2>

        <div className="rounded-lg border p-6 mb-4">
          <h3 className="text-xl font-semibold">
            IT Solutions Engineer / Analyst I
          </h3>
          <p className="text-lg">Arizona Public Service</p>
          <p className="text-muted-foreground mb-2">May 2025 to Present</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Collaborate with stakeholders to deliver and maintain IT solutions
              that support enterprise operations.
            </li>
            <li>
              Design, implement, and optimize technical solutions, leveraging
              scripting (Python, PowerShell, Batch) and automation to enhance
              system performance and reduce manual effort.
            </li>
          </ul>
        </div>
      </section>

      {/* Awards Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Awards</h2>
        <div className="rounded-lg border p-6">
          <ul className="list-disc pl-5">
            <li>ASU Dean&apos;s List (x6)</li>
            <li>National Merit Commended Scholar</li>
            <li>National Honors Society</li>
            <li>AP Scholar with Distinction Award (x2)</li>
            <li>AP Scholar with Honor Award</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
