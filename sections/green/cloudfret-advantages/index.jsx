import Heading from "@/components/heading"
import "./style.css"
import { useTranslations } from "next-intl";
import Button from "@/components/button";
import { Fade } from "react-awesome-reveal";

const CloudfretAdvantages = () => {
  const t = useTranslations("Green");
  const items = t.raw("advantages-list")

  return (
    <section id="cloudfret-green-advantages">
      <div className="container">
        <Fade direction="up" triggerOnce>
          <Heading center={false} highlightColor="color2">Réduisez votre empreinte carbone et optimisez votre logistique avec Cloudfret Green</Heading>
        </Fade>

        <div className="items">
          <h3 className="items-title">
            {
              t.rich("La première solution de transport intra-zone 100% électrique Accessible à Tous", {
                mark: text => <mark>{text}</mark>
              })
            }
          </h3>
          {
            items.map((item, index) => (
              <div key={index} className="item">
                <div className="item-icon">
                  <img src={item.icon} alt={item.text} />
                </div>
                <p>{item.text}</p>
              </div>
            ))
          }
        </div>

        <Button color="color2">{t("Demandez votre devis gratuit")}</Button>
      </div>
    </section>
  )
}

export default CloudfretAdvantages