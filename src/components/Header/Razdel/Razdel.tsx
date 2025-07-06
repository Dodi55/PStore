import styles from './Razdel.module.sass';

import { FaHeart } from "react-icons/fa";
import { FaBasketShopping, FaUserLarge } from "react-icons/fa6";
import { LuChartNoAxesColumn } from "react-icons/lu";
import { RazdelItem } from './RazdelItem/RazdelItem';
import { useMediaQuery } from 'react-responsive';


export const Razdel = () => {
    const isNotMobile = useMediaQuery({ minWidth: 700 }); // < 800px
    return (
        <div className={styles.iconBox}>
            {isNotMobile && 
            <>
                <RazdelItem image={LuChartNoAxesColumn}/>
                <RazdelItem image={FaHeart}/>
                <RazdelItem image={FaUserLarge}/>
            </>
            }
            <RazdelItem  image={FaBasketShopping}/>
        </div>
    );
};