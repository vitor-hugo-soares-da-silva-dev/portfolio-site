import Icon from '../ui/Icon'
import Segments from '../ui/Segments'
import Quote from '../Quote'
import { pets, quotes } from '../../data/site'

export default function PetsSection() {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
        {pets.map((pet) => (
          <article
            className="flex flex-col gap-3 rounded-xl border border-ctp-surface0 bg-ctp-mantle p-3 transition-colors duration-200 hover:border-ctp-pink sm:p-4"
            key={pet.id}
          >
            <img
              alt={`Foto do ${pet.name}`}
              className="h-56 w-full rounded-lg border-2 border-ctp-surface1 bg-ctp-crust object-contain sm:h-72 lg:h-96"
              loading="lazy"
              src={pet.photo}
            />

            <h3 className="flex items-center gap-2 text-base font-bold text-ctp-pink">
              <Icon name="paw" size={16} />
              {pet.name}
            </h3>

            <Segments segments={pet.body} />
          </article>
        ))}
      </div>

      <Quote quote={quotes.pets} />
    </div>
  )
}
