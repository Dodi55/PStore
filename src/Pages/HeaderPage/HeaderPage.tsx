import styles from './HeaderPage.module.sass';
import { TopSales } from './TopSales/TopSales';
import { Slider } from './Slider/Slider';
import { TopCategory } from './TopCategory/TopCategory';
import { Blog } from './Blog/Blog';
import { Text } from '../../components/AboutAs/Text/Text';

export const HeaderPage = () => {
    return (
        <>
            <Slider />
            <TopSales />
            <TopCategory />
            <Blog />
            <Text />
        </>
    );
};