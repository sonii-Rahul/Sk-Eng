import React from 'react'
import Common from './Common'
import web from './images/focus.svg'
const Home = () => {
    return (
        <>
            <Common  text={'Grow your business with'} btn={'Get Started'} to={'/service'} img={web} />
        </>
    )
}

export default Home
