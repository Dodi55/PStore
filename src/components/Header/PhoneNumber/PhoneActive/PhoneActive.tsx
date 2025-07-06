import { MdOutlineClear } from 'react-icons/md';
import styles from './PhoneActive.module.sass';
import { Icons } from './Icons/Icons';

export const PhoneActive = ({changeFunc}: {changeFunc: React.Dispatch<React.SetStateAction<boolean>>}) => {
    return (
        <div className={styles.modalWindow} onClick={(event) => event.stopPropagation()}>
            <div className={styles.phones}>
                <p><a href="tel:+78002508158">+7(800)250-81-58</a></p>
                <p><a href="tel:+78002507170">+7(800)250-71-70</a></p>
            </div>
            <p className={styles.workingTime}>Пн-Вс: 10:00-20:00</p>
            <Icons />
            <div className={styles.info}>
                <p className={styles.infoHeader}>Email</p>
                <a href='mailto:store@maxmobiles.ru' className={styles.infoText}>store@maxmobiles.ru</a>
            </div>
            <div className={styles.info}>
                <p className={styles.infoHeader}>Адрес</p>
                <p className={styles.infoText}>Россия, Севастополь, пр-т Нахимова 19</p>
            </div>
            <MdOutlineClear onClick={() => changeFunc(false)} className={styles.buttonIcon}/>
        </div>
    );
};