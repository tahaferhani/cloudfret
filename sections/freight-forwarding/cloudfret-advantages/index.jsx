import { useTranslations } from "next-intl"
import "./style.css"
import Heading from "@/components/heading"
import parse from "html-react-parser"
import Button from "@/components/button"
import { Fade } from "react-awesome-reveal"

function CloudfretAdvantages() {
  const t = useTranslations("Freight-Forwarding")
  const advantages = t.raw("advantages-list")

  return (
    <section id="cloudfret-freight-advantages">
      <div className="container">
        <Fade direction="up" triggerOnce cascade>
          <p className="text">
            {parse(t.raw("Cloudfret vous offre une gestion complète de vos expéditions internationales et nationales"))}
          </p>

          <Heading highlightColor="color2" center={false}>Notre Engagement : La Meilleure Solution de Freight Forwarding pour Vous</Heading>
        </Fade>

        <div className="items">
          <div className="row gx-5">
            {
              advantages.map((advantage, index) => (
                <div key={index} className="col-4">
                  <div className="advantage">
                    <div className="advantage-top">
                      <div className="image">
                        <img src={advantage.icon} alt={advantage.text} />
                      </div>
                      <p>{advantage.text}</p>
                    </div>
                    <img className="arrow-separator" src="/images/icons/arrow-down.svg" alt="Arrow" />
                    <div className="advantage-bottom">
                      {parse(advantage.description)}
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        <Button>Prêt à Optimiser vos Expéditions ?</Button>
      </div>
    </section>
  )
}

export default CloudfretAdvantages