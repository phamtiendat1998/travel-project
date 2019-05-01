import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

// Components
import Intro from '../../page/Intro/intro'
import Home from '../../page/Home/home'
import Navtop from '../../layouts/nav-top/Navtop'
import NavBot from '../../layouts/nav-bot/NavBot'

// Style
const MainWrapper = styled.div`
    width: 100%;
    height: ${props => props.theme.heightMainXl};
    position: fixed;
    top: 8%;
    left: 0;
    overflow: hidden;
    z-index: 1;
`;

export default class UserTemplate extends Component {
    render() {
        return (
            <div>
                <Navtop />
                <MainWrapper>
                    <Switch>
                        <Route exact path='/' component={Intro} />
                        <Route path='/home' component={Home} />
                    </Switch>
                </MainWrapper>
                <NavBot />
            </div>
        )
    }
}
