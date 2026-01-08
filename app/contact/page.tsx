"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ fullName: "", contactNumber: "", email: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20 pb-8">
        <div className="container mx-auto px-6 h-[calc(100vh-6rem)]">
          <div className="max-w-6xl mx-auto h-full flex flex-col">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-light text-foreground mb-4 tracking-wide">GET IN TOUCH</h1>
              <div className="w-16 h-px bg-foreground mx-auto mb-4"></div>
              <p className="text-lg text-muted-foreground">
                Have a project in mind or want to discuss quality assurance? I'd love to hear from you.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 flex-1">
              {/* Contact Form */}
              <Card className="bg-card border-border h-fit">
                <CardHeader className="pb-4">
                  <CardTitle className="text-foreground text-xl font-light">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName" className="text-card-foreground text-sm">
                          Full Name
                        </Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          className="bg-input border-border focus:border-accent h-9"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contactNumber" className="text-card-foreground text-sm">
                          Contact Number
                        </Label>
                        <Input
                          id="contactNumber"
                          name="contactNumber"
                          type="tel"
                          value={formData.contactNumber}
                          onChange={handleChange}
                          required
                          className="bg-input border-border focus:border-accent h-9"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-card-foreground text-sm">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-input border-border focus:border-accent h-9"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-card-foreground text-sm">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="bg-input border-border focus:border-accent resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-foreground hover:bg-foreground/90 text-background h-10"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>

                    {submitStatus === "success" && (
                      <div className="text-center text-foreground font-medium text-sm">
                        Message sent successfully! I'll get back to you soon.
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="text-center text-destructive font-medium text-sm">
                        Failed to send message. Please try again.
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-6">
                <Card className="bg-card border-border hover:border-foreground transition-colors group">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-foreground text-lg font-light">Professional Info</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <h3 className="font-medium text-card-foreground mb-1 text-sm">Current Position</h3>
                      <p className="text-muted-foreground text-sm">QA Engineer at Skybase Innovations</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-card-foreground mb-1 text-sm">Location</h3>
                      <p className="text-muted-foreground text-sm">Pokhara, Nepal</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-card-foreground mb-1 text-sm">Specialization</h3>
                      <p className="text-muted-foreground text-sm">
                        Manual & Automated Testing, Security Testing, API Testing
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border hover:border-foreground transition-colors group">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-foreground text-lg font-light">Let's Connect</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-3 text-sm">
                      I'm always interested in discussing new opportunities, collaborating on projects, or sharing
                      knowledge about quality assurance and testing methodologies.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-3 text-sm">
                      Whether you need help with manual testing, test automation, security assessments, or API testing,
                      feel free to reach out. I'm committed to delivering high-quality results.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Alternatively, you may contact me via email at{" "}
<<<<<<< HEAD
                      <u className="text-white">info@brihaspatithapamagar.com.np</u>.
=======
                      <u className="text-black dark:text-white">info@brihaspatithapamagar.com.np</u>.
>>>>>>> 1029063 (theme info)
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
