import React, { Component } from 'react';
import styled from 'styled-components';

import Para from '../../common/Paragraph/Para';
import Input from '../../common/Input/InputSearchTrip';
import PositionInput from '../../common/Position/PositionInput'

const Sidebar = styled.div`
  width: 100%;
  height: 100%;
`;

const SideBarText = styled.div`
  width: 100%;
  height: 30%;
  background-color: ${props => props.theme.bgTopSideBar};
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding-left: 15px;
  font-weight: 600;
`;

const SideBarBot = styled.div`
  width: 100%;
  height: 70%;
  padding: 0 15px;
  padding-top: 15px;
  background-color: ${props => props.theme.bgBotSideBar};

`;

const SideBarInput = styled.div`
  width: 100%;
  height: 40px;
  background-color: white;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Span = styled.span`
  width: 50px;
  color: ${props => props.theme.txtGrayColor};
  font-size: ${props => props.theme.fontP};
  font-weight: 600;
  margin: 0 0 0 10px;
`;

const StyleTitle = {
  lineHeight: '45px',
  color: 'white'
}

const StyleText = {
  fontWeight: '700',
}

export default class SideBar extends Component {
  render() {
    return (
      <Sidebar>
        <SideBarText>
          <Para.FontP2>
            Welcome to
        </Para.FontP2>
          <Para.FontTitle style={StyleTitle}>
            Inovation <br /> Airlines
        </Para.FontTitle>
        </SideBarText>
        <SideBarBot>
          <Para.FontP2 style={StyleText}>
            Book a flight
        </Para.FontP2>
          <SideBarInput>
            <PositionInput colorParam={props => props.theme.colorPstRed} colorBefore={props => props.theme.colorBfRed}></PositionInput>
            <Span>From</Span>
            <Input placeholder="Enter a city"></Input>
          </SideBarInput>
          <SideBarInput>
            <PositionInput colorParam={props => props.theme.colorPstBlue} colorBefore={props => props.theme.colorBfBlue}></PositionInput>
            <Span>To</Span>
            <Input placeholder="Enter a city"></Input>
          </SideBarInput>
        </SideBarBot>
      </Sidebar>
    )
  }
}
