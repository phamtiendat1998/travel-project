import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import Home from '../Home/Home';
import SideBar from './../../layouts/SideBar/SideBar';
import Profile from '../Profile/Profile';


const FlyWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;
const ContentWrapper = styled.div`
    width: ${props => props.theme.widthCtFly};
    height: 100%;
`;
const SideBarWrapper = styled.div`
  width: ${props => props.theme.widthSideBar};
  height: 100%;
`;
export default class Fly extends Component {
  render() {
    return (
      <FlyWrapper>
        <ContentWrapper>
          <Switch>
            <Route exact path='/fly' component={Home} />
            <Route path='/fly/profile' component={Profile} />
          </Switch>
        </ContentWrapper>
        <SideBarWrapper>
          <SideBar />
        </SideBarWrapper>
      </FlyWrapper >
    )
  }
}
