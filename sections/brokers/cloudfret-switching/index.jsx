import { Fade } from "react-awesome-reveal"
import Heading from "@/components/heading"
import parse from "html-react-parser"
import { useTranslations } from "next-intl"
import "./style.css"
import Switchers from "../switchers"
import Button from "@/components/button"
import clsx from "clsx"

function CloudfretSwiching() {
  const t = useTranslations("Brokers")
  const checklist = t.raw("checklist")

  return (
    <section id="cloudfret-switching">
      <div className="container">
        <Fade direction="up" triggerOnce cascade>
          <p className="subtitle">
            {t("Connectez-vous instantanément à un réseau de transporteurs")}
          </p>
          <Heading highlightColor="color1">Passez facilement d'un compte chargeur à transporteur</Heading>
        </Fade>

        <img className="two-arrows" src="/images/brokers/two-arrows.svg" alt="Two arrows" />

        <div className="row">
          {
            checklist.map((item, index) => (
              <div key={index} className="col-sm-6">
                <Switchers right={index % 2 == 0} />
                <div className={clsx("checklist", item.color)}>
                  <div className="image-container">
                    <h3 className="title">{item.title}</h3>
                    <img src={item.image} alt={item.title} />
                  </div>
                  <ul className="items">
                    {
                      item.items.map((item, index) => (
                        <li key={index}>{parse(item)}</li>
                      ))
                    }
                  </ul>
                  <Button full color={item.color}>{item.buttonText}</Button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default CloudfretSwiching