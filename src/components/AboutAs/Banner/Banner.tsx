import styles from './Banner.module.sass';

export const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className='container'>
                <img 
                src="https://maxmobiles.ru/images/companies/1/Фото%20сотрудников/rounded-in-photoretrica.png?1667381773324" 
                alt="" 
                className={styles.image}
                />
            </div>
        </div>
    );
};