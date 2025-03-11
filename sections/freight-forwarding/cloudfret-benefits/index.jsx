import { useTranslations } from "next-intl"
import "./style.css"
import Heading from "@/components/heading"
import Button from "@/components/button"
import { Fade } from "react-awesome-reveal"

function CloudfretBenefits() {
  const t = useTranslations("Freight-Forwarding")
  const benefits = t.raw("benefits-list")

  return (
    <section id="cloudfret-freight-benefits">
      <div className="container">
        <Fade direction="up" triggerOnce>
          <Heading highlightColor="color2" center={false}>Bénéfices Concrets</Heading>
        </Fade>

        <div className="items">
          {
            benefits.map((benefit, index) => (
              <div className="item" key={index}>
                  <img className="icon" src={benefit.icon} alt={benefit.text} />
                  <img className="check" src="/images/icons/check.svg" alt="Check" />
                <p className="text">{benefit.text}</p>
              </div>
            ))
          }
        </div>

        <Button>Faites le choix d’une gestion logistique fluide et optimisée  Maintenant</Button>
      </div>
    </section>
  )
}

export default CloudfretBenefits