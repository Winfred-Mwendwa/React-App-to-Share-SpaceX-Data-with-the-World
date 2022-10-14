import React from 'react';
import { Navbar } from '../../common';
import './Header.css'


function Header () {
    return (
        <section className='header'>
            <section className='logo'>
                <a href="/" className="href logo">SPACEX</a>
            
            </section>
            <section className='navbar'>
                <Navbar />
                
            </section>
            
        </section>
        
    )
}

export default Header;