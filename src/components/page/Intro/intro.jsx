import React, { Component } from 'react';
import styled from 'styled-components';

const IntroWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const IntroVideo = styled.video`
  width: 100%;
  height: auto;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
`;
const IntroLayer = styled.div`
  width: 100%;
  height: 100%; 
  background-color: black;
  opacity: 0.4;
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
`;

export default class Intro extends Component {
  render() {
    return (
      <IntroWrapper>
        <IntroVideo src="./video-intro.mp4" autoPlay loop></IntroVideo>
        <IntroLayer></IntroLayer>
      </IntroWrapper>
    )
  }
}
