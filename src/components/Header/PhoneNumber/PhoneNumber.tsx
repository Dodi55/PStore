import styles from './PhoneNumber.module.sass';

import { useEffect, useRef, useState } from "react";

import { MdOutlinePhoneInTalk } from "react-icons/md";
import { PhoneActive } from './PhoneActive/PhoneActive';

export const PhoneNumber = () => {
    const [active, setActive] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setActive(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div 
        ref={ref} 
        onClick={() => setActive(prev => !prev)} 
        className={`${styles.phoneBlock} ${active ? styles.active : ''}`}
        >
            <div 
            className={styles.phone}
            >
                <MdOutlinePhoneInTalk className={styles.image}/>
                <p className={styles.number}>
                    +7(800)250-81-58
                </p>
                {active && <PhoneActive changeFunc={setActive}/>}
            </div>
        </div>
    );
};