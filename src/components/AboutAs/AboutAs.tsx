import styles from './AboutAs.module.sass';
import { Banner } from './Banner/Banner';
import { OurEmployees } from './OurEmployees/OurEmployees';

import { Text } from './Text/Text';

export const AboutAs = () => {
    return (
        <div>
            <Banner />
            <Text />
            <OurEmployees />
        </div>
    );
};