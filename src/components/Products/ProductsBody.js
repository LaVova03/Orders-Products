import styles from './ProductsBody.module.css';
import { products } from '../../data';
import { useEffect, useState } from 'react';
import BodyProducts from '../BodyProducts/BodyProducts';

const Products = () => {

    const [isType, addType] = useState([]);
    const [isSpecification, addSpecification] = useState([]);

    const [isSelectType, setSelectType] = useState('All');
    const [isSelectSpecification, setSelectSpecification] = useState('All');

    useEffect(() => {
        const uniqueTypes = ['All', ...Array.from(new Set(products.map(product => product.type)))];
        addType(uniqueTypes);

        const uniqueSpecification = ['All', ...Array.from(new Set(products.map(product => product.specification)))];
        addSpecification(uniqueSpecification);
    }, []);

    const handleTypeChange = (e) => {
        setSelectType(e.target.value)
    };

    const handleSpecificationChange = (e) => {
        setSelectSpecification(e.target.value)
    };

    return (
        <div className={styles.header__products}>
            <ul>
                <li>Продукты / {products.length}</li>
                <li className={styles.products__selector}>
                    <label>Тип:</label>
                    <select value={isSelectType} onChange={handleTypeChange}>
                        {isType.map((el, index) => (
                            <option key={index} value={el}> {el}</option>
                        ))}
                    </select>
                </li>
                <li className={styles.products__selector}>
                    <label>Спецификация:</label>
                    <select value={isSelectSpecification} onChange={handleSpecificationChange}>
                        {isSpecification.map((el, index) => (
                            <option key={index} value={el}> {el}</option>
                        ))}
                    </select>
                </li>
            </ul>
            <BodyProducts isSelectType={isSelectType} isSelectSpecification={isSelectSpecification} />
        </div>
    )
}

export default Products;