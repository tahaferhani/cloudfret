import Heading from '@/components/heading'
import { useTranslations } from 'next-intl';
import Button from '@/components/button';
import "./style.css";
import { Fade } from 'react-awesome-reveal';
import { getLocale } from 'next-intl/server';
import clsx from 'clsx';

async function CloudfretAppstore({ title, style2 }) {
  const t = useTranslations("Transporters");
  const locale = await getLocale();

  return (
    <section id="cloudfret-appstore" className={clsx({ style2 })}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 d-flex flex-column">
            <Fade direction="up" triggerOnce cascade>
              {
                title || <Heading color={style2 && "dark"} center={!style2}>Lancez-vous Maintenant!</Heading>
              }
              
              {
                !style2 && (
                  <p className="subtitle">{t("N'attendez plus, téléchargez l'application et profitez d'offres exclusives")}</p>
                )
              }
            </Fade>

            <div className="buttons">
              <a href="#" target="_blank">
                <img src={`/images/google-play-${locale}.svg`} alt="Apple Store" />
              </a>
              <a href="#" target="_blank">
                <img src={`/images/appstore-${locale}.svg`} alt="Google Play" />
              </a>
            </div>

            <Button center={!style2}>{t("Téléchargez l'application")}</Button>
          </div>
          {
            style2 && (
              <div className="col-md-4 col-lg-6">
                <img className="phone-image" src="/images/testimonials/phone.png" alt="Mobile" />
              </div>
            )
          }
        </div>
      </div>
    </section>
  )
}

export default CloudfretAppstore