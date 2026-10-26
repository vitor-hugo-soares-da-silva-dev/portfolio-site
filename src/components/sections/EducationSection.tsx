import Segments from '../ui/Segments'
import Quote from '../Quote'
import { education, quotes } from '../../data/site'

export default function EducationSection() {
  return (
    <div className="flex flex-col gap-5">
      {education.map((entry) => (
        <article
          className="rounded-xl border border-ctp-surface0 bg-ctp-mantle p-4 transition-colors duration-200 hover:border-ctp-pink sm:p-5"
          key={entry.id}
        >
          <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-base font-bold text-ctp-pink">{entry.title}</h3>
            <span className="text-[0.75rem] text-ctp-overlay0">{entry.period}</span>
          </div>

          <Segments segments={entry.description} />

          <div className="mt-3 flex flex-wrap gap-1.5">
            {entry.tags.map((tag) => (
              <span
                className="rounded border border-[rgb(245_194_231/0.15)] bg-ctp-surface0 px-2 py-0.5 text-[0.7rem] text-ctp-pink"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        </article>
      ))}

      <Quote quote={quotes.educacao} />
    </div>
  )
}
