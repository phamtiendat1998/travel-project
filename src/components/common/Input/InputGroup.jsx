import React, { Component } from 'react';
import styled from 'styled-components';
import Label from './Label';
import Input from './Input';

const InputGroupWrapper = styled.div`
    width : 100%;
    background-color: white;
    padding: 1% 2%;
    margin-bottom: 2%;
    border-bottom : 1.5px solid ${props => props.isAlert === 0 ? props.theme.Color.Gray + "!important" : null};
    border-bottom : 1.5px solid ${props => props.isAlert === true ? props.theme.Color.Alert + "!important" : null};
    border-bottom : 1.5px solid ${props => props.isAlert === false ? props.theme.Color.Success + "!important" : null};
    box-shadow: ${ props => props.isFocus ? '0px 0px 15px 3px #80808040' : "none"};
    transition: 0.5s;
    position: relative;
`;

export default class InputGroup extends Component {
  constructor(props) {
    super(props);
    this.handleFocusInput = this.handleFocusInput.bind(this);
    this.handleBlurInput = this.handleBlurInput.bind(this);
    this.turnOnAlert = this.turnOnAlert.bind(this);
    this.handleValidateInput = this.handleValidateInput.bind(this);
    this.setAndOutInput = this.setAndOutInput.bind(this);
    this.state = {
      isFocus: false,
      isAlert: this.props.isAlert,
      ContentLabel: this.props.ContentLabel,
      ContentAlert: this.props.ContentAlert
    }
    this.Alert = {
      null: "Không được để trống",
    }
  }
  turnOnAlert(message) {
    this.setState({
      isAlert: true,
      ContentLabel: message
    });
  }
  turnOffAlert(message) {
    this.setState({
      isAlert: false,
      ContentLabel: message
    });
  }
  setAndOutInput(name, value, isValid) {
    let dataInput = {};
    dataInput.name = name;
    dataInput.value = value;
    dataInput.isValid = isValid;
    this.props.handleGetValue(dataInput);
  }
  handleValidateInput(event) {
    const { name, value } = event.target;
    if (value === "") {
      this.turnOnAlert(this.Alert.null);
      this.setAndOutInput(name, value, false);
    } else {
      this.turnOffAlert(this.props.ContentLabel);
      const checkRegex = this.props.regex.exec(value);
      if (checkRegex !== null) {
        this.turnOffAlert(this.props.ContentLabel);
        this.setAndOutInput(name, value, true);
      } else {
        this.turnOnAlert(this.props.ContentAlert);
        this.setAndOutInput(name, value, false);
      }
    }
  }
  handleFocusInput() {
    this.setState({
      isFocus: true,
    });
  }
  handleBlurInput() {
    this.setState({
      isFocus: false
    });
  }
  render() {
    const { isFocus, isAlert } = this.state;
    const { ContentAlert, TypeInput, NameInput, PlaceHolder } = this.props;
    return (
      <InputGroupWrapper isFocus={isFocus} isAlert={isAlert}>
        <Label isAlert={isAlert} isFocus={isFocus}>{this.state.ContentLabel}</Label>
        <Input ContentAlert={ContentAlert} onChange={this.handleValidateInput} onFocus={this.handleFocusInput} onBlur={this.handleBlurInput} type={TypeInput} placeholder={PlaceHolder} name={NameInput}></Input>
      </InputGroupWrapper>
    )
  }
}
