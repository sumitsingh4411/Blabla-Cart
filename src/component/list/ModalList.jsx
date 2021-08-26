import React from 'react'
import { useSelector } from 'react-redux';
import Modal from './../modal/Modal';
import './ProductList.css'

function ModalList() {
    const mycartlist = useSelector((state) => state.addtocart);
    return (
        <div
            className="mymodal"
            style={{
                cursor: 'default',
                display: 'flex',
                flexDirection: 'column',
                position: 'absolute',
                top: 90,
                right: 35,
                width: '30vw',
                padding: 10,
                scrollBehavior: '-moz-initial',
            }}>
            {
                mycartlist.split('#').map((e, index) => (
                    <>
                        {
                            e.length >= 5 && (
                                <Modal name={e.split(',')[0]} imgsrc={e.split(',')[1]} key={index} />
                            )
                        }
                    </>
                ))
            }
        </div>
    )
}

export default ModalList
