import Button from "@/components/button"
import Heading from "@/components/heading"
import clsx from "clsx"
import { useTranslations } from "next-intl"
import data from "./data"
import "./style.css"
import { Fade } from "react-awesome-reveal"

function CloudfretMobile() {
  const t = useTranslations("Home")

  return (
    <section id="cloudfret-home-mobile">
      <div className="container">
        <div className="durable-solutions">
          <Fade direction="up" triggerOnce>
            <Heading color="dark" highlightColor="white" center={false} secondaryFont>Cloudfret vous offre des solutions durables</Heading>
          </Fade>
          <div className="row">
            <div className="col-8">
              <Fade direction="up" triggerOnce cascade>
                <p>{t("Notre mission :")}</p>
                <Button full>{t("Passez au mode durable dès aujourd'hui")}</Button>
              </Fade>
            </div>
            <div className="col-4">
              <img className="image" src="/images/home/durable-solutions.png" alt="Illustration" />
            </div>
          </div>
        </div>

        <div className="mobile-app">
          <Fade delay={1000} direction="up" triggerOnce cascade>
            <Heading color="dark" highlightColor="color1" center={false} noShape secondaryFont>L'Application Mobile Cloudfret</Heading>
            <p className="subtitle">{t("Met en relation les expéditeurs et les transporteurs")}</p>
          </Fade>

          {
            data.map((item, index) => (
              <div key={index} className="mobile-app-item">
                <div className="row gx-5">
                  <div className={clsx("col-4", { "order-2": index % 2 === 0 })}>
                    <img className="phone-image" src={item.image} alt="Illustration" />
                  </div>
                  <div className="col-8">
                    <Heading color="dark" highlightColor={item.color} shapeLeft center={false} secondaryFont small>{item.title}</Heading>
                    {
                      item.subtitle &&
                      <p className="subtitle">
                        {t.rich(item.subtitle, { mark: text => <mark>{text}</mark> })}
                      </p>
                    }
                    {
                      item.options.map((option, index) => (
                        <div key={index} className="option">
                          <img src={option.icon} alt={option.text} />
                          <p>{t.rich(option.text, { b: text => <b>{text}</b> })}</p>
                        </div>
                      ))
                    }
                    <Button color={item.buttonColor}>{t("Découvrez comment ça fonctionne")}</Button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default CloudfretMobile