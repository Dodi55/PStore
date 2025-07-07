import { TitleSlider } from '../../ui-kit/TitleSlider/TitleSlider';
import styles from './OurEmployees.module.sass';

const personal = [
    {
        name: 'Илья',
        photo: 'https://maxmobiles.ru/images/companies/1/about/ilia.png',
    },
    {
        name: 'Хана',
        photo: 'https://maxmobiles.ru/images/companies/1/about/hana.jpg',
    },
    {
        name: 'Марина',
        photo: 'https://maxmobiles.ru/images/companies/1/about/Marina-302.jpg',
    },
    
    {
        name: 'Виталик',
        photo: 'https://maxmobiles.ru/images/companies/1/about/vitalik.png',
    },
    {
        name: 'Юра',
        photo: 'https://maxmobiles.ru/images/companies/1/about/yura-300.jpg',
    },
    {
        name: 'Валера',
        photo: 'https://maxmobiles.ru/images/companies/1/about/Valera.png',
    },
    
    {
        name: 'Максим',
        photo: 'https://maxmobiles.ru/images/companies/1/about/alexander.png',
    },
    {
        name: 'Андрей',
        photo: 'https://maxmobiles.ru/images/companies/1/about/andreiy.png',
    },
    {
        name: 'Илья',
        photo: 'https://maxmobiles.ru/images/companies/1/about/ilia-2.png',
    },


]

export const OurEmployees = () => {
    return (
        <div className={styles.ourEmployees}>
            <div className="container">
                <TitleSlider positionText='left' text='Наши сотрудники' />
                
                <p className={styles.address}>г. Севастополь, пр-т Нахимова, 19 – ТЦ «Детский мир» – фирменный магазин и сервисный центр Apple</p>

                <div className={styles.personalsBox}>
                    {personal.map(el => (
                        <div className={styles.personalItem}>
                            <img 
                            src={el.photo} alt="" 
                            width={222}
                            className={styles.image}
                            />
                            <p>{el.name}</p>
                        </div>
                    ))
                    }
                </div>


            </div>
        </div>
    );
};