import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from "swiper";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SingleHeroSlide from "./SingleHeroSlide";

const HeroSliders = () => {
  const [heroData, setHeroData] = useState([]);
  useEffect(() => {
    fetch("/heroSectionData.json")
      .then((res) => res.json())
      .then((data) => {
        setHeroData(data);
      });
  }, []);
  return (
    <Swiper
      cssMode={true}
      loop
      autoplay
      pagination={{
        clickable: true,
      }}
      navigation={true}
      mousewheel={true}
      keyboard={true}
      modules={[
        Navigation,
        Pagination,
        Mousewheel,
        Keyboard,
        Autoplay,
        EffectFade,
      ]}
      className='mySwiper w-1/2'
    >
      {heroData.map((singleSlide) => (
        <SwiperSlide key={singleSlide.id}>
          <SingleHeroSlide singleSlide={singleSlide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSliders;
