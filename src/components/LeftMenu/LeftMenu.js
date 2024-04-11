import styles from './LeftMenu.module.css';
import React from 'react';
import Gratis from '../../assets/gratis.png';
import { addPhoto } from '../../redux/Main/actions';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

const LeftMenu = () => {

    const navigation = useNavigate();
    const dispatch = useDispatch();
    const isPhoto = useSelector(state => state.myReducer.isPhoto);
    const location = useLocation();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            dispatch(addPhoto(reader.result));
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className={styles.left__menu__wrap}>
            <div>
                {isPhoto ?
                    <label>
                        <img id={styles.photo} src={isPhoto} alt="logo" />
                    </label>
                    : <label>Your<br />photo<br />here</label>
                }
                <label htmlFor="fileInput">
                    <img id={styles.gratis} src={Gratis} alt="Upload" />
                </label>
                <input
                    id="fileInput"
                    type="file"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
            </div>
            <ul>
                <li>
                    <button
                        onClick={() => {
                            if (location.pathname !== '/') {
                                navigation('/')
                            }
                        }}
                    >ПРИХОД
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => {
                            if (location.pathname !== '/products') {
                                navigation('/products')
                            }
                        }}
                    >ПРОДУКТЫ</button>
                </li>
                <li>
                    <button>ГРУППЫ</button>
                </li>
                <li>
                    <button>ПОЛЬЗОВАТЕЛИ</button>
                </li>
                <li>
                    <button>НАСТРОЙКИ</button>
                </li>
            </ul>
        </div>
    )
}

export default LeftMenu;