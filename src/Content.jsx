import React from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'
const Content = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/service" component={Services} />
                <Route exact path="/contact" component={Contact} />
                <Redirect to="/"/>
            </Switch>
        </>
    )
}

export default Content
