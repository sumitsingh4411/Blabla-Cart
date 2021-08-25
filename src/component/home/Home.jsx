import React from 'react'
import Header from './../header/Header';
import ProductList from './../list/ProductList';
import Product from './../product/Product';

function Home() {
    return (
        <div>
            <Header />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ flex: 1 }}>
                    <Product />
                </div>
                <div style={{ flex: 4 }}>
                    <ProductList />
                </div>
            </div>
        </div>
    )
}

export default Home
