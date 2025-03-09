import { useTranslations } from "next-intl"
import "./style.css"

function CloudfretOffer() {
  const t = useTranslations("Layout")

  return (
    <aside id="cloudfret-offer">
      <div className="container">
        <p className="text">
          {
            t.rich("Payez-vous trop cher pour l'assurance de vos camions ?", {
              b: text => <b>{text}</b>,
            })
          }
        </p>
        <a href="#" className="link">{t("Découvrir notre offre")}</a>
      </div>
    </aside>
  )
}

export default CloudfretOffer