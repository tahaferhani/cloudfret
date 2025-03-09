"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./style.css";
import { useTranslations } from "next-intl";
import { Fade } from "react-awesome-reveal";
import Heading from "@/components/heading";
import Button from "@/components/button";

function CloudfretRoutes({ title }) {
  const t = useTranslations("Routes");
  const routes = t.raw("routes-list");

  return (
    <section id="cloudfret-routes">
      <div className="container">
        <Fade direction="up" triggerOnce>
          <Heading color="light" highlightColor="color1">Opportunités de transport instantanées à saisir</Heading>
        </Fade>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
        >
          {
            routes.map((route, index) => (
              <SwiperSlide key={index}>
                <div className="route">
                  <p className="date">{route.date}</p>
                  <div className="cities">
                    <div className="city">
                      <img src={`https://flagcdn.com/${route.fromCountry}.svg`} alt={route.fromCountry} />
                      <p>{route.fromCity}</p>
                    </div>
                    <img className="arrow-separator" src="/images/icons/arrow-right-big.svg" alt="Arrow" />
                    <div className="city">
                      <img src={`https://flagcdn.com/${route.toCountry}.svg`} alt={route.toCountry} />
                      <p>{route.toCity}</p>
                    </div>
                  </div>
                  <div className="options">
                    <span className="option">{route.type}</span>
                    <span className="option">{route.weight}</span>
                  </div>
                  <div className="loading-date">
                    {t("Date de chargement")} : {route.loadingData}
                  </div>
                  <div className="trailers">
                    <span>{t("Remorques")} :</span>
                    <div className="trailers-list">
                      {
                        route.trailers.map((trailer, index) => (
                          <span key={index} className="trailer">{trailer}</span>
                        ))
                      }
                    </div>
                  </div>

                  <Button color="color1" small full noArrow>{t("buttonText")}</Button>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}

export default CloudfretRoutes