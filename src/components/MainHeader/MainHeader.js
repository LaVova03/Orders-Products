import styles from './MainHeader.module.css';
import React, { useState, useEffect } from 'react';
import Watch from '../../assets/watch.png';

const MainHeader = () => {

    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    const dayOfWeek = daysOfWeek[currentDateTime.getDay()];
    const date = currentDateTime.toLocaleDateString();
    const time = currentDateTime.toLocaleTimeString();

    return (
        <div className={styles.main__header__wrap}>
            <div className={styles.header__wrap__logo}>
                <div className={styles.main__header__logo} ></div>
                <div className={styles.main__header__text}>INVENTORY</div>
            </div>
            <div className={styles.header__wrap__input} >
                <input
                    placeholder='Поиск'
                />
            </div>
            <div className={styles.main__header__date}>
                <ul>
                    <li>{dayOfWeek}</li>
                    <li>
                        <ul>
                            <li>{date}</li>
                            <li>
                                <img
                                    className={styles.main__header__watch}
                                    src={Watch} alt='logo' />
                                {time}
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MainHeader;