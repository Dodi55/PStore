import { useMediaQuery } from 'react-responsive';
import styles from './SearchFild.module.sass';

import { SlMagnifier } from "react-icons/sl";

export const SearchFild = () => {
    const isLessThan600 = useMediaQuery({ maxWidth: 540 });
    const isLessThan530 = useMediaQuery({ maxWidth: 480 });

    let placeholder = 'Искать товары';

    if (isLessThan600) {
        placeholder = 'Искать...';
    }

    if (isLessThan530) {
        placeholder = '';
    }

    return (
        <div className={styles.input}>
            <div className={styles.inputBlock}>
                <input 
                    type="text" 
                    className={styles.inputFild}
                    placeholder={placeholder}
                />
                <SlMagnifier className={styles.Magnifier} />
            </div>
        </div>
    );
};