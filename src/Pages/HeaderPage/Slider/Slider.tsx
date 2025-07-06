import styles from './Slider.module.sass';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import slide1 from '../../../assets/slider/Снимок экрана 2025-07-06 110122.png'
import slide2 from '../../../assets/slider/Снимок экрана 2025-07-06 110156.png'
import slide3 from '../../../assets/slider/Снимок экрана 2025-07-06 110214.png'
import slide4 from '../../../assets/slider/Снимок экрана 2025-07-06 110245.png'

import 'swiper/css';
import 'swiper/css/navigation';

export const Slider = () => {
  return (
    <div className="slider-wrapper">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        spaceBetween={20}
        slidesPerView={1}
        loop
      >
        <SwiperSlide><SliderItem background={slide1} positionY={'top'} positionX={'center'}/></SwiperSlide>
        <SwiperSlide><SliderItem background={slide2} positionY={'top'} positionX={'center'}/></SwiperSlide>
        <SwiperSlide><SliderItem background={slide3} positionY={'-30px'} positionX={'right'}/></SwiperSlide>
        <SwiperSlide><SliderItem background={slide4} positionY={'top'} positionX={'center'}/></SwiperSlide>
      </Swiper>
    </div>
  );
};


export const SliderItem = ({background, positionX, positionY}) => {
  return (
    <div 
    className={styles.item} 
    style={{ 
      backgroundImage: `url(${background})`,
      backgroundPositionX: positionX,
      backgroundPositionY: positionY
    }}
    >
      
    </div>
  );
};

