import React from 'react'
import './Product.css';
import { useDispatch } from 'react-redux';
import { AddtoCart } from '../../redux/actions';


function Product({ imgscr, name }) {
    const dispatch = useDispatch();
    return (
        <div className="product">
            <div className="imgageofproduct">
                <img src={imgscr} alt="laptop"
                    style={{ height: '10vh', width: '100%', objectFit: 'contain' }} />
            </div>
            <div className="bottom">
                <p className="name">{name}</p>
                <button style={{ width: '10vw', height: '4vh' }} onClick={() => dispatch(AddtoCart(name, imgscr))}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product
