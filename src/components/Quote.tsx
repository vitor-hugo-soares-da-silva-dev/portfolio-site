import type { Quote as QuoteType } from '../data/site'

type QuoteProps = {
  quote: QuoteType
}

export default function Quote({ quote }: QuoteProps) {
  return (
    <a
      className="group mt-6 block rounded-xl border border-ctp-surface0 bg-ctp-mantle p-3 transition-all duration-200 hover:-translate-y-1 hover:border-ctp-pink hover:glow-soft sm:p-4"
      href={quote.href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <blockquote className="text-[0.85rem] leading-relaxed text-ctp-text italic sm:text-[0.9rem]">
        &ldquo;{quote.text}&rdquo;
      </blockquote>
      <span className="mt-2 block text-[0.72rem] text-ctp-pink">&mdash; {quote.source}</span>
    </a>
  )
}
