import Heading from "@/components/heading"
import { useTranslations } from "next-intl"
import Button from "@/components/button"
import parse from "html-react-parser"
import "./style.css"

function CloudfretForm() {
  const t = useTranslations("Insurance")

  return (
    <section id="cloudfret-insurance-form">
      <div className="container">
        <Heading center={false} highlightColor="color1">Qui peut bénéficier de cette offre d'assurance et assistance ?</Heading>

        <p className="subtitle">{parse(t.raw("Spécialement conçue pour les transporteurs partenaires de Cloudfret"))}</p>
        <p>{t("Cette offre répond aux besoins des professionnels de la route")}</p>

        <div className="row">
          <div className="col-lg-8">
            <p className="subtitle">{parse(t.raw("N'attendez-plus !"))}</p>
            <p>{t("Remplissez le formulaire ci-dessous et notre équipe vous contactera")}</p>
          </div>
        </div>

        <form>
          <div className="row">
            <div className="col-md-6">
              <input type="text" placeholder={t("Nom et Prénom") + " *"} />
            </div>
            <div className="col-md-6">
              <input type="text" placeholder={t("Nom de l'entreprise") + " *"} />
            </div>
            <div className="col-md-6">
              <input type="text" placeholder={t("Ville") + " *"} />
            </div>
            <div className="col-md-6">
              <input type="tel" placeholder={t("Téléphone") + " *"} />
            </div>
            <div className="col-md-6">
              <input type="email" placeholder={t("Email")} />
            </div>
            <div className="col-md-6">
              <input type="text" placeholder={t("Nombre de remorques") + " *"} />
            </div>
            <div className="col-md-6">
              <input type="text" placeholder={t("Nombre de camions") + " *"} />
            </div>
            <div className="col-md-6">
              <input type="text" placeholder={t("Compagnie d'assurance actuelle") + " *"} />
            </div>
            <div className="col-md-6">
              <input type="date"/>
            </div>
          </div>

          <Button full>{t("Envoyer ma demande")}</Button>
        </form>
      </div>
    </section>
  )
}

export default CloudfretForm