import React, { Component } from 'react';
import styled from 'styled-components';
import InputGroup from './../../common/Input/InputGroup';
import CheckBoxGroup from '../../common/Input/CheckBoxGroup';
import Para from './../../common/Paragraph/Para';
import ButtonHoverRed from './../../common/Button/ButtonHoverRed';

const SignInWrapper = styled.div`
    width: 50%;
    height: 100%;
    position : absolute;
    top: 0;
    left: 0;
    padding: 5% 5%;
    transition: transform 0.6s ease-in-out;
    transform: ${props => props.statusSignIn ? "translateX(0)" : "translateX(-150%)"};
`;
const styleFontP = {
    marginBottom: '10%'
};
const ButtonWrapper = styled.div`
    margin-bottom: 5%;
`;
export default class FormSignIn extends Component {
    labelContent = {
        userName: "Username",
        alertUserName: "Please fill password",
        passWord: "Password"
    }

    render() {
        return (
            <SignInWrapper statusSignIn={this.props.statusSignIn}>
                <Para.FontTitle>We are <Para.FontSpanBoldRed>F-i</Para.FontSpanBoldRed></Para.FontTitle>
                <Para.FontP style={styleFontP} colorVaule={props => props.theme.txtGrayColor}>Welcome Back, Please login to your account.</Para.FontP>
                <InputGroup
                    alert={false}
                    labelContent={this.labelContent.userName}
                    typeInput={"input"}
                    placeHolder={"example123"}
                ></InputGroup>
                <InputGroup
                    alert={true}
                    labelContent={this.labelContent.alertUserName}
                    typeInput={"password"}
                    placeHolder={"example123@"}
                ></InputGroup>
                <CheckBoxGroup>
                    <CheckBoxGroup.CheckBox type="checkbox"></CheckBoxGroup.CheckBox>
                    <CheckBoxGroup.Para>Remember me</CheckBoxGroup.Para>
                </CheckBoxGroup>
                <ButtonWrapper>
                    <ButtonHoverRed>Login</ButtonHoverRed>
                </ButtonWrapper>
                <Para.FontP colorVaule={props => props.theme.txtGrayColor}>By signing up, you agree to F-i's</Para.FontP>
                <Para.FontP>Terms and Conditions</Para.FontP>
                <Para.FontP colorVaule={props => props.theme.txtGrayColor}>&</Para.FontP>
                <Para.FontP>Privacy Policy</Para.FontP>
            </SignInWrapper>
        )
    }
}
