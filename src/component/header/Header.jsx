import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import cartimage from '../../assets/images/cart-plus-solid.svg';
import { useSelector } from 'react-redux';
import ModalList from './../list/ModalList';

function Header() {
    const mycartlist = useSelector((state) => state.addtocart);
    const [show, setshow] = React.useState(false);
    return (
        <div className='topStyle'>
            <div className="topStyleleft">
                <p className="left"><Link className="leftLink" to='/'>BlablaCart</Link></p>
            </div>
            <div className="topStyleright">
                <div className="cart">
                    <p className="cartTop">{mycartlist && mycartlist.split('#').filter(e => e.length > 5).length}</p>
                    <img src={cartimage} alt="Cart" className="CartImage" onClick={() => setshow(!show)} />
                    <div className="modal">
                        {
                            show && (
                                <ModalList />
                            )
                        }
                    </div>
                </div>
                <div className="circleA">
                    <p>ss</p>
                </div>
            </div>
        </div>
    )
}

export default Header
