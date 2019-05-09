import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// Components
import Nav from './Nav'
import Para from '../../common/Paragraph/Para'
import UserDropdownContainer from './../UserDropdown/UserDropdownContainer';

// Style
const Logo = styled.div`
  width: ${props => props.theme.widthLogoXl};
  height: ${props => props.theme.heightLogoXl};
  background-color: ${props => props.theme.colorRed};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.theme.sizeLogoXl};
  color: white;
`

const SearchBar = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-grow: 1;
`

const SearchBarIcon = styled.div`
  color: ${props => props.theme.txtGrayColor};
  display: flex;
  align-items: center;
  justify-content: start;
`

const SearchInput = styled.input`
  border: none;
  width: 80%;
  font-size: ${props => props.theme.fontNavXl};
  :focus {
    outline: none;
  }
  ::placeholder{
    color: ${props => props.theme.txtGrayColor};
    font-size: ${props => props.theme.fontNavXl}
  }

`

export default class Navtop extends Component {
  render() {
    return (
      <Nav top>
        <Logo>
          <p><i className="fas fa-globe"></i></p>
        </Logo>
        <SearchBar>
          <SearchBarIcon><Nav.Item.Icon Search marginValue='0 10px'><i className="fas fa-search"></i></Nav.Item.Icon></SearchBarIcon>
          <SearchInput className="" type="text" name="" placeholder="Search Flight, Promotion and Travel tips...." />
        </SearchBar>
        <Nav.Item hoverTop borderLeft widthValue={props => props.theme.widthNavItem}>
          <Nav.Item.Icon><i className="far fa-flag"></i></Nav.Item.Icon>
        </Nav.Item>
        {/* <Link style={{
          textDecoration: 'none',
          color: 'black'
        }} to="/login">
          <Nav.Item hoverTop borderLeft widthValue={props => props.theme.widthNavItem}>
            <Nav.Item.Icon marginValue='0 5px'><i className="fas fa-user"></i></Nav.Item.Icon>
            <Para.FontNav>Login</Para.FontNav>
          </Nav.Item>
        </Link> */}
        <Nav.Item hoverTop borderLeft widthValue={props => props.theme.widthNavItem}>
          <UserDropdownContainer></UserDropdownContainer>
        </Nav.Item>
        <Nav.Item hoverTop borderLeft widthValue={props => props.theme.widthNavItem}>
          <Para.FontNav>Help/Suport</Para.FontNav>
        </Nav.Item>
      </Nav>
    )
  }
}
