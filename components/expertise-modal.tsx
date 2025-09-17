"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ExpertiseItem {
  skill: string
  desc: string
  details: string
}

interface ExpertiseModalProps {
  items: ExpertiseItem[]
}

export function ExpertiseModal({ items }: ExpertiseModalProps) {
  const [selectedItem, setSelectedItem] = useState<ExpertiseItem | null>(null)

  const openModal = (item: ExpertiseItem) => {
    setSelectedItem(item)
  }

  const closeModal = () => {
    setSelectedItem(null)
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {items.map((item) => (
          <div
            key={item.skill}
            className="text-center space-y-3 p-6 border border-transparent hover:border-foreground transition-all duration-300 group cursor-pointer"
            onClick={() => openModal(item)}
          >
            <h3 className="text-lg font-light text-foreground tracking-wide">{item.skill}</h3>
            <div className="w-8 h-px bg-muted-foreground mx-auto group-hover:bg-foreground transition-colors"></div>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background border border-border max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-light text-foreground tracking-wide mb-2">{selectedItem.skill}</h2>
                  <div className="w-16 h-px bg-foreground"></div>
                </div>
                <Button variant="ghost" size="icon" onClick={closeModal} className="h-8 w-8 hover:bg-accent">
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">{selectedItem.desc}</p>
                <div className="prose prose-invert max-w-none">
                  <p className="text-foreground leading-relaxed whitespace-pre-line">{selectedItem.details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
