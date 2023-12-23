import React from 'react';
import half_logo from '../../public/Group.png'

export default function MainBody() {
    return (
        <main className='main-body'>
            <h1 className='funfacts' >Fun facts about React</h1>
            <ul className='facts-list'>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on github</li>
                <li>Is maintained by Facebook</li>
                <li>Power thousands of enterprise apps, including mobile apps</li>
            </ul>
            <img src={half_logo} />
        </main>
    )
}