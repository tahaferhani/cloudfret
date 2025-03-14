import React from "react"
import Button from "@/components/button";
import Heading from "@/components/heading";
import { useTranslations } from "next-intl"
import { Fade } from "react-awesome-reveal";
import parse from "html-react-parser";
import "./style.css"

const SmartNetwork = () => {
  const t = useTranslations("Home");
  const services = t.raw("services-list");

  return (
    <section id="cloudfret-network">
      <div className="container text-center">
        <Fade direction="up" triggerOnce cascade>
          <Heading center highlightColor="color1">Votre réseau intelligent de fret #1 au Maroc</Heading>
          <p className="subtitle">{t("Simplifiez votre logistique")}</p>
          <Button center color="gradient">{t("Rejoignez un réseau qui connecte des milliers de professionnels du transport")}</Button>
        </Fade>
      </div>

      <div className="services">
        <div className="container">
          <div className="row gx-xl-5">
            {
              services.map((service, index) => (
                <div key={index} className="col-lg-4">
                  <div className={`service ${service.color}`}>
                    <h3 className="service-title">{service.title}</h3>
                    <img className="service-image" src={service.image} alt={service.title} />
                    <Fade direction="up" triggerOnce cascade>
                      <h4 className="options-title">{parse(service.optionsTitle)}</h4>
                      {
                        service.options.map((option, index) => (
                          <div key={index} className="option">
                            <div className="option-icon">
                              <img src={option.icon} alt={option.text} />
                            </div>
                            <p>{option.text}</p>
                          </div>
                        ))
                      }
                    </Fade>
                  </div>
                  <Button href={service.buttonLink} color={service.color} full>{service.buttonText}</Button>
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