import styles from './HeaderPage.module.sass';
import { TopSales } from './TopSales/TopSales';
import { Slider } from './Slider/Slider';
import { TopCategory } from './TopCategory/TopCategory';
import { Blog } from './Blog/Blog';

export const HeaderPage = () => {
    return (
        <>
            <Slider />
            <TopSales />
            <TopCategory />
            <Blog />
        </>
    );
};