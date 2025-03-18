"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./style.css";
import { useTranslations } from "next-intl";
import { Fade } from "react-awesome-reveal";
import clsx from "clsx";

function CloudfretTestimonials({ title, lightBg }) {
  const t = useTranslations("Testimonials");
  const testimonials = t.raw("testimonials-list");

  return (
    <section id="cloudfret-testimonials" className={clsx({ "light-bg": lightBg })}>
      <div className="container">
        <Fade direction="up" triggerOnce cascade>
          {title}
        </Fade>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            }
          }}
        >
          {
            testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial">
                  <img className="avatar" src={testimonial.avatar} alt={testimonial.name} />
                  <p className="text">{testimonial.text}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <h3 className="name">{testimonial.name}</h3>
                    <div className="rating">
                      {
                        Array.from({ length: testimonial.rating }).map((_, index) => (
                          <img key={index} src="/images/icons/star.svg" alt="Star" />
                        ))
                      }
                    </div>
                  </div>
                  <p className="job">{testimonial.job}</p>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}

export default CloudfretTestimonials