import styles from './ModalCatalog.module.sass';

import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hook/useAppSelector';
import { OpenCloseBurger, setCategoryHeight } from '../../store/Slices/BurgerSlice';

import { Category } from './Category/Category';
import { useEffect, useLayoutEffect, useRef, type BaseSyntheticEvent } from 'react';
import { CatalogSubMenu } from './CatalogSubMenu/CatalogSubMenu';
import type { CategoryItem } from '../../types/Catalog';

const catalog: CategoryItem[] = [
    {
        id: 1,
        title: 'Apple', 
        icon: 'https://maxmobiles.ru/images/ab__webp/thumbnails/32/32/abt__ut2/menu-with-icon/73/pngwing.com__12__png.webp',
        data: [
            {
                headTitle: 'iPhone',
                icon: 'https://maxmobiles.ru/images/ab__webp/abt__ut2/menu-with-icon/73/store-card-13-iphone-nav-202309_GEO_US_png.webp',
                subTitle: [
                    {text: 'iPhone 16 Pro Max', href: 'Айфон.com'},
                    {text: 'iPhone 16 Pro', href: 'Айфон.com'},
                    {text: 'iPhone 16 Plus', href: 'Айфон.com'},
                    {text: 'iPhone 16', href: 'Айфон.com'},
                    {text: 'iPhone 16e', href: 'Айфон.com'},
                    {text: 'iPhone 15 Pro Max', href: 'Айфон.com'},
                    {text: 'iPhone 15 Pro', href: 'Айфон.com'},
                    {text: 'iPhone 15 Plus', href: 'Айфон.com'},
                    {text: 'iPhone 15', href: 'Айфон.com'},
                    {text: 'iPhone 14', href: 'Айфон.com'},
                    {text: 'iPhone 13', href: 'Айфон.com'},
                    {text: 'iPhone 12', href: 'Айфон.com'},
                    {text: 'iPhone 11', href: 'Айфон.com'},
                ]
            },
            {
                headTitle: 'iPad',
                icon: 'https://maxmobiles.ru/images/ab__webp/abt__ut2/menu-with-icon/73/store-card-13-iphone-nav-202309_GEO_US_png.webp',
                subTitle: [
                    {text: 'iPad 1', href: 'iPad.com'},
                    {text: 'iPad 2', href: 'iPad.com'},
                    {text: 'iPad 3', href: 'iPad.com'},
                    {text: 'iPad 4', href: 'iPad.com'},
                ]
            },
            {
                headTitle: 'iMac',
                icon: 'https://maxmobiles.ru/images/ab__webp/abt__ut2/menu-with-icon/73/store-card-13-iphone-nav-202309_GEO_US_png.webp',
                subTitle: [
                    {text: 'iMac 1', href: 'iMac.com'},
                    {text: 'iMac 2', href: 'iMac.com'},
                    {text: 'iMac 3', href: 'iMac.com'},
                    {text: 'iMac 4', href: 'iMac.com'},
                ]
            },
            {
                headTitle: '4-ый',
                icon: 'https://maxmobiles.ru/images/ab__webp/abt__ut2/menu-with-icon/73/store-card-13-iphone-nav-202309_GEO_US_png.webp',
                subTitle: [
                    {text: 'iMac 1', href: 'iMac.com'},
                    {text: 'iMac 2', href: 'iMac.com'},
                    {text: 'iMac 3', href: 'iMac.com'},
                    {text: 'iMac 4', href: 'iMac.com'},
                ]
            },
            {
                headTitle: 'новая строка',
                icon: 'https://maxmobiles.ru/images/ab__webp/abt__ut2/menu-with-icon/73/store-card-13-iphone-nav-202309_GEO_US_png.webp',
                subTitle: [
                    {text: 'iMac 1', href: 'iMac.com'},
                    {text: 'iMac 2', href: 'iMac.com'},
                    {text: 'iMac 3', href: 'iMac.com'},
                    {text: 'iMac 4', href: 'iMac.com'},
                ]
            },
            {
                headTitle: 'новая строка',
                icon: 'https://maxmobiles.ru/images/ab__webp/abt__ut2/menu-with-icon/73/store-card-13-iphone-nav-202309_GEO_US_png.webp',
                subTitle: [
                    {text: 'iMac 1', href: 'iMac.com'},
                    {text: 'iMac 2', href: 'iMac.com'},
                    {text: 'iMac 3', href: 'iMac.com'},
                    {text: 'iMac 4', href: 'iMac.com'},
                    {text: 'iMac 4', href: 'iMac.com'},
                    {text: 'iMac 4', href: 'iMac.com'},
                    {text: 'iMac 4', href: 'iMac.com'},
                    {text: 'iMac 4', href: 'iMac.com'},
                    {text: 'iMac 4', href: 'iMac.com'},
                    {text: 'iMac 4', href: 'iMac.com'},
                    {text: 'iMac 4', href: 'iMac.com'},
                    {text: 'iMac 4', href: 'iMac.com'},
                    {text: 'iMac 4', href: 'iMac.com'},
                    {text: 'iMac 4', href: 'iMac.com'},
                ]
            },
            {
                headTitle: 'новая строка',
                icon: 'https://maxmobiles.ru/images/ab__webp/abt__ut2/menu-with-icon/73/store-card-13-iphone-nav-202309_GEO_US_png.webp',
                subTitle: [
                    {text: 'iMac 1', href: 'iMac.com'},
                    {text: 'iMac 2', href: 'iMac.com'},
                    {text: 'iMac 3', href: 'iMac.com'},
                    {text: 'iMac 4', href: 'iMac.com'},
                    {text: 'iMac 4', href: 'iMac.com'},
                    {text: 'iMac 4', href: 'iMac.com'},
                ]
            },
            {
                headTitle: 'новая строка',
                icon: 'https://maxmobiles.ru/images/ab__webp/abt__ut2/menu-with-icon/73/store-card-13-iphone-nav-202309_GEO_US_png.webp',
                subTitle: [
                    {text: 'iMac 1', href: 'iMac.com'},
                    {text: 'iMac 2', href: 'iMac.com'},
                ]
            },
        ]
    },
    {   
        id: 2,
        title: 'Гейминг', 
        icon: 'https://maxmobiles.ru/images/ab__webp/thumbnails/32/22/abt__ut2/menu-with-icon/73/pngwing.com__11__png.webp',
        data: [
            {
                headTitle: 'Приставки',
                icon: 'https://maxmobiles.ru/images/ab__webp/abt__ut2/menu-with-icon/73/store-card-13-iphone-nav-202309_GEO_US_png.webp',
                subTitle: [
                    {text: 'Приставки 1', href: 'Айфон.com'},
                    {text: 'Приставки 2', href: 'Айфон.com'},
                    {text: 'Приставки 3', href: 'Айфон.com'},
                    {text: 'Приставки 4', href: 'Айфон.com'},
                ]
            },
            {
                headTitle: 'VR',
                icon: 'https://maxmobiles.ru/images/ab__webp/abt__ut2/menu-with-icon/73/store-card-13-iphone-nav-202309_GEO_US_png.webp',
                subTitle: [
                    {text: 'VR 1', href: 'iPad.com'},
                    {text: 'VR 2', href: 'iPad.com'},
                    {text: 'VR 3', href: 'iPad.com'},
                    {text: 'VR 4', href: 'iPad.com'},
                ]
            },
            {
                headTitle: 'Аксессуары',
                icon: 'https://maxmobiles.ru/images/ab__webp/abt__ut2/menu-with-icon/73/store-card-13-iphone-nav-202309_GEO_US_png.webp',
                subTitle: [
                    {text: 'Аксессуары 1', href: 'iMac.com'},
                    {text: 'Аксессуары 2', href: 'iMac.com'},
                    {text: 'Аксессуары 3', href: 'iMac.com'},
                    {text: 'Аксессуары 4', href: 'iMac.com'},
                ]
            },
        ]
    },
    {
        id: 3,
        title: 'Dyson', 
        icon: 'https://maxmobiles.ru/images/ab__webp/thumbnails/32/32/abt__ut2/menu-with-icon/73/12_png.webp',
        data: [
            {
                headTitle: 'Фен',
                icon: 'https://maxmobiles.ru/images/ab__webp/abt__ut2/menu-with-icon/73/store-card-13-iphone-nav-202309_GEO_US_png.webp',
                subTitle: [
                    {text: 'Фен 1', href: 'Фен.com'},
                    {text: 'Фен 2', href: 'Фен.com'},
                ]
            },
            {
                headTitle: 'Стайлер',
                icon: 'https://maxmobiles.ru/images/ab__webp/abt__ut2/menu-with-icon/73/store-card-13-iphone-nav-202309_GEO_US_png.webp',
                subTitle: [
                    {text: 'Стайлер 1', href: 'Стайлер.com'},
                    {text: 'Стайлер 2', href: 'Стайлер.com'},
                    {text: 'Стайлер 3', href: 'Стайлер.com'},
                    {text: 'Стайлер 4', href: 'Стайлер.com'},
                ]
            },
            {
                headTitle: 'Пылесос',
                icon: 'https://maxmobiles.ru/images/ab__webp/abt__ut2/menu-with-icon/73/store-card-13-iphone-nav-202309_GEO_US_png.webp',
                subTitle: [
                    {text: 'Пылесос 1', href: 'Пылесос.com'},
                    {text: 'Пылесос 2', href: 'Пылесос.com'},
                    {text: 'Пылесос 3', href: 'Пылесос.com'},
                    {text: 'Пылесос 4', href: 'Пылесос.com'},
                    {text: 'Пылесос 5', href: 'Пылесос.com'},
                    {text: 'Пылесос 6', href: 'Пылесос.com'},
                ]
            },
        ]
    },
    {
        id: 4,
        title: 'Гаджеты', 
        icon: 'https://maxmobiles.ru/images/ab__webp/thumbnails/32/32/abt__ut2/menu-with-icon/73/pngwing.com__13__png.webp',
        data: [
            {
                headTitle: 'Камера',
                icon: 'https://maxmobiles.ru/images/ab__webp/abt__ut2/menu-with-icon/73/store-card-13-iphone-nav-202309_GEO_US_png.webp',
                subTitle: [
                    {text: 'Камера 1', href: 'Фен.com'},
                    {text: 'Камера 2', href: 'Фен.com'},
                ]
            },
            {
                headTitle: 'Пейджер',
                icon: 'https://maxmobiles.ru/images/ab__webp/abt__ut2/menu-with-icon/73/store-card-13-iphone-nav-202309_GEO_US_png.webp',
                subTitle: [
                    {text: 'Пейджер 1', href: 'Стайлер.com'},
                ]
            }
        ]
    },
    {
        id: 5,
        title: 'Аксессуары', 
        icon: 'https://maxmobiles.ru/images/ab__webp/thumbnails/32/32/abt__ut2/menu-with-icon/73/aks__1__png.webp',
        data: [
            {
                headTitle: 'Камера',
                icon: 'https://maxmobiles.ru/images/ab__webp/abt__ut2/menu-with-icon/73/store-card-13-iphone-nav-202309_GEO_US_png.webp',
                subTitle: [
                    {text: 'Камера 1', href: 'Фен.com'},
                    {text: 'Камера 2', href: 'Фен.com'},
                ]
            },
            {
                headTitle: 'Пейджер',
                icon: 'https://maxmobiles.ru/images/ab__webp/abt__ut2/menu-with-icon/73/store-card-13-iphone-nav-202309_GEO_US_png.webp',
                subTitle: [
                    {text: 'Пейджер 1', href: 'Стайлер.com'},
                ]
            }
        ]
    },
    {
        id: 6,
        title: 'Для красоты и здоровья', 
        icon: 'https://maxmobiles.ru/images/ab__webp/thumbnails/32/32/abt__ut2/menu-with-icon/127/Без_имени-2_clov-ag_png.webp',
        data: [
            {
                headTitle: 'Камера',
                icon: 'https://maxmobiles.ru/images/ab__webp/abt__ut2/menu-with-icon/73/store-card-13-iphone-nav-202309_GEO_US_png.webp',
                subTitle: [
                    {text: 'Камера 1', href: 'Фен.com'},
                    {text: 'Камера 2', href: 'Фен.com'},
                ]
            },
            {
                headTitle: 'Пейджер',
                icon: 'https://maxmobiles.ru/images/ab__webp/abt__ut2/menu-with-icon/73/store-card-13-iphone-nav-202309_GEO_US_png.webp',
                subTitle: [
                    {text: 'Пейджер 1', href: 'Стайлер.com'},
                ]
            }
        ]
    },
    {
        id: 7,
        title: 'Android сматфоны', 
        icon: 'https://maxmobiles.ru/images/ab__webp/thumbnails/32/37/abt__ut2/menu-with-icon/73/pngwing.com__14__png.webp',
        data: [
            {
                headTitle: 'Камера',
                icon: 'https://maxmobiles.ru/images/ab__webp/abt__ut2/menu-with-icon/73/store-card-13-iphone-nav-202309_GEO_US_png.webp',
                subTitle: [
                    {text: 'Камера 1', href: 'Фен.com'},
                    {text: 'Камера 2', href: 'Фен.com'},
                ]
            },
            {
                headTitle: 'Пейджер',
                icon: 'https://maxmobiles.ru/images/ab__webp/abt__ut2/menu-with-icon/73/store-card-13-iphone-nav-202309_GEO_US_png.webp',
                subTitle: [
                    {text: 'Пейджер 1', href: 'Стайлер.com'},
                ]
            }
        ]
    },
    {
        id: 8,
        title: 'Идеальное БУ', 
        icon: 'https://maxmobiles.ru/images/ab__webp/thumbnails/32/34/abt__ut2/menu-with-icon/73/3aca62adf17c838f9c55c3e61d1cb88c_png.webp',
        data: [
            {
                headTitle: 'Камера',
                icon: 'https://maxmobiles.ru/images/ab__webp/abt__ut2/menu-with-icon/73/store-card-13-iphone-nav-202309_GEO_US_png.webp',
                subTitle: [
                    {text: 'Камера 1', href: 'Фен.com'},
                    {text: 'Камера 2', href: 'Фен.com'},
                ]
            },
            {
                headTitle: 'Пейджер',
                icon: 'https://maxmobiles.ru/images/ab__webp/abt__ut2/menu-with-icon/73/store-card-13-iphone-nav-202309_GEO_US_png.webp',
                subTitle: [
                    {text: 'Пейджер 1', href: 'Стайлер.com'},
                ]
            }
        ]
    },
    {
        id: 9,
        title: 'SMEG', 
        icon: 'https://maxmobiles.ru/images/ab__webp/thumbnails/32/17/abt__ut2/menu-with-icon/74/smeg_png.webp',
        data: [
            {
                headTitle: 'Камера',
                icon: 'https://maxmobiles.ru/images/ab__webp/abt__ut2/menu-with-icon/73/store-card-13-iphone-nav-202309_GEO_US_png.webp',
                subTitle: [
                    {text: 'Камера 1', href: 'Фен.com'},
                    {text: 'Камера 2', href: 'Фен.com'},
                ]
            },
            {
                headTitle: 'Пейджер',
                icon: 'https://maxmobiles.ru/images/ab__webp/abt__ut2/menu-with-icon/73/store-card-13-iphone-nav-202309_GEO_US_png.webp',
                subTitle: [
                    {text: 'Пейджер 1', href: 'Стайлер.com'},
                ]
            }
        ]
    },
    {
        id: 10,
        title: 'Игрушки и конструкторы', 
        icon: 'https://maxmobiles.ru/images/ab__webp/thumbnails/32/32/abt__ut2/menu-with-icon/74/pngwing.com__15__png.webp',
        data: [
            {
                headTitle: 'Камера',
                icon: 'https://maxmobiles.ru/images/ab__webp/abt__ut2/menu-with-icon/73/store-card-13-iphone-nav-202309_GEO_US_png.webp',
                subTitle: [
                    {text: 'Камера 1', href: 'Фен.com'},
                    {text: 'Камера 2', href: 'Фен.com'},
                ]
            },
            {
                headTitle: 'Пейджер',
                icon: 'https://maxmobiles.ru/images/ab__webp/abt__ut2/menu-with-icon/73/store-card-13-iphone-nav-202309_GEO_US_png.webp',
                subTitle: [
                    {text: 'Пейджер 1', href: 'Стайлер.com'},
                ]
            }
        ]
    },
    {
        id: 11,
        title: 'Smart-гирлянды и подсветка', 
        icon: 'https://maxmobiles.ru/images/ab__webp/thumbnails/32/28/abt__ut2/menu-with-icon/74/pngwing.com__20__png.webp',
        data: [
            {
                headTitle: 'Камера',
                icon: 'https://maxmobiles.ru/images/ab__webp/abt__ut2/menu-with-icon/73/store-card-13-iphone-nav-202309_GEO_US_png.webp',
                subTitle: [
                    {text: 'Камера 1', href: 'Фен.com'},
                    {text: 'Камера 2', href: 'Фен.com'},
                ]
            },
            {
                headTitle: 'Пейджер',
                icon: 'https://maxmobiles.ru/images/ab__webp/abt__ut2/menu-with-icon/73/store-card-13-iphone-nav-202309_GEO_US_png.webp',
                subTitle: [
                    {text: 'Пейджер 1', href: 'Стайлер.com'},
                ]
            }
        ]
    }
]


export const ModalCatalog = () => {
    const headerHeight = useAppSelector((state) => state.burger.headerHeight);
    const isOpen = useAppSelector((state) => state.burger.isOpen);
    
    const headerRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        if (headerRef.current) {
            const height = headerRef.current.getBoundingClientRect().height;            
            dispatch(setCategoryHeight(height));            
        }
    }, [isOpen]);
    return (
        <>
            { isOpen &&  
                <div 
                className={styles.modal} 
                style={{ marginTop: `${headerHeight}px` }} 
                >
                    <div className={styles.modalItem}>
                        <div className="container">
                            <div className={styles.catalogBlock}>
                                <div className={styles.catalogType} ref={headerRef}>{catalog.map(el => <Category icon={el.icon} title={el.title} key={el.id} id={el.id}/>)}</div>

                                <CatalogSubMenu catalogAll={catalog}/>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};
