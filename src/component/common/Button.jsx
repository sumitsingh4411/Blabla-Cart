import React from 'react'
import './Style.css'
import { useDispatch } from 'react-redux';
import { categoryType } from './../../redux/actions/index';

function Button({ title, backgroundcolor }) {
    const dispatch = useDispatch();
    return (
        <div className="mybutton"
            onClick={()=>dispatch(categoryType(title))}
            style={{ background: backgroundcolor, color: backgroundcolor === 'red' ? 'white' : '' }}>
            <p className="mybuttonText">{title}</p>
        </div>
    )
}

export default Button
