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
                    <p className="text-muted-foreground">January 18, 2006</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-card-foreground mb-2">Education</h3>
                    <p className="text-muted-foreground">
                      Bachelor of Information Technology (Hons)
                      <br />
                      London Metropolitan University, Informatics College Pokhara
                      <br />
                      Graduated: December 2025
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-card-foreground mb-2">Current Role</h3>
                    <p className="text-muted-foreground">QA Engineer at Skybase Innovations, Pokhara</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-card-foreground mb-2">Hobbies</h3>
                    <p className="text-muted-foreground">
                      Playing ukulele, digital illustration and animation, riding motorbikes, travelling, photography,
                      videography, and creative editing. These hobbies strengthen my creativity, attention to detail, and
                      ability to connect with different people.
                    </p>
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
                    <p className="text-muted-foreground">
                      Manual QA for web, mobile, and desktop applications, including functional, non-functional,
                      regression, smoke, sanity, and end-to-end testing.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-card-foreground mb-2">Automation</h3>
                    <p className="text-muted-foreground">
                      Test automation for web and mobile using Playwright (TypeScript), Selenium, Cypress, and Appium.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-card-foreground mb-2">Security</h3>
                    <p className="text-muted-foreground">
                      OWASP ZAP–based security testing with vulnerability scanning and basic penetration testing for web
                      applications.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-card-foreground mb-2">API Testing</h3>
                    <p className="text-muted-foreground">
                      REST API testing with Postman and custom scripting, including performance and load test scenarios.
                    </p>
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
                  I specialize in comprehensive quality assurance across web, mobile, and desktop applications,
                  encompassing manual test case design and execution, automated testing using Playwright with TypeScript,
                  and mobile automation with Appium. My expertise includes API testing with advanced Postman scripting,
                  security testing using OWASP ZAP, and performance, load, and stress testing to ensure system stability
                  and scalability. I apply functional, non-functional, regression, and end-to-end testing practices to deliver
                  high-quality, reliable software throughout the development lifecycle.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
