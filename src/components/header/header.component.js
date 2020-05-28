import React from 'react'
import Navbar from './navbar/navbar.component'
import Banner from './banner/banner.component'
import './header.styles.scss'

export default function Header() {
    return (
        <header>      
            <Banner /> 
            <Navbar />
      </header>
    )
}
