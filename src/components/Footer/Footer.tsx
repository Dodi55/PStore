import { nanoid } from '@reduxjs/toolkit';
import styles from './Footer.module.sass';
import { useMediaQuery } from 'react-responsive';
import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react';


const footerData = [
    {
        headerTitle: 'Покупательский сервис',
        ul: [
            "О нас",
            "Акции и скидки",
            "Наш блог",
            "Бонусная программа",
            "Кредит",
            "Трейд-ин",
            "Оплата и доставка",
            "Гарантия",
            "Возврат",
            "Отзывы",
            "Как оставить отзыв",
            "Контакты",
        ]
    },
    {
        headerTitle: 'Интернет-магазин',
        ul: [
            "Идеальное БУ",
            "iPhone",
            "Watch",
            "AirPods",
            "MacBook",
            "Игровые приставки",
            "Dyson",
            "iPad",
            "Гаджеты",
            "Аксессуары"
        ]
    },
    {
        headerTitle: 'Сервис',
        ul: [
            "Ремонт iPhone",
            "Ремонт MacBook",
            "Ремонт iPad",
            "Ремонт Apple Watch"
        ]
    },
    {
        headerTitle: 'Контакты',
        ul: [
            "store@maxmobiles.ru",
            "Оферта",
            "Политика конфиденциальности",
            "Согласие на обработку персональных данных"
        ]
    },
]

export const Footer = () => {
    const isMobile = useMediaQuery({ maxWidth: 1099 });

    return (
        <footer className={styles.footer}>
            <div className='container'>
                {isMobile 
                    ?
                    <div className={styles.footerBoxMobile}>
                        {footerData.map(el => <FooterItemMobile title={el.headerTitle} text={el.ul} key={nanoid()}/>)}
                    </div>
                    :
                    <div className={styles.footerBox}>
                        {footerData.map(el => <FooterItem headerTitle={el.headerTitle} ul={el.ul} key={nanoid()}/>)}
                    </div>
                }
            </div>
        </footer>
    );
};


export const FooterItem = ({headerTitle, ul}) => {
    return (
        <div>
            <h3 className={styles.headerTitle}>{headerTitle}</h3>
            <ul className={styles.ul}>
                {ul.map(el => <li><a href="#">{el}</a></li>)}
            </ul>
        </div>
    );
};

export function FooterItemMobile({ title, text }) {
  return (
    <Disclosure>
      {({ open }) => (
        <div
          style={{
            width: '100%',
            borderRadius: 4,
            margin: '10px 0',
            boxShadow: '0 1px 2px -2px rgba(0, 0, 0, 0.1)',
          }}
        >
          <DisclosureButton
            style={{
              width: '100%',
              textAlign: 'center',
              padding: '10px 0',
              cursor: 'pointer',
              userSelect: 'none',
              background: 'none',
              border: 'none',
              borderRadius: 4,
              outline: 'none',
              fontWeight: 500,
              color: open ? '#5d5d5d' : '#000',
            }}
          >
            {title}
          </DisclosureButton>

          <Transition
            show={open}
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 max-h-0"
            enterTo="opacity-100 max-h-[200px]"
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100 max-h-[200px]"
            leaveTo="opacity-0 max-h-0"
          >
            <DisclosurePanel
              static
              style={{
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                padding: '10px',
                borderTop: '1px solid #ccc',
                whiteSpace: 'normal',
                transition: 'all 0.3s ease',
              }}
            >
              {text.map((el, idx) => (
                <a
                  key={idx}
                  href="#"
                  style={{
                    marginBottom: 6,
                    textDecoration: 'none',
                    color: '#000',
                    fontSize: 14,
                  }}
                >
                  {el}
                </a>
              ))}
            </DisclosurePanel>
          </Transition>
        </div>
      )}
    </Disclosure>
  );
}