import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Nav from './Nav'
import P from './../../common/Paragraph/P';
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
        }} to="/fly">
          <Nav.Item hoverBot borderRight widthValue={props => props.theme.Width.NavItem}>
            <Nav.Item.Icon marginValue='0 5px'><i className="fas fa-plane-departure"></i></Nav.Item.Icon>
            <P>Fly</P>
          </Nav.Item>
        </Link>
        <RightButtonWrapper>
          <Nav.Item hoverBot borderLeft flexColunm widthValue={props => props.theme.Width.NavItem}>
            <Nav.Item.Icon marginValue='0 0 -4px 0'><i className="fas fa-calendar-check"></i></Nav.Item.Icon>
            <P>Check in</P>
          </Nav.Item>
          <Nav.Item hoverBot borderLeft flexColunm widthValue={props => props.theme.Width.NavItem}>
            <Nav.Item.Icon marginValue='0 0 -4px 0'><i className="fas fa-calendar-check"></i></Nav.Item.Icon>
            <P>Check in</P>
          </Nav.Item>
          <Nav.Item hoverBot borderLeft flexColunm widthValue={props => props.theme.Width.NavItem}>
            <Nav.Item.Icon marginValue='0 0 -4px 0'><i className="fas fa-calendar-check"></i></Nav.Item.Icon>
            <P>Check in</P>
          </Nav.Item>
        </RightButtonWrapper>
      </Nav>
    )
  }
}
