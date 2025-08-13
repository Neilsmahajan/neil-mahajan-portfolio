import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Neil Mahajan",
  description:
    "Learn about Neil Mahajan's education, skills, work experience, and awards.",
};

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
        <div className="flex-shrink-0">
          <div className="relative w-48 h-48 md:w-56 md:h-56">
            <Image
              src="/profile-square-image.jpeg"
              alt="Neil Mahajan"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="flex-grow">
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I&apos;m a <b>Software Engineer 2</b> at <b>NetApp</b>&apos;s RTP
            campus in Durham, NC, working on the <b>BlueXP</b> team to deliver
            scalable, cloud-integrated solutions for unified data and storage
            management. I’m a graduate of{" "}
            <b>Arizona State University (Barrett, The Honors College)</b>, where
            I earned my BS in <b>Computer Science</b> in just three years (Magna
            Cum Laude).
            <br />
            <br />
            My background spans full-stack development, AI integration, cloud
            architecture, and automation, with professional experience at{" "}
            <b>Arizona Public Service</b> designing enterprise applications and
            streamlining operations through custom automation scripts.
          </p>
        </div>
      </div>

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
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Languages</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Python",
              "Java",
              "JavaScript",
              "C",
              "C++",
              "C#",
              "SQL",
              "HTML/CSS",
              "Go",
              "PHP",
              "Node.js",
              "TypeScript",
              "React",
              "Next.js",
              "ExpressJS",
              "React Native",
              "Expo",
              "Tailwind CSS",
              "Flask",
              "Django",
              "R",
              "MATLAB",
              "XML",
              "Bash",
              "Batch",
              "PowerShell",
            ].map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Git/GitHub",
              "AWS",
              "Azure Cloud",
              "GCP",
              ".NET/WSDL",
              "Vercel",
              "Docker",
              "ArcGIS",
              "Unity",
              "Linux/Unix",
              "Visual Studio",
              "Visual Studio Code",
              "IntelliJ IDEA",
              "Neovim",
              "Postman",
              "Figma",
              "Jupyter Notebook",
              "Power BI/Apps/Automate",
              "WordPress",
              "Firebase",
              "Office Suite",
            ].map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
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

        <div className="rounded-lg border p-6 mb-4">
          <h3 className="text-xl font-semibold">IT/Database Intern</h3>
          <p className="text-lg">Arizona Public Service</p>
          <p className="text-muted-foreground mb-2">May 2023 to May 2025</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Improved the safety of 600+ line workers by collaborating with the
              Design and Spatial Management team to optimize ArcGIS processes,
              adding four new attributes to a table with 1.6M entries and 55
              fields via 10 Python, SQL, and Batch Scripts.
            </li>
            <li>
              Automated user management for 500+ employees between the Active
              Directory and the ArcGIS Enterprise Portals, saving costs,
              enhancing security, and eliminating repetitive manual tasks by
              writing and deploying 6 Python, PowerShell, and Batch scripts.
            </li>
            <li>
              Reduced server management time by automating password changes for
              70+ SDE files per server using Python and PowerShell scripts.
            </li>
            <li>
              Delivered a critical AT Switch flag field to fulfill a request
              from Customer Care and Billing in under a week by updating the MWT
              table creation process in SQL.
            </li>
            <li>
              Dramatically reduced upload size of thousands of documents by
              implementing the Azure AI Custom Vision prediction resource in a
              Python script that differentiates drawing and non-drawing PDF
              files.
            </li>
          </ul>
        </div>

        <div className="rounded-lg border p-6 mb-4">
          <h3 className="text-xl font-semibold">Coding Instructor</h3>
          <p className="text-lg">Code Ninjas</p>
          <p className="text-muted-foreground mb-2">
            March 2022 to September 2022
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Coached and engaged with over 70 students, fostering their
              programming skills through game development by instructing
              students in Scratch, JavaScript, and C# within the Unity Game
              Engine.
            </li>
          </ul>
        </div>
      </section>

      {/* Awards Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Awards</h2>
        <div className="rounded-lg border p-6">
          <ul className="list-disc pl-5">
            <li>ASU Dean&apos;s List (x5)</li>
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
