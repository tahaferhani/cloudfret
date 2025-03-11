import Heading from "@/components/heading"
import { useTranslations } from "next-intl"
import parse from "html-react-parser"
import "./style.css"
import Button from "@/components/button"
import { Fade } from "react-awesome-reveal"

function CloudfretBenefits() {
  const t = useTranslations("Green")
  const benefits = t.raw("benefits-list")

  return (
    <section id="cloudfret-green-benefits">
      <div className="container">
        <Fade direction="up" triggerOnce cascade>
          <Heading highlightColor="color2">Prêt à Passer au Vert ?</Heading>
          <h3 className="title">{t("Des Bénéfices Concrets et Mesurables")}</h3>
          <p className="text">{t("Cloudfret Green n'est pas seulement une solution de transport durable")}</p>
        </Fade>

        <div className="row gx-5">
          {
            benefits.map((benefit, index) => (
              <div key={index} className="col-4">
                <div className="benefit">
                  <img src={benefit.image} alt={benefit.text} />
                  <p>{parse(benefit.text)}</p>
                </div>
              </div>
            ))
          }
        </div>

        <Button color="color2">{t("Obtenez une estimation des économies de CO₂")}</Button>
      </div>
    </section>
  )
}

export default CloudfretBenefits