import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-foreground mb-6">About Me</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Get to know more about my journey, background, and passion for quality assurance
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="bg-card border-border hover:border-accent transition-colors group">
                <CardHeader>
                  <CardTitle className="text-accent group-hover:text-accent">Personal Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium text-card-foreground mb-2">Born</h3>
                    <p className="text-muted-foreground">2006</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-card-foreground mb-2">Education</h3>
                    <p className="text-muted-foreground">
                      Bachelor in Informatics
                      <br />
                      College Pokhara (awaiting results)
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-card-foreground mb-2">Current Role</h3>
                    <p className="text-muted-foreground">QA Engineer at Skybase Innovations, Pokhara</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:border-accent transition-colors group">
                <CardHeader>
                  <CardTitle className="text-accent group-hover:text-accent">Skills & Expertise</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium text-card-foreground mb-2">Testing</h3>
                    <p className="text-muted-foreground">Manual QA, Test Case Design, Bug Reporting</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-card-foreground mb-2">Automation</h3>
                    <p className="text-muted-foreground">Playwright with TypeScript</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-card-foreground mb-2">Security</h3>
                    <p className="text-muted-foreground">OWASP ZAP Security Testing</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-card-foreground mb-2">API Testing</h3>
                    <p className="text-muted-foreground">Postman with Custom Scripting</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-card border-border hover:border-accent transition-colors">
              <CardHeader>
                <CardTitle className="text-accent">My Journey</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Born in 2006, I discovered my passion for technology and quality assurance early in my academic
                  journey. Currently pursuing my Bachelor's degree in Informatics at College Pokhara, I've been able to
                  combine theoretical knowledge with practical experience in the field.
                </p>
                <br />
                <p className="text-muted-foreground leading-relaxed text-lg">
                  My professional journey began with a 6-month internship at Skybase Innovations in Pokhara, where I
                  quickly developed expertise in manual testing, automation frameworks, and security testing. The
                  experience was so valuable that I transitioned into a full-time QA Engineer role, where I continue to
                  grow and contribute to ensuring software quality.
                </p>
                <br />
                <p className="text-muted-foreground leading-relaxed text-lg">
                  I specialize in comprehensive testing approaches, from manual test case design and execution to
                  automated testing using Playwright with TypeScript. My toolkit also includes security testing with
                  OWASP ZAP and API testing with advanced Postman scripting, allowing me to provide thorough quality
                  assurance across different aspects of software development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
