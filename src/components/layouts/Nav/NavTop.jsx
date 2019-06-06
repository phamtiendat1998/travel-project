import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav'
import P from './../../common/Paragraph/P';
import UserDropdown from './../UserDropdown/UserDropdown';
const Logo = styled.div`
  width: ${props => props.theme.Size.LogoXl};
  height: ${props => props.theme.Size.LogoXl};
  background-color: ${props => props.theme.Color.Red};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.theme.Font.Logo};
  color: white;
`;

const SearchBar = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-grow: 1;
`;

const SearchBarIcon = styled.div`
  color: ${props => props.theme.Color.Gray};
  display: flex;
  align-items: center;
  justify-content: start;
`;

const SearchInput = styled.input`
  border: none;
  width: 80%;
  font-size: ${props => props.theme.Font.P};
  :focus {
    outline: none;
  }
  ::placeholder{
    color: ${props => props.theme.Color.Gray};
    font-size: ${props => props.theme.Font.P}
  }
`;

export default class Navtop extends Component {
  renderUserLogin = () => {
    if (this.props.isLogin === true) {
      return <Nav.Item hoverTop borderLeft widthValue={props => props.theme.Width.NavItem}>
        <UserDropdown handleLogOut={this.props.handleLogOut}></UserDropdown>
      </Nav.Item>
    } else {
      return <Link style={{
        textDecoration: 'none',
        color: 'black'
      }}
        to="/login">
        <Nav.Item hoverTop borderLeft widthValue={props => props.theme.Width.NavItem}>
          <Nav.Item.Icon marginValue='0 5px'><i className="fas fa-user"></i></Nav.Item.Icon>
          <P>Login</P>
        </Nav.Item>
      </Link>
    }
  };
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
        <Nav.Item hoverTop borderLeft widthValue={props => props.theme.Width.NavItem}>
          <Nav.Item.Icon><i className="far fa-flag"></i></Nav.Item.Icon>
        </Nav.Item>
        {this.renderUserLogin()}
        <Nav.Item hoverTop borderLeft widthValue={props => props.theme.Width.NavItem}>
          <P>Help/Suport</P>
        </Nav.Item>
      </Nav>
    )
  }
}
