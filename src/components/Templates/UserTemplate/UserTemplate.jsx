import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Intro from '../../page/Intro/intro'
import Home from '../../page/Home/home'
import './_userTemplate.scss'
import Navtop from '../../layouts/nav-top/Navtop'
import Navbot from '../../layouts/nav-bot/Navbot'




export default class UserTemplate extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Fragment>
                        <Navtop />
                        <div className="main-wrapper">
                            <Route path='' component={Intro} />
                            <Route path='/home' component={Home} />
                        </div>
                        <Navbot />
                    </Fragment>
                </BrowserRouter>
            </div>
        )
    }
}
