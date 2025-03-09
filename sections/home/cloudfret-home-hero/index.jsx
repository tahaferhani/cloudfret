import Heading from '@/components/heading'
import { Fade } from 'react-awesome-reveal'
import "./style.css"

function CloudfretHomeHero() {
  return (
    <section id="cloudfret-home-hero">
      <div className="container">
        <Fade direction="up" triggerOnce>
          <Heading color="light" highlightColor="color2" center>Le Futur du Transport Routier commence ici</Heading>
        </Fade>
      </div>
    </section>
  )
}

export default CloudfretHomeHero