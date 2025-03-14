import { useTranslations } from "next-intl"
import "./style.css"
import Heading from "@/components/heading"
import parse from "html-react-parser"
import Button from "@/components/button"
import { Fade } from "react-awesome-reveal"

function CloudfretAdvantages() {
  const t = useTranslations("Insurance")
  const advantages = t.raw("advantages-list")

  return (
    <section id="cloudfret-insurance-advantages">
      <div className="container">
        <Fade direction="up" triggerOnce>
          <Heading highlightColor="color1">Trouvez l'assurance parfaitement adaptée à vos besoins</Heading>
        </Fade>

        <div className="items">
          <div className="row gx-xl-5">
            {
              advantages.map((advantage, index) => (
                <div key={index} className="col-md-4">
                  <div className="advantage">
                    <div className="advantage-top">
                      <div className="image">
                        <img src={advantage.icon} alt={advantage.text} />
                      </div>
                      <p>{advantage.text}</p>
                    </div>
                    <img className="arrow-separator" src="/images/icons/arrow-down.svg" alt="Arrow" />
                    <div className="advantage-bottom">
                      <p>{parse(advantage.description)}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        <Button center>{t("Économisez jusqu'a 40%")}</Button>
      </div>
    </section>
  )
}

export default CloudfretAdvantages