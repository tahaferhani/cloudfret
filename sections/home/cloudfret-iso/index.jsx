import Heading from '@/components/heading'
import { useTranslations } from 'next-intl'
import "./style.css"
import { Fade } from 'react-awesome-reveal'

function CloudfretIso() {
  const t = useTranslations("Home")

  return (
    <section id="cloudfret-iso">
      <div className="container">
        <Fade direction="up" triggerOnce cascade>
          <Heading color="light" highlightColor="color2" noShape>Certifications ISO</Heading>
          <p className="subtitle">{t("CloudFret s'engage envers la qualité et l'amélioration continue")}</p>
        </Fade>

        <div className="row justify-content-center gx-5">
          <div className="col-auto">
            <img src="/images/home/iso-1.png" alt="ISO" />
          </div>
          <div className="col-auto">
            <img src="/images/home/iso-2.png" alt="ISO" />
          </div>
          <div className="col-auto">
            <img src="/images/home/iso-3.png" alt="ISO" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CloudfretIso