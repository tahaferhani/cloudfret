import { Fade } from "react-awesome-reveal"
import Heading from "@/components/heading"
import parse from "html-react-parser"
import { useTranslations } from "next-intl"
import "./style.css"
import Button from "@/components/button"

function CloudfretSteps() {
  const t = useTranslations("Fuel")
  const steps = t.raw("steps-list")

  return (
    <section id="cloudfret-steps">
      <div className="container">
        <Fade direction="up" triggerOnce>
          <Heading highlightColor="color2">Comment ça marche?</Heading>
        </Fade>

        <div className="steps">
          {
            steps.map((step, index) => (
              <div key={index} className="step">
                <div className="row">
                  <div className="col-md-6">
                    <div className="content">
                      <h3 className="title">{step.title}</h3>
                      <p>{parse(step.description)}</p>
                      {
                        step.buttonText && (
                          <Button>{step.buttonText}</Button>
                        )
                      }
                    </div>
                  </div>
                  <div className="col-md-6 mt-5 mt-md-0">
                    <div className="image">
                      <img src={step.image} alt={step.title} />
                    </div>
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

export default CloudfretSteps