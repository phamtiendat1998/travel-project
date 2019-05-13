import React, { Component } from 'react'
import styled from 'styled-components';
import MapCurl from './../../layouts/MapCurl/MapCurl';

const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow:hidden;
`;

export default class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <MapCurl></MapCurl>
      </HomeWrapper>
    )
  }
}
