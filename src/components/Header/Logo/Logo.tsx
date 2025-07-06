import styles from './Logo.module.sass';

import { Link } from 'react-router-dom';

export const Logo = () => {
    return (
        <div className={styles.logo}>
            <Link to={'/'}>
                <img src="https://maxmobiles.ru/images/logos/73/logo__.svg" alt="MaxMobile" className={styles.logoIcon}/>
            </Link>
        </div>
    );
};