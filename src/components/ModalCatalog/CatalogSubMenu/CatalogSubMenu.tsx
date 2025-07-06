import styles from './CatalogSubMenu.module.sass';

import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../hook/useAppSelector';

import { SubMenuItem } from './SubMenuItem/SubMenuItem';

import type { CategoryItem, DataItem } from '../../../types/Catalog';

export const CatalogSubMenu = ({catalogAll}: {catalogAll: CategoryItem[]}) => {  
    const selectId = useAppSelector(state => state.burger.selectCatalogid);
    const heightCategory = useAppSelector(state => state.burger.categoryHeight);
    const [catalog, setCatalog] = useState<DataItem[]>([] as DataItem[]);

    useEffect(() => {
        const currentCatalog = catalogAll.filter(el => el.id === selectId)[0].data;
        setCatalog(currentCatalog);  
              
    }, [selectId]);

    return (
        <div className={styles.catalogbox} style={{height: `${heightCategory}px`}}>
            <div className={styles.catalogProduct}>
                {catalog.map((el, index) => <SubMenuItem key={index} headTitle={el.headTitle} subTitle={el.subTitle} icon={el.icon}/>)}
            </div>
        </div>
    );
};