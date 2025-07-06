import { TitleSlider } from '../../../components/ui-kit/TitleSlider/TitleSlider';
import styles from './TopCategory.module.sass';
import { Link } from 'react-router-dom'; // если ты используешь React Router

const categories = [
  { id: 1, title: 'Ноутбуки', image: 'https://maxmobiles.ru/images/ab__webp/ab__fn_menu_icon/129/store-card-13-iphone-nav-202409_GEO1_jpeg.webp', link: '/catalog/laptops' },
  { id: 2, title: 'Смартфоны', image: 'https://maxmobiles.ru/images/ab__webp/ab__fn_menu_icon/121/ipad-apple1_jpeg.webp', link: '/catalog/phones' },
  { id: 3, title: 'Планшеты', image: 'https://maxmobiles.ru/images/ab__webp/ab__fn_menu_icon/121/Airpod-apple2_jpg.webp', link: '/catalog/tablets' },
  { id: 4, title: 'ПК', image: 'https://maxmobiles.ru/images/ab__webp/ab__fn_menu_icon/121/watch-apple3_jpg.webp', link: '/catalog/pc' },
  { id: 5, title: 'Мониторы', image: 'https://maxmobiles.ru/images/ab__webp/ab__fn_menu_icon/121/acs-apple2_jpeg.webp', link: '/catalog/monitors' },
  { id: 6, title: 'Мониторы', image: 'https://maxmobiles.ru/images/ab__webp/ab__fn_menu_icon/121/store-card-13-homepod-nav-2_jpg.webp', link: '/catalog/monitors' },
  { id: 7, title: 'Мониторы', image: 'https://maxmobiles.ru/images/ab__webp/ab__fn_menu_icon/121/for-game_jpg.webp', link: '/catalog/monitors' },
];

export const TopCategory = () => {
  return (
    <div className={styles.topCategory}>
        <div className='container'>
            <TitleSlider positionText='left' text='Топовые категории'/>
            <div className={styles.grid}>
              {categories.map((cat) => (
                <Link to={cat.link} key={cat.id} className={styles.item}>
                  <img src={cat.image} alt={cat.title} className={styles.image}/>
                  <span className={styles.text}>{cat.title}</span>
                </Link>
              ))}
            </div>
        </div>
    </div>
  );
};
