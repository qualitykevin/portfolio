import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24">
        <div className="container mx-auto px-6 py-16 flex flex-col items-center justify-center text-center gap-8">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground tracking-[0.3em] uppercase">
              404 • Page Not Found
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-foreground max-w-2xl mx-auto">
              I&rsquo;m going back to 404, where the echoes haunt me more
            </h1>
          </div>
          <div>
            <Button asChild variant="default" className="px-8">
              <Link href="/">Go back to home</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
