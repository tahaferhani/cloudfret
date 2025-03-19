import { Fade } from "react-awesome-reveal"
import Heading from "@/components/heading"
import parse from "html-react-parser"
import { useTranslations } from "next-intl"
import Button from "@/components/button"
import "./style.css"

function CloudfretFuel() {
  const t = useTranslations("Fuel")

  return (
    <section id="cloudfret-fuel">
      <div className="container">
        <Fade direction="up" triggerOnce>
          <Heading center={false} highlightColor="color1">Un atout indispensable pour les professionnels du transport</Heading>
        </Fade>
        <p className="text">{parse(t.raw("Optimisée pour les besoins des petites et moyennes entreprises de transport"))}</p>
      </div>

      <div className="text-image">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <Fade direction="up" triggerOnce>
                <Heading center={false} highlightColor="color1">Qui peut bénéficier de l'offre Carburant CloudFret ?</Heading>
              </Fade>
              <p className="text">{parse(t.raw("Exclusivement conçue pour les petits et moyens transporteurs partenaires de CloudFret"))}</p>
            </div>
          </div>

          <Button>{t("Inscrivez-vous")}</Button>
        </div>
      </div>
    </section>
  )
}

export default CloudfretFuel