import React from 'react'
import Summary from './summary/summary.component'
import AboutMe from './about-me/about-me.component'
import './main.styles.scss'
export default function Main() {
    return (
        <main>
            <Summary />
            <AboutMe />
        </main>
    )
}
