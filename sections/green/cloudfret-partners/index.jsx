import Heading from "@/components/heading"
import { useTranslations } from "next-intl";
import { Fade } from "react-awesome-reveal";
import parse from "html-react-parser";
import "./style.css"

function CloudfretPartners() {
  const t = useTranslations("Green");
  const partners = t.raw("partners-list")

  return (
    <section id="cloudfret-partners">
      <div className="container">
        <Fade direction="up" triggerOnce>
          <Heading highlightColor="color2">Une Mission Partagée avec Nos Partenaires</Heading>
        </Fade>

        <div className="row">
          {
            partners.map((partner, index) => (
              <div key={index} className="col-6">
                <div className="partner">
                  <img src={partner.image} alt={partner.text} />
                  <p>{parse(partner.text)}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default CloudfretPartners