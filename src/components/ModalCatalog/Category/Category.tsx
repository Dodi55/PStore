import { useState } from 'react';
import styles from './Category.module.sass';
import { useAppSelector } from '../../../hook/useAppSelector';
import { useDispatch } from 'react-redux';
import { setSelectId } from '../../../store/Slices/BurgerSlice';

export const Category = ({ title, icon, id }: { title: string, icon: string, id: number }) => {
    const dispatch = useDispatch();
    const selectId = useAppSelector(state => state.burger.selectCatalogid);

    return (
        <div 
        id={`${id}`} 
        className={`${styles.categoryItem} ${selectId === id && styles.activeButton}`} 
        onClick={() => dispatch(setSelectId(id))}>
            <img src={icon}/> 
            <p>{title}</p>
        </div>
    );
};