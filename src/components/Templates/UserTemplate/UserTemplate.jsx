import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

// Components
import Intro from '../../page/Intro/Intro'
import Home from '../../page/Home/home'
import NavTop from '../../layouts/Nav/NavTop'
import NavBot from '../../layouts/Nav/NavBot'
import Login from '../../page/Login/Login'
// Style
const MainWrapper = styled.div`
    width: 100%;
    height: ${props => props.theme.heightMainXl};
    position: fixed;
    top: ${ props => props.theme.heightNavXl};
    left: 0;
    overflow: hidden;
    z-index: 1;
`;

export default class UserTemplate extends Component {
    render() {
        return (
            <div>
                <NavTop />
                <MainWrapper>
                    <Switch>
                        <Route exact path='/' component={Intro} />
                        <Route path='/login' component={Login} />
                        <Route path='/home' component={Home} />
                    </Switch>
                </MainWrapper>
                <NavBot />
            </div>
        )
    }
}
