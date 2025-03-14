import Heading from "@/components/heading"
import { useTranslations } from "next-intl";
import "./style.css"
import Button from "@/components/button";
import { Fade } from "react-awesome-reveal";

function CloudfretTrucks() {
  const t = useTranslations("Green");

  return (
    <section id="cloudfret-trucks">
      <div className="container">
        <Fade direction="up" triggerOnce>
          <Heading highlightColor="color2">Une Flotte 100% Électrique et Photovoltaïque</Heading>
        </Fade>

        <div className="row">
          <div className="col-md-6">
            <div className="trucks">
              <div className="truck">
                <img src="/images/green/truck-1.png" alt="Volvo" />
                <p>18 {t("Tonnes")}</p>
              </div>
              <div className="truck">
                <img src="/images/green/truck-2.png" alt="Volvo" />
                <p>44 {t("Tonnes")}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-5 mt-md-0">
            <p className="text">
              {
                t.rich("Notre flotte 100% électrique est alimentée par des panneaux solaires", { b: text => <b>{text}</b> })
              }
            </p>
            <Button color="color2">Passez au transport durable</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CloudfretTrucks