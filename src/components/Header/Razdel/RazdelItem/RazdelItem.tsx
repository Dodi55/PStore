import type { IconType } from 'react-icons';
import styles from './RazdelItem.module.sass';
import type { FC } from 'react';

type Props = {
    image: IconType;
};

export const RazdelItem: FC<Props> = ({ image: Icon }) => {
    return (
        <div className={styles.item}>
            <Icon className={styles.icon}/>
        </div>
    );
};