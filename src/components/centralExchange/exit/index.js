import React, { useState } from 'react'
import Info from 'components/centralExchange/exit/Info'
import BarcodeManage from 'components/centralExchange/exit/BarcodeManage'
import "components/centralExchange/centralExchange.scss"

export default function ExitCentralExchange() {
    const [postInfo, setPostInfo] = useState({})
    const [showBarcodeSection, setShowBarcodeSection] = useState(false)

    return (
        <div className='section-card'>
            <Info setValues={setPostInfo} barcodeSection={setShowBarcodeSection} />
            {showBarcodeSection && <BarcodeManage postInfo={postInfo} />}
        </div>
    )
}