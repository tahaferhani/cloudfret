import { Fade } from "react-awesome-reveal"
import Heading from "@/components/heading"
import parse from "html-react-parser"
import { useTranslations } from "next-intl"
import "./style.css"

function CloudfretOffers() {
  const t = useTranslations("Fuel")
  const offers = t.raw("offers-list")

  return (
    <section id="cloudfret-offers">
      <div className="container">
        <Fade direction="up" triggerOnce>
          <Heading highlightColor="color2">Pourquoi opter pour l'offre Carburant CloudFret?</Heading>
        </Fade>

        <div className="offers">
          {
            offers.map((offer, index) => (
              <div key={index} className="offer">
                <img className="icon" src={offer.icon} alt={offer.title} />
                <span className="line"></span>
                <div className="card">
                  <div className="text">
                    <h3 className="title">{offer.title}</h3>
                    <p className="description">{parse(offer.description)}</p>
                  </div>
                  <img src={offer.card} alt="Credit Card" />
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default CloudfretOffers