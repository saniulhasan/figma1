// Slide.js
import React from 'react';

const Slide = ({ imageUrl, title }) => (
  <div className="swiper-slide">
    <img src={imageUrl} alt={title} />
    <div className="slide-content">
      <h2>{title}</h2>
    </div>
  </div>
);

export default Slide;
