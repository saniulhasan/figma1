import SwiperCore, {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    EffectFade
  } from "swiper/modules";
  import { Swiper, SwiperSlide } from 'swiper/react';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);
  
  function MultiSliders() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Edit to see some magic happen!</h2>
  
        <div className="container-box">
          <div className="small-container">
            <Swiper
              slidesPerView={1}
              watchSlidesVisibility={true}
              navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
              autoHeight={true}
              pagination={{ clickable: true, dynamicBullets: true }}
            >
              <SwiperSlide>
                <div className="box">slide</div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box">slide</div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box">slide</div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box">slide</div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box">slide</div>
              </SwiperSlide>
            </Swiper>
          </div>
  
          <button className="arrow-left arrow">Prev</button>
          <button className="arrow-right arrow">next</button>
        </div>
      </div>
    );
  }
  
  export default  MultiSliders;