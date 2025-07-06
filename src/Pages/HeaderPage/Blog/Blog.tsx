import { TitleSlider } from '../../../components/ui-kit/TitleSlider/TitleSlider';
import styles from './Blog.module.sass';
import { BlogItem } from './BlogItem/BlogItem';

const blogs = [
    {
        id: 1,
        text: 'Можно ли зарядкой от iPad зарядить  iPhone?',
        image: 'https://maxmobiles.ru/images/ab__webp/cp_blog_post/129/у45пеааа_jpg.webp'
    },
    {
        id: 2,
        text: 'Что нужно знать покупая БУ iPhone?',
        image: 'https://maxmobiles.ru/images/ab__webp/cp_blog_post/129/Без_имени-1_jpg.webp'
    },
    {
        id: 3,
        text: 'Искусство домашнего уюта и кулинарного совершенства: продукция бренда SMEG',
        image: 'https://maxmobiles.ru/images/ab__webp/cp_blog_post/129/smeg1_jpg.webp'
    },
    {
        id: 4,
        text: 'Какой iPhone лучше купить летом 2025 года',
        image: 'https://maxmobiles.ru/images/ab__webp/cp_blog_post/129/11182541_jpg.webp'
    },
    {
        id: 5,
        text: 'Новый взгляд на дизайн интерфейсов от Apple',
        image: 'https://maxmobiles.ru/images/ab__webp/cp_blog_post/129/5е11е_jpg.webp'
    },
    {
        id: 6,
        text: 'Особенность фронтальной камеры в iPhone 17 Air',
        image: 'https://maxmobiles.ru/images/ab__webp/cp_blog_post/129/4к5енп11ика_jpg.webp'
    },
]

export const Blog = () => {
    return (
        <div className={styles.blog}>
            <div className="container">
                <TitleSlider positionText='left' text='Блог - читать'/>
                <div className={styles.blogContainer}>
                    {blogs.map(el => <BlogItem key={el.id} image={el.image} text={el.text}/>)}
                </div>
            </div>
        </div>
    );
};