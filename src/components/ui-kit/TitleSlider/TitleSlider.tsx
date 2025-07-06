import type { FC } from 'react';
import styles from './TitleSlider.module.sass';


type Props = {
    text: string,
    positionText: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent'
}

export const TitleSlider: FC<Props> = ({text, positionText}) => {
    return (
        <div>
            <h2
            style={{ textAlign: positionText}}
            className={styles.title}
            >
                {text}
            </h2>
        </div>
    );
};