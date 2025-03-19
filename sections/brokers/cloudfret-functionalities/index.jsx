import { Fade } from "react-awesome-reveal"
import Heading from "@/components/heading"
import parse from "html-react-parser"
import { useTranslations } from "next-intl"
import "./style.css"
import Switchers from "../switchers"
import Button from "@/components/button"
import clsx from "clsx"
import { Fragment } from "react"

function CloudfretFunctionalities() {
  const t = useTranslations("Brokers")
  const functionalities = t.raw("functionalities-list")

  return (
    <section id="cloudfret-brokers-functionalities">
      <div className="container">
        <Fade direction="up" triggerOnce>
          <Heading highlightColor="color1">Des fonctionnalités pensées pour vos besoins</Heading>
        </Fade>

        {
          functionalities.map((functionality, index) => (
            <div key={index} className={clsx("functionality", { horizontal: functionality.horizontal })}>
              <div className="title-container">
                <img src={functionality.icon} alt={functionality.title} />
                <div>
                  <Fade direction="up" triggerOnce cascade>
                    <h2 className="title">{functionality.title}</h2>
                    {
                      functionality.subtitle && (
                        <p className="subtitle">{functionality.subtitle}</p>
                      )
                    }
                  </Fade>
                </div>
              </div>

              <img className="two-arrows" src="/images/brokers/two-arrows.svg" alt="Two arrows" />

              <div className="row">
                <div className="col-md-6 order-md-1 order-1">
                  <Switchers right />
                </div>
                <div className="col-md-6 order-md-2 order-3 mt-5 mt-md-0">
                  <Switchers />
                </div>
                {
                  !functionality.horizontal && functionality.items.map((item, index) => (
                    <div key={index} className={`col-md-6 order-md-3 order-${index + 2} d-flex flex-column`}>
                      <div className={clsx("items", item.color)}>
                        <h4 className="title">{item.title}</h4>
                        {
                          item.items.map((item, index) => (
                            <Fragment key={index}>
                              <div className="item">
                                <p className="item-title">{item.text}</p>
                                <img className="item-image" src={item.image} alt={item.text} />
                              </div>
                              <img className="arrow-separator" src="/images/brokers/arrow-3.svg" alt="Arrow" />
                            </Fragment>
                          ))
                        }

                        <Button full color={item.color}>{item.buttonText}</Button>
                      </div>
                    </div>
                  ))
                }

                {
                  functionality.horizontal && functionality.items.map((item, index) => (
                    <div key={index} className={`col-md-4 order-md-3 order-${item.image ? 'last' : index + 2}`}>
                      <div className={clsx("horizontal-item", { text: item.text, image: item.image })}>
                        {
                          item.text && (
                            <p className="text">{parse(item.text)}</p>
                          )
                        }
                        {
                          item.image && (
                            <img src={item.image} alt={item.text} />
                          )
                        }
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default CloudfretFunctionalities