import SectionTitle from './SectionTitle'
import Service from './Service'
import { services } from '../data/services'

const Services = () => {
  return (
    <section className="section services" id="services">
      <SectionTitle main='our' span='services' />

      <div className="section-center services-center">
        {
          services.map(
            service => <Service {...service} key={service.ID} />
          )
        }
      </div>
    </section>  
  )
}

export default Services
