"use client"

import { useMemo } from "react"

export function Snowflakes() {
  const flakes = useMemo(
    () =>
      Array.from({ length: 110 }, (_, index) => {
        const size = 4 + Math.random() * 8
        const duration = 20 + Math.random() * 10
        const delay = -Math.random() * duration

        return {
          id: index,
          left: Math.random() * 100,
          delay,
          duration,
          size,
          opacity: 0.18 + Math.random() * 0.25,
        }
      }),
    [],
  )

  return (
    <div className="snowflakes-container">
      {flakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: `${flake.left}%`,
            animationDelay: `${flake.delay}s`,
            animationDuration: `${flake.duration}s`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
          }}
        />
      ))}
    </div>
  )
}
