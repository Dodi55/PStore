import styles from './TopSalesItem.module.sass';

export const TopSalesItem = ({data: {icon, href}}: {data: { icon: string, href: string}}) => {
    return (
        <a href={href}>
            <div 
            className={styles.slideContent}
            style={{ backgroundImage: `url(${icon})`}}
            >
    
            </div>
        </a>
    );
};