

import Swiper from './Swiper';
import ProductForm from './ProductForm';
import "./SwiperMain.css"
import {
  faShirt,
  faKeyboard,
  faHeadphones,
  faGlasses,
  faLaptop,
} from '@fortawesome/free-solid-svg-icons';

function SwiperMain() {
  const products = [
    { id: 1, name: 'Shirt', price: '19.99', image: faShirt },
    { id: 2, name: 'Headphone', price: '69.99', image: faHeadphones },
    { id: 3, name: 'Keyboard', price: '49.99', image: faKeyboard },
    { id: 4, name: 'Glasses', price: '89.99', image: faGlasses },
    { id: 5, name: 'Laptop', price: '678.00', image: faLaptop },
  ];
  return (
    <div className="swiper">
      <Swiper showArrowsProp={true}>
        {products.map((product, index) => (
          <ProductForm product={product} />
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperMain