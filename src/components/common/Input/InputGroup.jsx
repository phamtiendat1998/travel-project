import React, { Component } from 'react';
import styled from 'styled-components';
import Label from './Label';
import Input from './Input';

const InputGroupWrapper = styled.div`
    width : 100%;
    background-color: white;
    padding: 1% 2%;
    margin-bottom: 2%;
    border : 1px solid ${props => props.alert ?  props.theme.colorRed : props.theme.borderGrayColor};
    box-shadow: ${props => props.focusStatus ? props.theme.boxSInputGroup : "none"};
    transition: 0.5s;
    position: relative;
`;

export default class InputGroup extends Component {
  constructor(props) {
    super(props);
    this.handleFocusInput = this.handleFocusInput.bind(this);
    this.handleBlurInput = this.handleBlurInput.bind(this);
  }
  state = {
    statusFocus: false,
    statusAlert: this.props.alert
  };
  handleFocusInput() {
    this.setState({
      statusFocus: true,
    });
  }

  handleBlurInput() {
    this.setState({
      statusFocus: false
    });
  }
  render() {
    return (
      <InputGroupWrapper alert={this.state.statusAlert}>
        <Label statusAlert={this.state.statusAlert} statusFocus={this.state.statusFocus}>{this.props.labelContent}</Label>
        <Input onFocus={this.handleFocusInput} onBlur={this.handleBlurInput} type={this.props.typeInput} placeholder={this.props.placeHolder}></Input>
      </InputGroupWrapper>
    )
  }
}
