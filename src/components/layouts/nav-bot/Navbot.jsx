import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// Components
import Nav from '../Nav/Nav'

// Style
const RightButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyleLink = {
  textDecoration: 'none',
  color: 'black'
};
const StyleMBIcon = {
  marginBottom: '-4px'
};
const StyleMRIcon ={
  marginRight: '5px'
};
export default class NavBot extends Component {
  render() {
    return (
      <Nav bottom>
        <Link style={StyleLink} to="/home" className="button-fly border-right">
          <Nav.Item widthValue={props => props.theme.widthButtonFly}>
            <span style={StyleMRIcon}><i className="fas fa-plane-departure"></i></span>
            <p>Fly</p>
          </Nav.Item>
        </Link>
        <RightButtonWrapper>
          <Nav.Item flexColunm widthValue={props => props.theme.widthNavItem}>
            <span style={StyleMBIcon}><i className="fas fa-calendar-check"></i></span>
            <p>Check in</p>
          </Nav.Item>
          <Nav.Item flexColunm widthValue={props => props.theme.widthNavItem}>
            <span style={StyleMBIcon}><i className="fas fa-calendar-check"></i></span>
            <p>Check in</p>
          </Nav.Item>
          <Nav.Item flexColunm widthValue={props => props.theme.widthNavItem}>
            <span style={StyleMBIcon}><i className="fas fa-calendar-check"></i></span>
            <p>Check in</p>
          </Nav.Item>
        </RightButtonWrapper>
      </Nav>
    )
  }
}
