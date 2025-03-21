import { useTranslations } from "next-intl";
import "./style.css"

function CloudfretFooter() {
  const t = useTranslations("Layout");

  return (
    <>
      <footer id="cloudfret-footer">
        <div className="container">
          <div className="row gx-xl-5">
            <div className="col-md-5 col-lg-4">
              <img className="logo" src="/images/cloudfret-light.svg" alt="Cloudfret" />
              <p className="description">{t("Plateforme digitale de mise en relation entre expéditeurs et transporteurs de marchandises")}</p>
              <div className="title">{t("Suivez nous")}</div>
              <div className="socials">
                <a href="/"><img src="/images/icons/facebook.svg" alt="Facebook" /></a>
                <a href="/"><img src="/images/icons/instagram.svg" alt="Instagram" /></a>
                <a href="/"><img src="/images/icons/facebook.svg" alt="Facebook" /></a>
                <a href="/"><img src="/images/icons/instagram.svg" alt="Instagram" /></a>
              </div>
            </div>
            <div className="col-md-2 col-lg-auto">
              <h3 className="title">{t("Accès Rapide")}</h3>
              <div className="links">
                <a href="/">Landing Page</a>
                <a href="/">Popup Builder</a>
                <a href="/">Web-design</a>
                <a href="/">Content</a>
                <a href="/">Integrations</a>
              </div>
            </div>
            <div className="col-md-5 col-lg-auto">
              <h3 className="title">{t("Contact")}</h3>
              <div className="contact-infos">
                <div className="info">
                  <img src="/images/icons/marker-white.svg" alt="Location" />
                  <span>69 rue du Rouet,<br />13008 Marseille, France</span>
                </div>
                <div className="info">
                  <img src="/images/icons/marker-white.svg" alt="Location" />
                  <span>214 Boulevard Ibnou Sina Hay El Hana<br />20210 Casablanca</span>
                </div>
                <div className="info">
                  <img src="/images/icons/marker-white.svg" alt="Location" />
                  <span>Technopark Agadir<br />Route Nationale N°1,Tilila, Agadir</span>
                </div>
                <div className="info">
                  <img src="/images/icons/marker-white.svg" alt="Location" />
                  <span>Technopark Tanger<br />Ave Mohammed V, Tangier</span>
                </div>
                <a className="info" href="mailto:contact@cloudfret.com">
                  <img src="/images/icons/envelope-white.svg" alt="Email" />
                  <span>contact@cloudfret.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div id="cloudfret-footer-bottom">
        <div className="container">
          <p>{t("Tous droits réservés", { year: 2025 })}</p>
        </div>
      </div>
    </>
  )
}

export default CloudfretFooter