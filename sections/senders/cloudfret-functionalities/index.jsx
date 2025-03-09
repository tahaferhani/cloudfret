import Heading from "@/components/heading"
import { useTranslations } from "next-intl";
import { Fade } from "react-awesome-reveal";
import "./style.css";

const CloudfretFunctionalities = () => {
  const t = useTranslations("Senders");
  const functionalities = t.raw("functionalities-list")

  return (
    <section id="cloudfret-functionalities">
      <div className="container text-center">
        <Fade direction="up" triggerOnce>
          <Heading center highlightColor="color1">Des fonctionnalités conçues pour optimiser vos opérations</Heading>
        </Fade>

        <div className="px-5">
          <div className="row">
            {
              functionalities.map((functionality, index) => (
                <div key={index} className="col-md-6 col-lg-4 d-flex">
                  <div className="functionality">
                    <img src={functionality.icon} alt={functionality.text} />
                    <p>{functionality.text}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default CloudfretFunctionalities