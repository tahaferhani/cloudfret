import { useTranslations } from "next-intl"
import Heading from "@/components/heading"
import { Fade } from "react-awesome-reveal"
import "./style.css"

function CloudfretAssistance() {
  const t = useTranslations("Insurance")
  const assistance = t.raw("assistance-list")

  return (
    <section id="cloudfret-assistance">
      <div className="container">
        <Fade direction="up" triggerOnce cascade>
          <Heading highlightColor="color1">Services d'assistance complète</Heading>
          <p className="subtitle">{t("En cas de panne ou d'accident de votre véhicule")}</p>
        </Fade>

        <div className="items">
          <div className="row gx-xl-5">
            {
              assistance.map((item, index) => (
                <div key={index} className="col-md-4">
                  <div className="assistance">
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
      </div>
    </section>
  )
}

export default CloudfretAssistance