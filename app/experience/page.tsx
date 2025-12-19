import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-foreground mb-6">Experience</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                My professional journey in quality assurance and software testing
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30"></div>

              <div className="space-y-12">
                <div className="relative flex items-start gap-8">
                  <div className="relative z-10 w-4 h-4 bg-accent rounded-full border-4 border-background"></div>
                  <Card className="flex-1 bg-card border-border hover:border-accent transition-colors group">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-accent group-hover:text-accent">
                          QA Engineering
                        </CardTitle>
                        <span className="text-sm text-muted-foreground bg-accent/10 px-3 py-1 rounded-full">
                          Current
                        </span>
                      </div>
                      <p className="text-card-foreground font-medium">Skybase Innovations – Pokhara</p>
                      <p className="text-muted-foreground">November 2024 – Present</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Leading end-to-end quality assurance across web and mobile applications with a strong focus on
                        reliability, performance, and security.
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-medium text-card-foreground">Key Responsibilities:</h4>
                        <ul className="text-muted-foreground space-y-1 ml-4">
                          <li>
                            • Designing and executing structured manual test cases to validate core user journeys
                          </li>
                          <li>
                            • Automating regression and smoke suites using Playwright, Selenium, Appium, and Cypress
                            (TypeScript, JavaScript)
                          </li>
                          <li>
                            • Performing data scraping from ecommerce platforms to support test data generation and
                            analysis
                          </li>
                          <li>
                            • Conducting API testing to validate backend services, integrations, and error handling
                          </li>
                          <li>
                            • Collaborating closely with developers to identify, document, and resolve defects quickly
                          </li>
                          <li>
                            • Participating in test planning, test case design, and reporting to increase coverage and
                            transparency
                          </li>
                          <li>
                            • Using Android Studio and Appium to build and maintain mobile automation suites
                          </li>
                          <li>
                            • Continuously improving QA methodologies and automation frameworks through self-learning
                          </li>
                          <li>
                            • Performing security testing with OWASP ZAP to identify and mitigate application
                            vulnerabilities
                          </li>
                          <li>
                            • Supporting load and performance testing to ensure stability under high-traffic conditions
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative flex items-start gap-8">
                  <div className="relative z-10 w-4 h-4 bg-muted-foreground rounded-full border-4 border-background"></div>
                  <Card className="flex-1 bg-card border-border hover:border-accent transition-colors group">
                    <CardHeader>
                      <CardTitle className="text-card-foreground group-hover:text-accent">
                        IT Support Engineer
                      </CardTitle>
                      <p className="text-card-foreground font-medium">Nepal Telecom – Pokhara</p>
                      <p className="text-muted-foreground">September 2023 – December 2023 • 3 months</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Delivered frontline technical support and infrastructure maintenance, improving system
                        reliability and user productivity across the organization.
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-medium text-card-foreground">Key Achievements:</h4>
                        <ul className="text-muted-foreground space-y-1 ml-4">
                          <li>
                            • Reduced system downtime by 30% through proactive monitoring and maintenance procedures
                          </li>
                          <li>
                            • Supported over 200 users by resolving software, hardware, and network connectivity issues
                          </li>
                          <li>
                            • Collaborated with networking teams to develop and enforce policies, achieving full
                            compliance with internal security protocols
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
                Technical Skills
              </h2>
              <p className="text-muted-foreground text-sm text-center mb-8">
                A snapshot of the tools, frameworks, and practices I use to deliver high-quality software.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    category: "Manual Testing",
                    skills: [
                      "Test Case Design & Execution",
                      "Test Planning & Strategy",
                      "Bug Reporting & Tracking",
                      "Regression & Smoke Testing",
                      "Exploratory Testing",
                      "Usability & Accessibility Testing",
                      "End-to-End Functional Testing",
                    ],
                  },
                  {
                    category: "Automation Testing",
                    skills: [
                      "Playwright (TypeScript)",
                      "Selenium WebDriver (Java/TypeScript)",
                      "Cypress (JavaScript/TypeScript)",
                      "Appium (Android & iOS)",
                      "Continuous Integration (CI/CD) Automation",
                    ],
                  },
                  {
                    category: "Security & Performance Testing",
                    skills: [
                      "OWASP ZAP",
                      "Vulnerability Assessment & Security Scanning",
                      "Basic Penetration Testing",
                      "Load & Performance Testing (JMeter)",
                      "API Security Testing",
                    ],
                  },
                  {
                    category: "Platforms & Environments",
                    skills: [
                      "Web Applications (UI & API)",
                      "Mobile Applications (Android & iOS)",
                      "Desktop Applications (Windows, macOS, Linux)",
                      "Cross-Browser & Cross-Device Testing",
                      "Cloud-based & SaaS Applications",
                    ],
                  },
                  {
                    category: "API & Tools",
                    skills: [
                      "Postman (Custom Scripting & Automation)",
                      "REST API Testing",
                      "Git & GitHub (Version Control)",
                      "CI/CD Pipelines",
                      "Issue & Project Tracking",
                      "Test Management Tools",
                    ],
                  },
                  {
                    category: "Additional Skills",
                    skills: [
                      "Database Testing: SQL queries, data validation, DB migration testing",
                      "Behavior-Driven Development (BDD): Cucumber",
                      "Testing under 2G/3G/4G/5G network conditions",
                      "Soft Skills: Communication, collaboration, mentoring junior testers",
                    ],
                  },
                ].map((skillGroup) => (
                  <Card
                    key={skillGroup.category}
                    className="bg-card border-border hover:border-accent transition-colors group"
                  >
                    <CardHeader>
                      <CardTitle className="text-accent group-hover:text-accent text-lg">
                        {skillGroup.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {skillGroup.skills.map((skill) => (
                          <li key={skill} className="text-muted-foreground text-sm">
                            • {skill}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
