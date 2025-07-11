import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const sliderData = [
  {
    image: 'https://source.unsplash.com/1600x500/?shopping,tech',
    title: 'Tech Deals You Can’t Miss 🔥',
    subtitle: 'Up to 70% off on gadgets, phones & more!',
    button: 'Explore Now',
  },
  {
    image: 'https://source.unsplash.com/1600x500/?fashion,sale',
    title: 'Style Your Wardrobe 👗',
    subtitle: 'Biggest fashion sale of the season!',
    button: 'Shop Fashion',
  },
  {
    image: 'https://source.unsplash.com/1600x500/?gadgets,offers',
    title: 'Smart Home, Smarter You 🏠',
    subtitle: 'Get offers on smart devices & appliances!',
    button: 'Browse Gadgets',
  },
];

const HeroSlider = () => {
  return (
    <div className="mb-10">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        className="rounded-md overflow-hidden"
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px]">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex flex-col justify-center px-6 md:px-16 text-white">
                <h2 className="text-2xl md:text-4xl font-bold mb-2 drop-shadow">{slide.title}</h2>
                <p className="text-sm md:text-lg mb-4 drop-shadow">{slide.subtitle}</p>
                <button className="bg-yellow-400 text-black font-semibold px-4 py-2 w-fit rounded hover:bg-yellow-300 transition">
                  {slide.button}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
