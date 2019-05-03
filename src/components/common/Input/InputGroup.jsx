import React, { Component } from 'react';
import styled from 'styled-components';
import Label from './Label';
import Input from './Input';

const InputGroupWrapper = styled.div`
    width : 100%;
    background-color: white;
    padding: 1% 2%;
    margin-bottom: 2%;
    border : 1px solid ${props => props.theme.borderGrayColor};
    box-shadow: ${props => props.focusStatus ? props.theme.boxSInputGroup : "none"};
    transition: 0.5s;
    position: relative;
`;

export default class InputGroup extends Component {
  render() {
    return (
      <InputGroupWrapper>
        <Label>{this.props.labelContent}</Label>
        <Input type={this.props.typeInput} placeholder={this.props.placeHolder}></Input>
      </InputGroupWrapper>
    )
  }
}
