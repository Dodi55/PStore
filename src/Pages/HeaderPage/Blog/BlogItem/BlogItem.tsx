import styles from './BlogItem.module.sass';

export const BlogItem = ({image, text}) => {
    return (
        <div className={styles.item}>
            <div 
            className={styles.logo}
            style={{backgroundImage: `url(${image})`}}>
            </div>
            <p className={styles.text}>{text}</p>
        </div>
    );
};