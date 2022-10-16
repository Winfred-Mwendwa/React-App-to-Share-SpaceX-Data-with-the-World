import React from 'react';
import { Navbar } from '../../common';
import { Logo } from '../../common';

import './Header.css'


function Header () {
    return (
        <div className='header'>
            <Navbar />
            <Logo />
        </div>
        
    )
}

export default Header;