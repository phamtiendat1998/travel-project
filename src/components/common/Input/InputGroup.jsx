import React, { Component } from 'react';
import styled from 'styled-components';
import Label from './Label';
import Input from './Input';

const InputGroupWrapper = styled.div`
    width : 100%;
    background-color: white;
    padding: 1% 2%;
    margin-bottom: 2%;
    border : 1.5px solid ${props => props.alert === 0 ? props.theme.borderGrayColor + "!important" : null};
    border : 1.5px solid ${props => props.alert === true ? props.theme.colorRed + "!important" : null};
    border : 1.5px solid ${props => props.alert === false ? props.theme.colorBlue + "!important" : null};
    box-shadow: ${ props => props.statusFocus ? props.theme.boxSInputGroup : "none"};
    transition: 0.5s;
    border-radius: 10px;
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
      statusFocus: false,
      statusAlert: this.props.alertDefault,
      contentLabel: this.props.labelContent,
      contentAlert: this.props.contentAlert
    }
    this.alert = {
      null: "Không được để trống",
    }
  }
  turnOnAlert(message) {
    this.setState({
      statusAlert: true,
      contentLabel: message
    });
  }
  turnOffAlert(message) {
    this.setState({
      statusAlert: false,
      contentLabel: message
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
      this.turnOnAlert(this.alert.null);
      this.setAndOutInput(name, value, false);
    } else {
      this.turnOffAlert(this.props.labelContent);
      const checkRegex = this.props.regex.exec(value);
      if (checkRegex !== null) {
        this.turnOffAlert(this.props.labelContent);
        this.setAndOutInput(name, value, true);
      } else {
        this.turnOnAlert(this.props.contentAlert);
        this.setAndOutInput(name, value, false);
      }
    }
  }
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
    let StatusFocus = this.state.statusFocus;
    let StatusAlert = this.state.statusAlert;
    let PlaceHolder = this.props.placeHolder;
    let TypeInput = this.props.typeInput;
    let NameInput = this.props.name;
    let ContentAlert = this.props.contentAlert;
    return (
      <InputGroupWrapper statusFocus={StatusFocus} alert={StatusAlert}>
        <Label statusAlert={StatusAlert} statusFocus={StatusFocus}>{this.state.contentLabel}</Label>
        <Input contentAlert={ContentAlert} onChange={this.handleValidateInput} onFocus={this.handleFocusInput} onBlur={this.handleBlurInput} type={TypeInput} placeholder={PlaceHolder} name={NameInput}></Input>
      </InputGroupWrapper>
    )
  }
}
