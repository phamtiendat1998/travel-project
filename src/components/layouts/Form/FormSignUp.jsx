import React, { Component } from 'react'
import styled from 'styled-components';
import InputGroup from './../../common/Input/InputGroup';
import CheckBoxGroup from '../../common/Input/CheckBoxGroup';
import Para from './../../common/Paragraph/Para';
import ButtonHoverRed from './../../common/Button/ButtonHoverRed';

const SignUpWrapper = styled.div`
    width: 50%;
    height: 100%;
    position : absolute;
    top: 0;
    right: 0;
    padding: 5% 5%;
    transition: transform 0.6s ease-in-out;
    transform: ${props => props.statusSignUp ? "translateX(0)" : "translateX(150%)"};
`;
const styleFontP = {
    marginBottom: '10%'
};
const ButtonWrapper = styled.div`
    margin-bottom: 5%;
`;

export default class FormSignUp extends Component {
    labelContent = {
        userName: "Username",
        newPassWord: "New Password",
        rpPassWord: "Repeat Password",
        email: "Email"
    }
    render() {
        return (
            <SignUpWrapper statusSignUp={this.props.statusSignUp}>
                <Para.FontTitle>Welcome to <Para.FontSpanBoldRed>F-i</Para.FontSpanBoldRed></Para.FontTitle>
                <Para.FontP style={styleFontP} colorVaule={props => props.theme.txtGrayColor}>Please fill in all field to create a new account.</Para.FontP>
                <InputGroup
                    alert={false}
                    labelContent={this.labelContent.userName}
                    typeInput={"input"}
                    placeHolder={"example123"}
                ></InputGroup>
                <InputGroup
                    alert={false}
                    labelContent={this.labelContent.newPassWord}
                    typeInput={"password"}
                    placeHolder={"example123@"}
                ></InputGroup>
                <InputGroup
                    alert={false}
                    labelContent={this.labelContent.rpPassWord}
                    typeInput={"password"}
                    placeHolder={"example123@"}
                ></InputGroup>
                <InputGroup
                    alert={false}
                    labelContent={this.labelContent.email}
                    typeInput={"input"}
                    placeHolder={"example123@gmail.com"}
                ></InputGroup>
                <CheckBoxGroup>
                    <CheckBoxGroup.CheckBox type="checkbox"></CheckBoxGroup.CheckBox>
                    <CheckBoxGroup.Para>Agree to the terms</CheckBoxGroup.Para>
                </CheckBoxGroup>
                <ButtonWrapper>
                    <ButtonHoverRed>Register</ButtonHoverRed>
                </ButtonWrapper>
            </SignUpWrapper>
        )
    }
}
