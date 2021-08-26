import React from 'react'
import Button from '../common/Button'
import { useSelector } from 'react-redux';


function Sidebar() {
    const mycatrgory = useSelector((state) => state.choosecategory);
    const catergoryName = ["Electronics", "Fashion", "Appliances"];
    return (
        <div className="sidebar">
            {
                catergoryName.map(e => (
                    <Button
                        key={e}
                        title={e}
                        backgroundcolor={mycatrgory === e ? 'red' : ''} />
                ))
            }
        </div>
    )
}

export default Sidebar
