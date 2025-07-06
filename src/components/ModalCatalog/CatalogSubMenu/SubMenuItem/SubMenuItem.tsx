import type { DataItem } from '../../../../types/Catalog';
import styles from './SubMenuItem.module.sass';

export const SubMenuItem = ({ headTitle, subTitle, icon }: DataItem) => {
  return (
    <div className={styles.item}>
      <div style={{backgroundImage: `url(${icon})`}} className={styles.icon}></div>
      <p className={styles.headItem}>{headTitle}</p>
      <div className={styles.subItem}>
        {subTitle.map((el, index) => (
          <a key={index} href={el.href}>
            {el.text}
          </a>
        ))}
      </div>
    </div>
  );
};