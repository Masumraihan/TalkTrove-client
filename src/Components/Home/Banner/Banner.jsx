import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import Container from "../../Shared/Container";

const Banner = () => {
  // TODO must be Update this
  useEffect(() => {
    fetch("http://localhost:5000/banner")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <Container>
      <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
        <SwiperSlide>Slide 1</SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Banner;
