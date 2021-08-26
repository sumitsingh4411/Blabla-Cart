import React from 'react'
import up from '../../assets/images/chevron-up-solid.svg';
import down from '../../assets/images/chevron-down-solid.svg';
function Modal({ name, imgsrc }) {

    const [howmuch, sethowmuch] = React.useState(1);
    return (
        <div className="modal"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                border: '1px solid black',
                margin: '10px',
                width: '29vw',
            }}>
            <div className="imageStyle" style={{ flex: 1 }}>
                <img src={imgsrc}
                    alt=""
                    style={{ height:'18vh', borderRadius:10 }}
                />
            </div>
            <div className="middle" style={{ display: 'flex', flex: 2, flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ marginRight: 50 }}>
                    <p className="name" style={{padding:0, margin:0}}>{name}</p>
                </div>
                <div className="left" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                    <div style={{ marginRight: 40 }}>
                        <p className="name" style={{padding:0, margin:0}}>Quantity</p>
                    </div>
                    <div>
                        <img src={up} alt="" style={{ height: 20, cursor: 'pointer' }} onClick={() => { sethowmuch(howmuch + 1) }} />
                        <p className="name">{howmuch}</p>
                        <img src={down} alt="" onClick={() => { if (howmuch >= 1) sethowmuch(howmuch - 1) }} style={{ height: 20, cursor: 'pointer' }} />
                    </div>
                </div>
            </div>
            <div className="last" style={{ flex: 1 }}>
                <button >REMOVE</button>
            </div>
        </div>
    )
}

export default Modal
