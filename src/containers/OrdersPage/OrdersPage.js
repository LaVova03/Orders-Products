import Orders from '../../components/Orders/Orders';
import styles from './OrdersPage.module.css';

const OrdersPage = () => {
    return (
        <div className={styles.orders__page}>
            <Orders />
        </div>
    )
}

export default OrdersPage;