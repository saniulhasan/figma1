import React from 'react';
import { useSwiper } from 'swiper/react';

export const SwiperNew = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <button onClick={() => swiper.slidePrev()}>Prev</button>
      
    </div>
  );
};