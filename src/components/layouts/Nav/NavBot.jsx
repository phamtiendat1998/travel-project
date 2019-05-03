import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// Components
import Nav from './Nav'
import Para from '../../common/Paragraph/Para'

// Style
const RightButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default class NavBot extends Component {
  render() {
    return (
      <Nav bottom>
        <Link style={{
          textDecoration: 'none',
          color: 'black'
        }} to="/home">
          <Nav.Item hoverBot borderRight widthValue={props => props.theme.widthButtonFly}>
            <Nav.Item.Icon marginValue='0 5px'><i className="fas fa-plane-departure"></i></Nav.Item.Icon>
            <Para.FontNav>Fly</Para.FontNav>
          </Nav.Item>
        </Link>
        <RightButtonWrapper>
          <Nav.Item hoverBot borderLeft flexColunm widthValue={props => props.theme.widthNavItem}>
            <Nav.Item.Icon marginValue='0 0 -4px 0'><i className="fas fa-calendar-check"></i></Nav.Item.Icon>
            <Para.FontNav>Check in</Para.FontNav>
          </Nav.Item>
          <Nav.Item hoverBot borderLeft flexColunm widthValue={props => props.theme.widthNavItem}>
            <Nav.Item.Icon marginValue='0 0 -4px 0'><i className="fas fa-calendar-check"></i></Nav.Item.Icon>
            <Para.FontNav>Check in</Para.FontNav>
          </Nav.Item>
          <Nav.Item hoverBot borderLeft flexColunm widthValue={props => props.theme.widthNavItem}>
            <Nav.Item.Icon marginValue='0 0 -4px 0'><i className="fas fa-calendar-check"></i></Nav.Item.Icon>
            <Para.FontNav>Check in</Para.FontNav>
          </Nav.Item>
        </RightButtonWrapper>
      </Nav>
    )
  }
}
