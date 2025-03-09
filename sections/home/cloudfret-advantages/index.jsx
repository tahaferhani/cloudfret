import Heading from "@/components/heading"
import { useTranslations } from "next-intl";
import "./style.css";
import { Fade } from "react-awesome-reveal";

const CloudfretAdvantages = () => {
  const t = useTranslations("Home");
  const advantages = t.raw("advantages-list")

  return (
    <section id="cloudfret-home-advantages">
      <div className="container text-center">
        <Fade direction="up" triggerOnce cascade>
          <Heading center highlightColor="color1">CloudFret transforme l'industrie du transport</Heading>
          <h3 className="subtitle">{t("Grâce à une marketplace unique, flexible et à l'ère du digital")}</h3>
        </Fade>

        <div className="row">
          {
            advantages.map((advantage, index) => (
              <div key={index} className="col-md-6 col-lg-3">
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