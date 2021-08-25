import React from 'react'
import { Link } from 'react-router-dom'

function Errorpage() {
    return (
        <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <img src="https://i.gifer.com/7iJR.gif" alt="404 page"
                style={{ width: '30vw', height: '40vh' }}
            />
            <p style={{ fontSize: '24px', fontWeight: 'bolder' }}><Link to='/'>Go to Home page</Link></p>
        </div>
    )
}

export default Errorpage
