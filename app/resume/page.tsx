import { Navigation } from "@/components/navigation"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <h1 className="text-4xl font-light text-foreground tracking-wide">
                Resume
              </h1>
              <p className="text-muted-foreground text-sm">
                View my latest resume as a PDF.
              </p>
            </div>

            <div className="border border-border bg-card">
              <iframe
                src="/BrihaspatiThapaMagarCV.pdf#view=FitH"
                className="w-full h-[75vh]"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
