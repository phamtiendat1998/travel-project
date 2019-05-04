import React, { Component } from 'react';
import styled from 'styled-components';
import InputGroup from './../../common/Input/InputGroup';
import CheckBoxGroup from '../../common/Input/CheckBoxGroup';
import Para from './../../common/Paragraph/Para';
import ButtonLogin from '../../common/Button/ButtonLogin';

const SignUpWrapper = styled.form`
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
    constructor(props) {
        super(props);
        this.state = {
            labelContent: {
                userName: "Username",
                passWord: "Password",
                rpPassWord: "New Password",
                email: "Email"
            }
        };
    }
    render() {
        return (
            <SignUpWrapper statusSignUp={this.props.statusSignUp}>
                <Para.FontTitle>Welcome to <Para.FontSpanBoldRed>F-i</Para.FontSpanBoldRed></Para.FontTitle>
                <Para.FontP style={styleFontP} colorVaule={props => props.theme.txtGrayColor}>Please fill in all field to create a new account.</Para.FontP>
                <InputGroup
                    alertDefault={false}
                    labelContent={this.state.labelContent.userName}
                    typeInput={"input"}
                    placeHolder={"example123"}
                    name={"user_name"}
                    regex={/^(?!.*__.*)(?!.*\.\..*)[a-z0-9_.]+$/}
                    contentAlert="Không chứa dấu, không chứa kí tự (khoảng trắng, kí tự đặc biệt ngoại trừ '_')"
                ></InputGroup>
                <InputGroup
                    alertDefault={false}
                    labelContent={this.state.labelContent.passWord}
                    typeInput={"password"}
                    placeHolder={"example123@"}
                    name={"pass_word"}
                    regex={/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/}
                    contentAlert="Gồm 8 kí tự trở lên, không chứa kí tự đặc biệt, ít nhất 1 chữ hoa"
                ></InputGroup>
                <InputGroup
                    alertDefault={false}
                    labelContent={this.state.labelContent.rpPassWord}
                    typeInput={"password"}
                    placeHolder={"example123@"}
                    name={"rp_pass_word"}
                    regex={/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/}
                    contentAlert="Gồm 8 kí tự trở lên, không chứa kí tự đặc biệt, ít nhất 1 chữ hoa"
                ></InputGroup>
                <InputGroup
                    alertDefault={false}
                    labelContent={this.state.labelContent.email}
                    typeInput={"input"}
                    placeHolder={"example123@gmail.com"}
                    name={"email"}
                    regex={/^[a-z][a-z0-9_.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/}
                    contentAlert="Không đúng định dạng email"
                ></InputGroup>
                <CheckBoxGroup>
                    <CheckBoxGroup.CheckBox type="checkbox"></CheckBoxGroup.CheckBox>
                    <CheckBoxGroup.Para>Agree to the terms</CheckBoxGroup.Para>
                </CheckBoxGroup>
                <ButtonWrapper>
                    <ButtonLogin>Register</ButtonLogin>
                </ButtonWrapper>
            </SignUpWrapper>
        )
    }
}
