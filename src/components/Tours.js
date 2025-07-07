import SectionTitle from './SectionTitle'
import Tour from './TourCard.js'
import {tours} from '../data/tours'

const Tours = () => {
  return (
    <section className="section" id="tours">

      <SectionTitle main='featured' span='tours' />

      <div className="section-center featured-center">
        {
          tours.map(
            tour => <Tour {...tour}  key={tour.ID} />
          )
        }
      </div>

    </section>
  )
}

export default Tours
