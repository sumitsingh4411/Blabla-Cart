import React from 'react'
import { useSelector } from 'react-redux';
import Modal from './../modal/Modal';
import './ProductList.css'

function ModalList() {
    const mycartlist = useSelector((state) => state.addtocart);
    console.log('hello sumit singh', mycartlist)
    return (
        <div 
        className="mymodal"
        style={{
            cursor:'default',
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            top: 90,
            right: 35,
            width: '30vw',
            padding: 10,
            scrollBehavior:'-moz-initial',
        }}>
            {
                mycartlist.map(e => (
                    <Modal name={e.name} imgsrc={e.imgsrc} />
                ))
            }
        </div>
    )
}

export default ModalList
