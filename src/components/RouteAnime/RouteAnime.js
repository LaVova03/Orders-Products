import styles from './RouteAnime.module.css';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RouteAnime = ({ children1, children2 }) => {
    const location = useLocation();
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);

    useEffect(() => {
        if (location.pathname === '/') {
            setTimeout(() => {
                setIsVisible1(true)
            }, 0)
            setIsVisible2(false)
        } else if (location.pathname === '/products') {
            setTimeout(() => {
                setIsVisible2(true)
            }, 0)
            setIsVisible1(false)
        }
    }, [location.pathname]);

    return (
        <div>
            <div className={`${styles.page__transition} ${isVisible1 ? styles.visible : ''}`} >
                {children1}
            </div>
            <div className={`${styles.page__transition2} ${isVisible2 ? styles.visible2 : ''}`} >
                {children2}
            </div>
        </div>
    );
};

export default RouteAnime;
