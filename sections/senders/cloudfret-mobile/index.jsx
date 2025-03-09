import { useTranslations } from "next-intl"
import "./style.css"
import { Fragment } from "react";
import Button from "@/components/button";
import clsx from "clsx";
import { Fade } from "react-awesome-reveal";

const CloudfretMobile = () => {
  const t = useTranslations("Senders");
  const data = t.raw("mobile-items");

  return (
    <section id="cloudfret-senders-mobile">
      <div className="container">
        {
          data.map((item, index) => (
            <div key={index} className="section">
              <div className="title-container">
                <img src={item.icon} alt={item.title} />
                <div>
                  <Fade direction="up" triggerOnce cascade>
                    <h2 className="title">{item.title}</h2>
                    <p className="subtitle">{item.subtitle}</p>
                  </Fade>
                </div>
              </div>

              <div className={clsx("items", {
                  "items-2": item.items.length == 2,
                  "items-1": item.items.length == 1,
                  "title-missed": item.items.length == 3 && item.items.some(item => !item.text)
                })}>
                {
                  item.items.map((item, index) => (
                    <Fragment key={index}>
                      {
                        !!index && <img className="arrow-separator" src="/images/icons/arrow-right-big.svg" alt="Arrow" />
                      }
                      <div className="item">
                        {
                          item.text && (
                            <p className="item-title">{item.text}</p>
                          )
                        }
                        <div className="item-image">
                          <img src={item.image} alt={item.text} />
                        </div>
                      </div>
                    </Fragment>
                  ))
                }
              </div>

              <Button color="color1">{item.buttonText}</Button>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default CloudfretMobile