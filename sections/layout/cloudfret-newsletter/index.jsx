import Button from "@/components/button";
import { useTranslations } from "next-intl";
import "./style.css"

function CloudfretNewsletter() {
  const t = useTranslations("Layout");

  return (
    <section id="cloudfret-newsletter">
      <div className="container">
        <div className="row gx-5">
          <div className="col-4">
            <p className="text">{t("Abonnez-vous pour rester à l'écoute des nouvelles nouveautés")}</p>
          </div>
          <div className="col-8">
            <form>
              <input type="email" placeholder={t("Entrez votre adresse email")} />
              <Button noArrow>{t("S'abonner")}</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CloudfretNewsletter