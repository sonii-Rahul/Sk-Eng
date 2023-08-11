import React from 'react'
import Common from './Common'

import web from './images/Meeting-Productivity-Tips-1024x536.webp'
const About = () => {
    return (
        <>
            <Common text={'Welcome to About Page'} btn={'Contact Us'} to={'/contact'} img={web}  />
        </>
    )
}

export default About
