import Heading from '@/components/heading'
import { useTranslations } from 'next-intl';
import Button from '@/components/button';
import "./style.css";
import { Fade } from 'react-awesome-reveal';

function CloudfretAppstore() {
  const t = useTranslations("Senders");

  return (
    <section id="cloudfret-appstore">
      <div className="container">
        <Fade direction="up" triggerOnce cascade>
          <Heading>Lancez-vous Maintenant!</Heading>
          <p className="subtitle">{t("N'attendez plus, téléchargez l'application et profitez d'offres exclusives")}</p>
        </Fade>

        <div className="buttons">
          <a href="#" target="_blank">
            <img src="/images/google-play-fr.png" alt="Apple Store" />
          </a>
          <a href="#" target="_blank">
            <img src="/images/appstore-fr.png" alt="Google Play" />
          </a>
        </div>

        <Button center>{t("Téléchargez l'application")}</Button>
      </div>
    </section>
  )
}

export default CloudfretAppstore