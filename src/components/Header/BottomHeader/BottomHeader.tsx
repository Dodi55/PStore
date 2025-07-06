import { headerBottom } from '../../../DataBase/Header/HeaderBottom';
import styles from './BottomHeader.module.sass';
import { BottomItem } from './BottomItem/BottomItem';



export const BottomHeader = () => {
    return (
        <div className={styles.bottomHeader}>
            <div className="container">
                <div className={styles.bottomCont}>
                    {headerBottom.map((el, i) => <BottomItem key={i} title={el.text} image={el.image} href={el.href}/>)}
                </div>
            </div>
        </div>
    );
};