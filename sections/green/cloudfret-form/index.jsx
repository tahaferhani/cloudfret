import Heading from "@/components/heading"
import { useTranslations } from "next-intl"
import { Fade } from "react-awesome-reveal"
import Button from "@/components/button"
import "./style.css"

function CloudfretForm() {
  const t = useTranslations("Green")

  return (
    <section id="cloudfret-green-form">
      <div className="container">
        <Fade direction="up" triggerOnce>
          <Heading highlightColor="color2">Commencez avec Cloudfret Green aujourd'hui</Heading>
        </Fade>

        <div className="row g-0">
            <div className="col-md-8">
                <form>
                    <input type="text" placeholder={t("Nom et prénom")} />
                    <input type="text" placeholder={t("Nom de l'entreprise")} />
                    <input type="email" placeholder={t("E-mail")} />
                    <input type="tel" placeholder={t("Numéro de tél")} />
                    <Button noArrow>{t("Envoyer")}</Button>
                </form>
            </div>
            <div className="col-md-4">
                <img className="image" src="/images/green/form.png" alt="Green" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default CloudfretForm