import styles from './Orders.module.css';
import LeftMenu from '../LeftMenu/LeftMenu';
import MainHeader from '../MainHeader/MainHeader';
import BodyOrders from '../BodyOrders/BodyOrders';

const Orders = () => {
    return (
        <div>
            <MainHeader />
            <div className={styles.orders_wrap}>
                <LeftMenu />
                <BodyOrders />
            </div>
        </div>
    )
}

export default Orders;