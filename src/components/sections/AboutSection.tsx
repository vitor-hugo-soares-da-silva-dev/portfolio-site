import Icon from '../ui/Icon'
import Segments from '../ui/Segments'
import Quote from '../Quote'
import { aboutText, infoCards, quotes } from '../../data/site'

export default function AboutSection() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        {aboutText.map((segment, index) => (
          <p className="text-[0.9rem] leading-relaxed text-ctp-text" key={index}>
            {segment.text}
          </p>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {infoCards.map((card: any) => (
          <article
            className="flex flex-col gap-2 rounded-xl border border-ctp-surface0 bg-ctp-mantle p-4 transition-colors duration-200 hover:border-ctp-pink sm:p-5"
            key={card.id}
          >
            <h3 className="flex items-center gap-2 text-base font-bold text-ctp-pink">
              <Icon name={card.icon} size={16} />
              {card.title}
            </h3>

            <Segments segments={card.body} />
          </article>
        ))}
      </div>

      <Quote quote={quotes.sobre} />
    </div>
  )
}
