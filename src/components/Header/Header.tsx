import { useLayoutEffect, useRef } from 'react';
import { BottomHeader } from './BottomHeader/BottomHeader';
import { Burger } from './Burger/Burger';
import styles from './Header.module.sass';
import { Logo } from './Logo/Logo';
import { PhoneNumber } from './PhoneNumber/PhoneNumber';
import { Razdel } from './Razdel/Razdel';
import { SearchFild } from './SearchFild/SearchFild';
import { useDispatch } from 'react-redux';
import { setHeaderHeight } from '../../store/Slices/BurgerSlice';

export const Header = () => {
    const headerRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        if (headerRef.current) {
            const height = headerRef.current.getBoundingClientRect().height;
            dispatch(setHeaderHeight(height));            
        }
    }, []);

    return (
        <header ref={headerRef}>
            <div className={styles.headerT}>
                <div className="container">
                    <div className={styles.flexbox}>
                        <Logo />
                        <Burger />
                        <SearchFild />
                        <PhoneNumber />
                        <Razdel />
                    </div>
                </div>
            </div>
            {/* <BottomHeader /> */}
        </header>
    );
};