import React from 'react'
import './header.css'
import path from '../imgs/path.jpg'

export default function Header() {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className='headerTitleSm'>Fabulous & Fantastical</span>
                <span className='headerTitleLg'>Alison Wonderland</span>
            </div>
            <img
                className='headerImg'
                src={path}
            />
        </div>
    )
}
