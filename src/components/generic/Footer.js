import React from 'react'
import { Layout } from 'antd';

import 'assets/sass/footer.scss'
const { Footer: AntFooter } = Layout
const year = new Date().getFullYear()
function Footer() {
    return (
        <AntFooter className='footer'>
            <h4>Copyright ©{year} All rights reserved</h4>
        </AntFooter>
    )
}

export default Footer
