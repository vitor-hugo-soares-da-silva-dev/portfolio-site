import Icon from '../ui/Icon'
import Quote from '../Quote'
import { contacts, quote } from '../../data/site'

export default function ContactSection() {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-[0.9rem] leading-relaxed text-ctp-text">
        Prefere falar direto? Me chama por qualquer um dos canais abaixo — respondo sempre que puder.
      </p>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {contacts.map((contact) => (
            <a
              className="flex items-center gap-3 rounded-xl border border-ctp-surface0 bg-ctp-mantle p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-ctp-pink sm:p-4"
              href={contact.href}
              key={contact.id}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-ctp-surface0 text-ctp-pink">
                <Icon name={contact.icon} size={16} />
              </span>

              <span className="flex min-w-0 flex-col">
                <span className="text-[0.72rem] uppercase tracking-wider text-ctp-overlay0">
                  {contact.label}
                </span>
                <span className="truncate text-[0.8rem] text-ctp-text sm:text-[0.85rem]">
                  {contact.value}
                </span>
              </span>

              <Icon className="ml-auto shrink-0 text-ctp-overlay0" name="arrowUpRight" size={14} />
            </a>
        ))}
      </div>

      <Quote quote={quote} />
    </div>
  )
}
