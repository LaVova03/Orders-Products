import styles from './ProductsPage.module.css';
import MainHeader from '../../components/MainHeader/MainHeader';
import LeftMenu from '../../components/LeftMenu/LeftMenu';
import Products from '../../components/Products/ProductsBody';

const ProductsPage = () => {
  return (
    <div className={styles.main__container}>
      <MainHeader />
      <div className={styles.products__wrap}>
        <LeftMenu />
        <Products />
      </div>
    </div>
  )
}

export default ProductsPage;
