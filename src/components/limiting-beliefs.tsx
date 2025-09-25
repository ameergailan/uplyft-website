/**
 * Limiting beliefs that pop up as animated comments during scroll
 * Shows client objections with belief, flip, and proof
 */

'use client'

import { useState, useEffect } from 'react'

interface Belief {
  id: number
  title: string
  belief: string
  flip: string
  proof: string
}

const LimitingBeliefs = ({ scrollProgress }: { scrollProgress: number }) => {
  const [visibleBeliefs, setVisibleBeliefs] = useState<number[]>([])

  const beliefs: Belief[] = [
    {
      id: 1,
      title: "Full-stack agencies are generalists.",
      belief: "If you do everything, you're mediocre at each.",
      flip: "We unify the funnel so nothing leaks between marketing → SDR → closer → CRM.",
      proof: "One KPI chain with weekly reporting; role-specific specialists."
    },
    {
      id: 2,
      title: "Our offer is unique—you won't get our niche.",
      belief: "Agencies don't understand our buying cycle.",
      flip: "We map your buyer's journey into our pipeline template in week 1.",
      proof: "Mini case studies from adjacent niches; tailored creative samples."
    },
    {
      id: 3,
      title: "Quality over quantity—we're tired of junk leads.",
      belief: "Lead gen = volume, low intent.",
      flip: "We optimize down-funnel metrics, not just CPL.",
      proof: "MQL→SQL→Show→Close funnel with qualification filters."
    },
    {
      id: 4,
      title: "Agencies overpromise, then disappear.",
      belief: "We've been burned before.",
      flip: "Short pilot, transparent numbers, and an exit ramp.",
      proof: "30-day pilot with milestone gates; weekly scorecard."
    },
    {
      id: 5,
      title: "Automation will break our current ops.",
      belief: "CRMs and bots will create chaos.",
      flip: "We deploy sandbox-first with rollback options.",
      proof: "Staging environment; change log; training videos."
    },
    {
      id: 6,
      title: "Sales is our brand voice—outsourcing risks reputation.",
      belief: "SDR tone could misrepresent us.",
      flip: "We co-create a voice kit and use call libraries.",
      proof: "Brand voice doc; recorded mock calls; approval gates."
    },
    {
      id: 7,
      title: "It's too expensive / uncertain ROI.",
      belief: "Cost > value.",
      flip: "We anchor to CAC/LTV and pay from incremental revenue.",
      proof: "ROI model; performance-based compensation options."
    },
    {
      id: 8,
      title: "We don't have bandwidth to manage another vendor.",
      belief: "More meetings, more tasks.",
      flip: "We act as your growth ops arm; one weekly call.",
      proof: "Shared dashboard; async update templates."
    }
  ]

  useEffect(() => {
    // Show all beliefs in sequence with staggered timing
    const timer = setTimeout(() => {
      const allBeliefs = beliefs.map((_, index) => index)
      setVisibleBeliefs(allBeliefs)
    }, 800) // Start showing beliefs after arrow begins

    return () => clearTimeout(timer)
  }, [beliefs.length])

  return (
    <div className="absolute inset-0 pointer-events-none z-25">
      {visibleBeliefs.map((index) => {
        const belief = beliefs[index]
        const position = index % 2 === 0 ? 'left' : 'right'
        const yOffset = 150 + (index * 45) // Evenly spaced along arrow
        
        return (
          <div
            key={`${belief.id}-${Math.floor(scrollProgress * 20)}`} // Key changes to force re-render
            className={`absolute ${position === 'left' ? 'left-8' : 'right-8'} max-w-xs bg-white p-4 rounded-lg shadow-lg border-2 border-gray-200 belief-card`}
            style={{ 
              top: `${yOffset}px`,
              zIndex: 25,
              opacity: 0,
              transform: `translateY(20px) scale(0.8)`,
              animation: `beliefAppear 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${1 + index * 0.15}s forwards`
            }}
          >
            <div className="text-sm font-semibold text-gray-800 mb-2">
              {belief.title}
            </div>
            <div className="text-xs text-gray-600 mb-2 italic">
              "{belief.belief}"
            </div>
            <div className="text-xs text-blue-600 font-medium mb-1">
              {belief.flip}
            </div>
            <div className="text-xs text-gray-500">
              {belief.proof}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default LimitingBeliefs
