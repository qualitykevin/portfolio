import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ExpertiseModal } from "@/components/expertise-modal"
import Link from "next/link"

const expertiseItems = [
  {
    skill: "Manual QA",
    desc: "Test Design & Execution",
    details: `Comprehensive manual testing approach focusing on user experience and edge cases. I design detailed test cases covering functional, usability, and compatibility testing across different browsers and devices.

Key areas include:
• Test case design and execution
• Exploratory testing techniques
• User acceptance testing (UAT)
• Cross-browser compatibility testing
• Mobile responsiveness testing
• Regression testing strategies

I ensure thorough documentation of test results and maintain clear communication with development teams for efficient bug resolution.`,
  },
  {
    skill: "Playwright",
    desc: "TypeScript Automation",
    details: `Advanced test automation using Playwright with TypeScript for reliable end-to-end testing. I build robust automation frameworks that integrate seamlessly with CI/CD pipelines.

Technical expertise includes:
• Page Object Model implementation
• API testing and mocking
• Visual regression testing
• Parallel test execution
• Custom test fixtures and utilities
• Integration with GitHub Actions
• Headless and headed browser testing

My automation suites provide fast feedback loops and maintain high test reliability across different environments.`,
  },
  {
    skill: "OWASP ZAP",
    desc: "Security Testing",
    details: `Comprehensive security testing using OWASP ZAP to identify vulnerabilities and ensure application security. I conduct thorough security assessments following industry best practices.

Security testing areas:
• Automated vulnerability scanning
• Manual penetration testing
• SQL injection testing
• Cross-site scripting (XSS) detection
• Authentication and authorization testing
• Session management validation
• Security headers verification

I provide detailed security reports with risk assessments and remediation recommendations to strengthen application security posture.`,
  },
  {
    skill: "API Testing",
    desc: "Postman Scripting",
    details: `Expert API testing using Postman with advanced scripting capabilities for comprehensive backend validation. I create automated test suites that ensure API reliability and performance.

API testing capabilities:
• RESTful API testing and validation
• GraphQL query testing
• Authentication flow testing (OAuth, JWT)
• Data-driven testing with CSV/JSON
• Environment and variable management
• Pre-request and test scripts
• Integration with Newman for CI/CD
• Performance and load testing

My API test suites provide thorough coverage of all endpoints with detailed assertions and error handling.`,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center min-h-[85vh]">
            {/* Left Content */}
            <div className="lg:col-span-1 space-y-8 text-left">
              <div className="space-y-3">
                <h2 className="text-xl font-light text-foreground">Quality Assurance</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ensuring software excellence through meticulous testing methodologies.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl font-light text-foreground">Manual Testing</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Comprehensive test case design with attention to user experience.
                </p>
              </div>
            </div>

            {/* Center - Large Image */}
            <div className="lg:col-span-3 flex flex-col items-center space-y-8">
              <div className="relative">
                <div className="w-72 h-96 lg:w-150 lg:h-[700px] ">
                  <img
                    src="/profile.png"
                    alt="Brihaspati Thapa Magar (Kevin)"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>

              <div className="text-center space-y-4">
                <h1 className="text-4xl lg:text-6xl font-light text-foreground tracking-wide">BRIHASPATI THAPA MAGAR</h1>
                <p className="text-lg text-muted-foreground font-light tracking-widest">(KEVIN)</p>
                <div className="w-20 h-px bg-foreground mx-auto"></div>
                <p className="text-sm text-muted-foreground tracking-wider">QA ENGINEER</p>
              </div>

              <div className="flex gap-4 mt-8">
                <Button
                  asChild
                  variant="outline"
                  className="border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent"
                >
                  <Link href="/contact">CONTACT</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent"
                >
                  <Link href="/experience">EXPERIENCE</Link>
                </Button>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-1 space-y-8 text-left">
              <div className="space-y-3">
                <h2 className="text-xl font-light text-foreground">Automation</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Building robust test automation suites using Playwright and TypeScript.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl font-light text-foreground">Security Testing</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Implementing security assessments with OWASP ZAP to identify vulnerabilities.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-16 border-t border-border">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-foreground mb-4 tracking-wide">EXPERTISE</h2>
            <div className="w-16 h-px bg-foreground mx-auto"></div>
          </div>

          <ExpertiseModal items={expertiseItems} />
        </div>
      </main>
    </div>
  )
}
