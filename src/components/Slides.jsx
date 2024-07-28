import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation, HashNavigation , Autoplay } from "swiper/modules";
import 'swiper/css/pagination';
import slidesphoto from "../img/image.png";
import slidesimage from "../img/slidesimage.jpg";
import { FaPlayCircle } from "react-icons/fa";
import { FaCirclePause } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { colors } from "@mui/material";

export const Slides = () => {
  const { t } = useTranslation();

  const [isPaused, setIsPaused] = useState(false);
  const swiperRef = useRef(null);

  const toggleAutoplay = () => {
    if (isPaused) {
      swiperRef.current.autoplay.start();
    } else {
      swiperRef.current.autoplay.stop();
    }
    setIsPaused(!isPaused);
  };

  const slides = [
    { id: 1, imgSrc: slidesphoto },
    { id: 2, imgSrc: slidesimage },
    { id: 3, imgSrc: slidesphoto },
    { id: 4, imgSrc: slidesimage },
    { id: 5, imgSrc: slidesphoto },
    { id: 6, imgSrc: slidesimage },
    { id: 7, imgSrc: slidesphoto },
    { id: 8, imgSrc: slidesimage },
  ];

  return (
    <div id="review" className="bg-black text-white h-fit relative flex items-center justify-center">
      <div className="container">
        <div className="">
          <h2 className="text-3xl text-center text-white font-sans font-bold my-5 md:text-5xl lg:text-5xl">
            <span className="text-3xl text-white font-sans font-bold max-w-lg md:text-5xl lg:text-5xl  border-b-2 border-blue-700">
              {t("Отзывы")}
            </span>
            &nbsp;
            {t("от клиентов")}
          </h2>
          <Swiper
            ref={swiperRef}
            modules={[Pagination, Navigation, Autoplay, HashNavigation]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            hashNavigation={{
              watchState: true,
            }}
            pagination={{
              clickable: true,
            }}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <img
                  src={slide.imgSrc}
                  alt={`Slide ${slide.id}`}
                  className="w-auto h-96 object-cover mx-auto py-20"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            onClick={toggleAutoplay}
            className="absolute top-4 right-4 bg-black text-blue-700 p-2 rounded text-4xl"
          >
            {isPaused ? <FaCirclePause /> : <FaPlayCircle />}
          </button>
        </div>
      </div>
    </div>
  );
};
