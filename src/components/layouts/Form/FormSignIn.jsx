import React, { Component } from 'react';
import styled from 'styled-components';
import InputGroup from './../../common/Input/InputGroup';
import CheckBoxGroup from '../../common/Input/CheckBoxGroup';
import Para from './../../common/Paragraph/Para';

const SignInWrapper = styled.div`
    width: 50%;
    height: 100%;
    position : absolute;
    top: 0;
    left: 0;
    padding: 5% 5%;
`;
const styleFontTitle = {
    marginBottom: '1%'
};

const styleFontP = {
    marginBottom: '10%'
};

export default class FormSignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focusInputAccStatus: false,
            focusInputPassStatus: false
        };
        this.handleMouseAccFocus = this.handleMouseAccFocus.bind(this);
        this.handleMouseAccBlur = this.handleMouseAccBlur.bind(this);
        this.handleMousePassFocus = this.handleMousePassFocus.bind(this);
        this.handleMousePassBlur = this.handleMousePassBlur.bind(this);
    }

    handleMouseAccFocus() {
        this.setState({
            focusInputAccStatus: true,
        });
    }
    handleMouseAccBlur() {
        this.setState({
            focusInputAccStatus: false,
        });
    }
    handleMousePassFocus() {
        this.setState({
            focusInputPassStatus: true,
        });
    }
    handleMousePassBlur() {
        this.setState({
            focusInputPassStatus: false,
        });
    }

    render() {
        return (
            <SignInWrapper>
                <Para.FontTitle style={styleFontTitle}>We are <Para.FontSpanBoldRed>F-i</Para.FontSpanBoldRed></Para.FontTitle>
                <Para.FontP style={styleFontP} colorVaule={props => props.theme.txtGrayColor}>Welcome Back, Please login to your account.</Para.FontP>
                <InputGroup focusStatus={this.state.focusInputAccStatus}>
                    <InputGroup.Label focusStatus={this.state.focusInputAccStatus}>Username </InputGroup.Label>
                    <InputGroup.Input placeholder="example1998" onBlur={this.handleMouseAccBlur} onFocus={this.handleMouseAccFocus}></InputGroup.Input>
                </InputGroup>
                <InputGroup focusStatus={this.state.focusInputPassStatus}>
                    <InputGroup.Label focusStatus={this.state.focusInputPassStatus}>Password </InputGroup.Label>
                    <InputGroup.Input type="password" placeholder="example123!@#" onBlur={this.handleMousePassBlur} onFocus={this.handleMousePassFocus}></InputGroup.Input>
                </InputGroup>
                <CheckBoxGroup>
                    <CheckBoxGroup.CheckBox type="checkbox"></CheckBoxGroup.CheckBox>
                    <CheckBoxGroup.Para>Remember me</CheckBoxGroup.Para>
                </CheckBoxGroup>
            </SignInWrapper>
        )
    }
}
