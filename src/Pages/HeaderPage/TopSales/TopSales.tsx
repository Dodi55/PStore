import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './TopSales.module.sass';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import { TopSalesItem } from './TopSalesItem/TopSalesItem';
import { TitleSlider } from '../../../components/ui-kit/TitleSlider/TitleSlider';

const topSales = [
    {
        icon: 'https://maxmobiles.ru/images/ab__webp/abt__ut2/banners/all/129/максмобайлс_зарядка_тг500_jpg.webp',
        href: 'vk.com'
    },
    {
        icon: 'https://maxmobiles.ru/images/ab__webp/abt__ut2/banners/all/123/максмобайлс_отзовись_июль_jpg.webp',
        href: 'vk.com'
    },
    {
        icon: 'https://maxmobiles.ru/images/ab__webp/abt__ut2/banners/all/123/warranty__jpg.webp',
        href: 'vk.com'
    },
    {
        icon: 'https://maxmobiles.ru/images/ab__webp/abt__ut2/banners/all/125/iPhone-_AirPod_jpg.webp',
        href: 'vk.com'
    },
    {
        icon: 'https://maxmobiles.ru/images/ab__webp/abt__ut2/banners/all/123/cyber-sale1_jpg.webp',
        href: 'vk.com'
    },
    {
        icon: 'https://maxmobiles.ru/images/ab__webp/abt__ut2/banners/all/125/MacBook_мышь_акция-скругл-01_png.webp',
        href: 'vk.com'
    },
    {
        icon: 'https://maxmobiles.ru/images/ab__webp/abt__ut2/banners/all/123/5-bonusy2_jpeg.webp',
        href: 'vk.com'
    },
]

export const TopSales = () => {
    return (
        <div className={styles.topSales}>
            <div className='container'>
                <TitleSlider text='Топ продаж' positionText='left' />
                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={20}
                    slidesPerView={4.2}
                    breakpoints={{
                        100: {
                            slidesPerView: 2.2
                        },
                        500: {
                            slidesPerView: 3.2
                        },
                        1200: {
                            slidesPerView: 4.2
                        }
                    }}
                    loop={false}
                    className={styles.wrapper}
                >
                    {topSales.map((el, index) => (
                    <SwiperSlide key={index}>
                        <TopSalesItem data={el}/>
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};