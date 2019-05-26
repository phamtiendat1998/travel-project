import React, { Component } from 'react';
import styled from 'styled-components';
import H5 from './../../common/Paragraph/H5';
import H2 from './../../common/Paragraph/H2';
import Input from '../../common/Input/InputSearchTrip';
import PositionInput from '../../common/Position/PositionInput'

const Sidebar = styled.div`
  width: 100%;
  height: 100%;
`;

const SideBarText = styled.div`
  width: 100%;
  height: 30%;
  background-color: ${props => props.theme.Color.TopSideBar};
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
  background-color: ${props => props.theme.Color.BotSideBar};

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
  color: ${props => props.theme.Color.Gray};
  font-size: ${props => props.theme.Font.P};
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
          <H5>
            Welcome to
        </H5>
          <H2 style={StyleTitle}>
            Inovation <br /> Airlines
        </H2>
        </SideBarText>
        <SideBarBot>
          <H5 style={StyleText}>
            Book a flight
        </H5>
          <SideBarInput>
            <PositionInput colorParam={props => props.theme.Color.PsRed} colorBefore={props => props.theme.Color.PsURed}></PositionInput>
            <Span>From</Span>
            <Input placeholder="Enter a city"></Input>
          </SideBarInput>
          <SideBarInput>
            <PositionInput colorParam={props => props.theme.Color.PsBlue} colorBefore={props => props.theme.Color.PsUBlue}></PositionInput>
            <Span>To</Span>
            <Input placeholder="Enter a city"></Input>
          </SideBarInput>
        </SideBarBot>
      </Sidebar>
    )
  }
}
