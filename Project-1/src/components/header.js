import React from 'react';
import logo from '../../public/logo512.png';

export default function Header() {
    return (
        <nav className='nav-bar'>
            <img src={logo} />
            <h3 className='reactfacts'>ReactFacts</h3>
            <h4 className='project-1'>React Course - Project 1</h4>
        </nav>
    )
}