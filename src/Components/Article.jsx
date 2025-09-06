import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

// Utility to import all images from a folder
function importAll(r) {
  return r.keys().map(r);
}

// Import all blog and news images
const images = importAll(require.context('../Assets/Article', false, /\.(png|jpe?g|svg)$/));

function Article() {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center text-orange-600">
        Sequence of Events of Emergency
      </h1>

      <div className="flex items-center justify-center rounded-lg overflow-hidden h-full max-h-[700px] max-w-[500px] mx-auto">
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          loop={true}
          navigation={true}
          spaceBetween={30}
          slidesPerView={1}
          className="w-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-[400px] object-contain mx-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <style jsx>{`
          .swiper-button-next,
          .swiper-button-prev {
            color: #fff;
          }
        `}</style>
      </div>
    </div>
  );
}

export default Article;
