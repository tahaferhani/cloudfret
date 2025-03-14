import Heading from '@/components/heading'
import "./style.css"
import { useTranslations } from 'next-intl'
import Button from '@/components/button'

function CloudfretSuperchargers() {
  const t = useTranslations("Green")

  return (
    <section id="cloudfret-superchargers">
      <div className="container">
        <Heading highlightColor="color2">Superchargeurs Alimentés par l'Énergie Solaire</Heading>

        <div className="row gx-xl-5">
          <div className="col-md-6">
            <p className="text">
              { t.rich("Nos superchargeurs sont installés dans des zones stratégiques", { b: text => <b>{text}</b> }) }
            </p>

            <Button color="color2">{t("Demandez une démo")}</Button>
          </div>
          <div className="col-md-6 mt-5 mt-md-0">
            <img className="image" src="/images/green/truck-3.jpg" alt="Volvo" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CloudfretSuperchargers