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
                {/* Current Position */}
                <div className="relative flex items-start gap-8">
                  <div className="relative z-10 w-4 h-4 bg-accent rounded-full border-4 border-background"></div>
                  <Card className="flex-1 bg-card border-border hover:border-accent transition-colors group">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-accent group-hover:text-accent">QA Engineer (Full-time)</CardTitle>
                        <span className="text-sm text-muted-foreground bg-accent/10 px-3 py-1 rounded-full">
                          Current
                        </span>
                      </div>
                      <p className="text-card-foreground font-medium">Skybase Innovations</p>
                      <p className="text-muted-foreground">Pokhara, Newroad • 5 months (continuing)</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Transitioned from internship to full-time role, taking on increased responsibilities in quality
                        assurance and test automation. Leading testing initiatives and mentoring new team members.
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-medium text-card-foreground">Key Responsibilities:</h4>
                        <ul className="text-muted-foreground space-y-1 ml-4">
                          <li>• Designing and executing comprehensive test plans</li>
                          <li>• Developing automated test suites using Playwright</li>
                          <li>• Conducting security assessments with OWASP ZAP</li>
                          <li>• API testing and validation with Postman scripting</li>
                          <li>• Collaborating with development teams on quality improvements</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Internship */}
                <div className="relative flex items-start gap-8">
                  <div className="relative z-10 w-4 h-4 bg-muted-foreground rounded-full border-4 border-background"></div>
                  <Card className="flex-1 bg-card border-border hover:border-accent transition-colors group">
                    <CardHeader>
                      <CardTitle className="text-card-foreground group-hover:text-accent">
                        QA Engineer (Internship)
                      </CardTitle>
                      <p className="text-card-foreground font-medium">Skybase Innovations</p>
                      <p className="text-muted-foreground">Pokhara, Newroad • 6 months</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Started my professional journey as an intern, quickly learning industry best practices and
                        contributing to real-world projects. Gained hands-on experience with various testing
                        methodologies and tools.
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-medium text-card-foreground">Learning & Achievements:</h4>
                        <ul className="text-muted-foreground space-y-1 ml-4">
                          <li>• Mastered manual testing techniques and documentation</li>
                          <li>• Learned Playwright automation framework with TypeScript</li>
                          <li>• Gained proficiency in OWASP ZAP for security testing</li>
                          <li>• Developed skills in API testing with Postman</li>
                          <li>• Contributed to improving testing processes and workflows</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Skills Summary */}
            <div className="mt-20">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Technical Skills</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    category: "Manual Testing",
                    skills: ["Test Case Design", "Bug Reporting", "Test Execution", "Documentation"],
                  },
                  {
                    category: "Automation",
                    skills: ["Playwright", "TypeScript", "Test Scripts", "CI/CD Integration"],
                  },
                  {
                    category: "Security Testing",
                    skills: ["OWASP ZAP", "Vulnerability Assessment", "Security Scanning", "Penetration Testing"],
                  },
                  {
                    category: "API Testing",
                    skills: ["Postman", "REST APIs", "Custom Scripting", "Response Validation"],
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
