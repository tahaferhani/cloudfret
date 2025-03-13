import Heading from '@/components/heading'
import { useTranslations } from 'next-intl';
import Button from '@/components/button';
import "./style.css";
import { Fade } from 'react-awesome-reveal';
import { getLocale } from 'next-intl/server';

async function CloudfretAppstore({ title }) {
  const t = useTranslations("Transporters");
  const locale = await getLocale();

  return (
    <section id="cloudfret-appstore">
      <div className="container">
        <Fade direction="up" triggerOnce cascade>
          {
            title || <Heading>Lancez-vous Maintenant!</Heading>
          }
          <p className="subtitle">{t("N'attendez plus, téléchargez l'application et profitez d'offres exclusives")}</p>
        </Fade>

        <div className="buttons">
          <a href="#" target="_blank">
            <img src={`/images/google-play-${locale}.svg`} alt="Apple Store" />
          </a>
          <a href="#" target="_blank">
            <img src={`/images/appstore-${locale}.svg`} alt="Google Play" />
          </a>
        </div>

        <Button center>{t("Téléchargez l'application")}</Button>
      </div>
    </section>
  )
}

export default CloudfretAppstore