import Heading from '@/components/heading'
import { useTranslations } from 'next-intl'
import "./style.css"
import Image from 'next/image'
import Button from '@/components/button'
import { Fade } from 'react-awesome-reveal'

function Cloudfretblog() {
  const t = useTranslations("Blog")
  const articles = t.raw("articles-list")

  return (
    <section id="cloudfret-blog">
      <div className="container">
        <Fade direction="up" triggerOnce>
          <Heading color="dark">Blog</Heading>
        </Fade>
        
        <div className="row">
          {
            articles.map((article, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="article">
                  <div className="image">
                    <Image src={article.image} alt={article.title} fill />
                  </div>
                  <h3 className="title">{article.title}</h3>
                  <p>{article.description}</p>
                  <Button>{t("Lire la suite")}</Button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Cloudfretblog