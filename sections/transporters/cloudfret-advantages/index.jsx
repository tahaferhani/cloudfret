import Heading from "@/components/heading"
import { useTranslations } from "next-intl";
import { Fade } from "react-awesome-reveal";
import "./style.css";

const CloudfretAdvantages = () => {
  const t = useTranslations("Transporters");
  const advantages = t.raw("advantages-list")

  return (
    <section id="cloudfret-advantages">
      <div className="container text-center">
        <Fade direction="up" triggerOnce cascade>
          <Heading center highlightColor="color1">La Bourse de Fret Idéale pour les Transporteurs</Heading>
          <p className="subtitle">{t("Transporteurs, faites le choix intelligent avec Cloudfret")}</p>
        </Fade>

        <div className="row justify-content-center">
          {
            advantages.map((advantage, index) => (
              <div key={index} className="col-md-6 col-lg-auto">
                <div className="advantage">
                  <img src={advantage.icon} alt={advantage.text} />
                  <p>{advantage.text}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default CloudfretAdvantages