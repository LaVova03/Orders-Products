import styles from './BodyOrders.module.css';
import React, { useState } from 'react';
import Plus from '../../assets/transparent.png';
import Backet from '../../assets/backet.png';
import Right from '../../assets/right.png';
import { orders } from '../../data';
import ModalInfoOrders from '../ModalInfoOrders/ModalInfoOrders';
import BootstrapDelete from '../BootstrapDelete/BootstrapDelete';

const BodyOrders = () => {
    const [isModal, setModal] = useState(false);
    const [isDeleteModal, showModalDelete] = useState(false);
    const [isIdOrders, setIdOrders] = useState('');

    const calculateTotalPriceUsd = (products) => {
        let totalPrice = 0;
        products.forEach(product => {
            totalPrice += product.price[0].value;
        });
        return totalPrice;
    };

    const calculateTotalPriceUah = (products) => {
        let totalPrice = 0;
        products.forEach(product => {
            totalPrice += product.price[1].value;
        });
        return totalPrice;
    };

    return (
        <div className={styles.body__orders__wrap}>
            <div>
                <button>
                    <img src={Plus} alt='logo' />
                </button>
                <label>Приходы / {orders.length}</label>
            </div>
            {orders.map((el, index) => (
                <ul key={index}>
                    {!isModal ? <li>{el.title}</li> : null}
                    <li>
                        <button
                            onClick={() => {
                                setIdOrders(el.id);
                                setModal(true);
                                showModalDelete(false);
                            }}
                        >
                            <img src={el.imgage} alt='logo' />
                        </button>
                    </li>
                    <li>
                        <label>{el.products.length}</label><br />продукта
                    </li>
                    <li>{el.date}</li>
                    {!isModal ?
                        <>
                            <li>
                                {calculateTotalPriceUsd(el.products)} $
                                <br />
                                <label>{calculateTotalPriceUah(el.products)} UAH</label>
                            </li>
                            <li>
                                <button
                                    onClick={() => {
                                        setIdOrders(index)
                                        showModalDelete(true);
                                        setModal(false);
                                    }}
                                >
                                    <img src={Backet} alt='logo' />
                                </button>
                            </li>
                        </>
                        : isModal && el.id === isIdOrders ?
                            <li id={styles.orders__body__right}>
                                <img src={Right} alt='logo' />
                            </li>
                            : null
                    }
                </ul>
            ))}
            <div className={`${styles.modal__info} ${isModal ? '' : styles.modal__info__none}`}>
                <ModalInfoOrders id={isIdOrders} setModal={setModal} />
            </div>
            {isDeleteModal ?
                <BootstrapDelete isDeleteModal={isDeleteModal} showModalDelete={showModalDelete} index={isIdOrders} />
                : null}
        </div>
    )
}

export default BodyOrders;
