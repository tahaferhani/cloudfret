import React from "react"
import Button from "@/components/button";
import Heading from "@/components/heading";
import { useTranslations } from "next-intl"
import data from "./data"
import "./style.css"
import { Fade } from "react-awesome-reveal";

const SmartNetwork = () => {
  const t = useTranslations("Home");

  return (
    <section id="cloudfret-network">
      <div className="container text-center">
        <Fade direction="up" triggerOnce cascade>
          <Heading center highlightColor="color1">Votre réseau intelligent de fret #1 au Maroc</Heading>
          <p className="subtitle">{t("Simplifiez votre logistique")}</p>
          <Button color="gradient">{t("Rejoignez un réseau qui connecte des milliers de professionnels du transport")}</Button>
        </Fade>
      </div>

      <div className="services">
        <div className="container">
          <div className="row g-0">
            {
              data.map((service, index) => (
                <div key={index} className="col-6">
                  <div className={`service ${service.color}`}>
                    <h3 className="service-title">{t(service.title)}</h3>
                    <img className="service-image" src={service.image} alt={t(service.title)} />
                    <h4 className="options-title">{t.rich(service.optionsTitle, { mark: text => <mark>{text}</mark> })}</h4>
                    {
                      service.options.map((option, index) => (
                        <div key={index} className="option">
                          <div className="option-icon">
                            <img src={option.icon} alt={t(option.text)} />
                          </div>
                          <p>{t(option.text)}</p>
                        </div>
                      ))
                    }
                  </div>
                  <Button href={service.buttonLink} color={service.color} full>{t(service.buttonText)}</Button>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default SmartNetwork