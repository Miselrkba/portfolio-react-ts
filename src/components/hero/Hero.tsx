import React from 'react';
import './Hero.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core';
import 'swiper/swiper-bundle.min.css';
SwiperCore.use([Autoplay, Pagination, Navigation]);

const HeroContent = () => {
  return (
    <>
      <h1>
        Creative
        <br />
        Multi-Role Website
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        <br />
        Quam, officiis. Consectetur quos incidunt nam dolor in officia
        voluptatibus delectus nemo.
      </p>
      <button className="hero__button --outlined__button">
        <span>See More</span>
      </button>
      <button className="hero__button --outlined__button">
        <span>Buy Now</span>
      </button>
    </>
  );
};

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__row">
          <Swiper
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={true}
          >
            <SwiperSlide>
              <HeroContent />
            </SwiperSlide>
            <SwiperSlide>
              <HeroContent />
            </SwiperSlide>
            <SwiperSlide>
              <HeroContent />
            </SwiperSlide>
            <SwiperSlide>
              <HeroContent />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
