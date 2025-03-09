import Heading from "@/components/heading"
import { useTranslations } from "next-intl";
import { Fade } from "react-awesome-reveal";
import "./style.css";

const CloudfretAdvantages = () => {
  const t = useTranslations("Senders");
  const advantages = t.raw("advantages-list")

  return (
    <section id="cloudfret-advantages">
      <div className="container text-center">
        <Fade direction="up" triggerOnce cascade>
          <Heading center highlightColor="color1">+4000 Transporteurs de Confiance à Votre Service!</Heading>
          <p className="subtitle">{t("Accédez instantanément à un réseau de transporteurs soigneusement sélectionnés")}</p>
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