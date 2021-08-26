import React from 'react'
import Product from '../product/Product'
import productList from './../common/productList';
import './ProductList.css';
import { useSelector } from 'react-redux';

function ProductList() {

    const mycatrgory = useSelector((state) => state.choosecategory);

    return (
        <div className="productList">
            {
                productList.filter(e => e.category === mycatrgory).map(e => (
                    <Product imgscr={e.imgsrc} name={e.name} key={e.id} />
                ))
            }
        </div>
    )
}

export default ProductList
