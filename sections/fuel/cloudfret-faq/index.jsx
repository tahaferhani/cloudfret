import { Fade } from "react-awesome-reveal"
import Heading from "@/components/heading"
import parse from "html-react-parser"
import { useTranslations } from "next-intl"
import "./style.css"

function CloudfretFAQ() {
  const t = useTranslations("Fuel")
  const items = t.raw("faq-list");

  return (
    <section id="cloudfret-faq">
      <div className="container">
        <Fade direction="up" triggerOnce>
          <Heading>FAQ</Heading>
        </Fade>

        <div className="items">
          {
            items.map((item, index) => (
              <div key={index} className="item">
                <h3 className="question">• {item.question}</h3>
                <p className="answer">
                  {parse(item.answer)}
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default CloudfretFAQ