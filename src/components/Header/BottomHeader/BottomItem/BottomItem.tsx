import styles from './BottomItem.module.sass';

export const BottomItem = ({image, title, href}: {title: string, image: string, href: string}) => {
    return (
        <div className={styles.item}>
            <a href={href}>
                <img src={image} alt="" />
                <p>{title}</p>
            </a>
        </div>
    );
};