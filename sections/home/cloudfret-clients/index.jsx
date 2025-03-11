"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./style.css";
import Heading from "@/components/heading";
import { Fade } from "react-awesome-reveal";

function CloudfretClients({ title }) {
  const partners = [
    "/images/home/partner-1.png",
    "/images/home/partner-2.png",
    "/images/home/partner-3.png",
    "/images/home/partner-4.png",
    "/images/home/partner-5.png",
    "/images/home/partner-6.png",
    "/images/home/partner-7.png",
    "/images/home/partner-1.png",
    "/images/home/partner-2.png",
    "/images/home/partner-3.png",
  ]

  return (
    <section id="cloudfret-clients">
      <div className="container">
        <Fade direction="up" triggerOnce>
          <Heading color="dark" highlightColor="color2" noShape>Ils nous font confiance</Heading>
        </Fade>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={7}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
        >
          {
            partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <img className="partner" src={partner} alt="Logo" />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}

export default CloudfretClients