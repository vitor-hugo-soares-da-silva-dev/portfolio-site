import type { Segment } from '../../data/site'

type SegmentsProps = {
  segments: Segment[]
  className?: string
}

export default function Segments({ segments, className = '' }: SegmentsProps) {
  return (
    <p className={`text-[0.85rem] leading-relaxed text-ctp-subtext0 ${className}`}>
      {segments.map((segment, index) =>
        segment.href ? (
          <a
            className="text-ctp-pink underline decoration-dotted underline-offset-2 transition-colors hover:text-ctp-mauve"
            href={segment.href}
            key={`${segment.text}-${index}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            {segment.text}
          </a>
        ) : (
          <span key={`${segment.text}-${index}`}>{segment.text}</span>
        ),
      )}
    </p>
  )
}
