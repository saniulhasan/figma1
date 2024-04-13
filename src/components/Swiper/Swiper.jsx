import React, { useState, useRef, useEffect } from 'react';
import './swiper.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Swiper({ children, showArrowsProp }) {
  const [startX, setStartX] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showArrows, setShowArrows] = useState(false);

  const swiperRef = useRef(null);

  useEffect(() => {
    setShowArrows(showArrowsProp);
  }, [showArrowsProp]);

  function handleOnMouseDown(event) {
    setStartX(event.clientX);
    setIsMouseDown(true);
  }

  function handleOnMouseMove(event) {
    if (!isMouseDown || !swiperRef.current) return;
    event.preventDefault();
    const deltaX = (event.clientX - startX) * 0.115;
    swiperRef.current.scrollLeft = scrollLeft - deltaX;
  }

  function handleOnMouseUp() {
    setIsMouseDown(false);
  }

  function handleOnScroll() {
    setScrollLeft(swiperRef.current.scrollLeft);
  }

  return (
    <div style={{ position: 'relative' }}>
      {showArrows && (
        <>
          <div
            className="leftArrow"
            onClick={() => {
              swiperRef.current.scrollLeft -= 100;
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <div
            onClick={() => {
              swiperRef.current.scrollLeft += 100;
            }}
            className="RightArrow"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </>
      )}

      <div
        onMouseDown={(event) => {
          handleOnMouseDown(event);
        }}
        onMouseMove={(event) => {
          handleOnMouseMove(event);
        }}
        onMouseUp={() => {
          handleOnMouseUp();
        }}
        onScroll={() => {
          handleOnScroll();
        }}
        ref={swiperRef}
        className="swiperRootContainer"
      >
        <div className="swiperItemsContainer">
          {React.Children.map(children, (child, index) => (
            <div key={index} className="swiperItem">
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Swiper;