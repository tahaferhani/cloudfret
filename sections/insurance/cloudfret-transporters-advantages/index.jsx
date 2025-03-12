import { useTranslations } from "next-intl"
import Heading from "@/components/heading"
import { Fade } from "react-awesome-reveal"
import "./style.css"
import Button from "@/components/button"

function CloudfretTransportersAdvantages() {
  const t = useTranslations("Insurance")
  const advantages = t.raw("transporters-advantages-list")

  return (
    <section id="cloudfret-transporters-advantages">
      <div className="container">
        <Fade direction="up" triggerOnce cascade>
          <Heading highlightColor="color1">Avantages exclusifs pour les transporteurs</Heading>
          <p className="subtitle">{t("Et ce n’est pas tout ! Nous allons encore plus loin pour votre tranquillité d'esprit")}</p>
        </Fade>

        <div className="items">
          <div className="row gx-5">
            {
              advantages.map((item, index) => (
                item.image ?
                <div key={index} className="col-4">
                  <img className="image-only" src={item.image} alt="Transporters" />
                </div>
                :
                <div key={index} className="col-4">
                  <div className="advantage">
                    <div className="image">
                      <img src={item.icon} alt={item.text} />
                    </div>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        <Button center>Intéressé ? contactez-nous dès maintenant</Button>
      </div>
    </section>
  )
}

export default CloudfretTransportersAdvantages