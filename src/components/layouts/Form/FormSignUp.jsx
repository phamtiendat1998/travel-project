import React, { Component } from 'react';
import styled from 'styled-components';
import InputGroup from './../../common/Input/InputGroup';
import Para from './../../common/Paragraph/Para';
import CheckBox from '../../common/Input/CheckBox';
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
    marginBottom: '2em'
};
const ButtonWrapper = styled.div`
    margin-bottom: 5%;
`;

export default class FormSignUp extends Component {
    constructor(props) {
        super(props);
        this.getValueFromGroup = this.getValueFromGroup.bind(this);
        this.getValueFromCheckbox = this.getValueFromCheckbox.bind(this);
        this.handleDisableLogin = this.handleDisableReg.bind(this);
        this.handleClickRegis = this.handleClickRegis.bind(this);
        this.state = {
            labelContent: {
                userName: "Username",
                passWord: "New Password",
                rpPassWord: "Confirm Password",
                email: "Email"
            },
            disaButtonRegis: true,
            user_name: {
                value: '',
                isValid: false
            },
            pass_word: {
                value: '',
                isValid: false
            },
            rp_pass_word: {
                value: '',
                isValid: false
            },
            email: {
                value: '',
                isValid: false
            },
            ckbAgree: false,
        };
    };
    getValueFromCheckbox(input) {
        this.setState({ ckbAgree: input.checked }, this.handleDisableLogin);
    }
    getValueFromGroup(input) {
        let nextState = { ...this.state[input.name] };
        nextState.value = input.value;
        nextState.isValid = input.isValid;
        this.setState({ [input.name]: nextState }, this.handleDisableLogin, this.confirmPassword);
    };
    handleClickRegis(event) {
        event.preventDefault();
        let user = {
            user_name: this.state.user_name.value,
            pass_word: this.state.pass_word.value,
            rp_pass_word: this.state.rp_pass_word.value,
            email: this.state.email.value,
        }
        this.props.handleGetValue(user);
    };
    handleDisableReg() {
        if (this.state.user_name.isValid === true && this.state.pass_word.isValid === true && this.state.rp_pass_word.isValid === true && this.state.email.isValid === true && this.state.ckbAgree === true) {
            this.setState({ disaButtonRegis: false });
        } else {
            this.setState({ disaButtonRegis: true });
        }
    };
    render() {
        return (
            <SignUpWrapper onSubmit={this.handleClickRegis} statusSignUp={this.props.statusSignUp}>
                <Para.FontTitle>Welcome to <Para.FontSpanBoldRed>F-i</Para.FontSpanBoldRed></Para.FontTitle>
                <Para.FontP style={styleFontP} colorVaule={props => this.props.alertStatus ? props.theme.colorRed : props.theme.txtGrayColor}>{this.props.alertData}</Para.FontP>
                <InputGroup
                    alertDefault={0}
                    labelContent={this.state.labelContent.userName}
                    typeInput={"text"}
                    placeHolder={"example123"}
                    name={"user_name"}
                    handleGetValue={this.getValueFromGroup}
                    regex={/^(?!.*__.*)(?!.*\.\..*)[a-z0-9_.]+$/}
                    contentAlert="Không chứa dấu, không chứa kí tự (khoảng trắng, kí tự đặc biệt ngoại trừ '_')"
                ></InputGroup>
                <InputGroup
                    alertDefault={0}
                    labelContent={this.state.labelContent.passWord}
                    typeInput={"password"}
                    placeHolder={"example123@"}
                    name={"pass_word"}
                    handleGetValue={this.getValueFromGroup}
                    regex={/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/}
                    contentAlert="Gồm 8 kí tự trở lên, không chứa kí tự đặc biệt, ít nhất 1 chữ hoa"
                ></InputGroup>
                <InputGroup
                    alertDefault={0}
                    labelContent={this.state.labelContent.rpPassWord}
                    typeInput={"password"}
                    placeHolder={"example123@"}
                    name={"rp_pass_word"}
                    handleGetValue={this.getValueFromGroup}
                    regex={/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/}
                    contentAlert="Gồm 8 kí tự trở lên, không chứa kí tự đặc biệt, ít nhất 1 chữ hoa"
                ></InputGroup>
                <InputGroup
                    alertDefault={0}
                    labelContent={this.state.labelContent.email}
                    typeInput={"text"}
                    placeHolder={"example123@gmail.com"}
                    name={"email"}
                    handleGetValue={this.getValueFromGroup}
                    regex={/^[a-z][a-z0-9_.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/}
                    contentAlert="Không đúng định dạng email"
                ></InputGroup>
                <CheckBox value="ckbAgree" handleGetValue={this.getValueFromCheckbox} label="Agree to terms"></CheckBox>
                <ButtonWrapper>
                    <ButtonLogin type="submit" disabled={this.state.disaButtonRegis}>Register</ButtonLogin>
                </ButtonWrapper>
            </SignUpWrapper>
        )
    }
}
