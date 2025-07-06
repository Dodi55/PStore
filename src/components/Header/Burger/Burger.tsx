import { useRef, useState } from 'react';
import styles from './Burger.module.sass';

import { HiMiniSquares2X2 } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineClear } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { OpenCloseBurger } from '../../../store/Slices/BurgerSlice';
import { useAppSelector } from '../../../hook/useAppSelector';


export const Burger = () => {
    const isOpen = useAppSelector((state) => state.burger.isOpen);
    const dispatch = useDispatch();
    
    const ref1 = useRef<HTMLDivElement>(null);




    return (
        <>
            <div 
            ref={ref1}  
            className={styles.button} 
            onClick={() => {
                dispatch(OpenCloseBurger())
            }}
            >
                {isOpen 
                    ?<MdOutlineClear  className={styles.buttonIcon}/>
                    :<HiMiniSquares2X2  className={styles.buttonIcon}/>
                }
                <div className={styles.catalogText}>
                    <p className={styles.catalogTextP}>Каталог</p>
                    <MdKeyboardArrowDown  className={styles.catalogTexIcon}/>
                </div>
            </div>
        </>
    );
};