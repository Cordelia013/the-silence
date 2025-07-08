// Dans un fichier comme src/components/MyCarousel.tsx


// Importez les modules Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Les styles sont déjà importés globalement dans src/index.css

const MyCarousel = () => {
  const slides = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4'];

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="rounded-lg"
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center h-64 bg-gray-800 text-white text-4xl rounded-lg">
              {slideContent}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MyCarousel;
