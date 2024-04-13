import { A11y, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperNavButtons } from './SwiperNavButton';
import { SwiperNew} from './SwiperNew';
import './Cloud.css';

function CloudSwiper() {
  return (
    <div className="sp">
       
      <h1>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView="auto"
        >
          <SwiperNew/>
          <SwiperSlide className="res-slide" />
          <SwiperSlide className="res-slide" />
          <SwiperSlide className="res-slide" />
          <SwiperSlide className="res-slide" />
          <SwiperSlide className="res-slide" />
          <SwiperSlide className="res-slide" />
          <SwiperSlide className="res-slide" />
          <SwiperSlide className="res-slide" />
          <SwiperNavButtons />
        </Swiper>
      </h1>
    </div>
  );
}

export default CloudSwiper;