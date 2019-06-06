import React, { Component } from 'react';
import styled from 'styled-components';
import InputGroup from './../../common/Input/InputGroup';
import H3 from './../../common/Paragraph/H3';
import P from './../../common/Paragraph/P';
import Span from './../../common/Paragraph/Span';
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
    transform: ${props => props.isSignUp ? "translateX(0)" : "translateX(150%)"};
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
        this.handleDisableRegis = this.handleDisableRegis.bind(this);
        this.handleClickRegis = this.handleClickRegis.bind(this);
        this.state = {
            ContentLabel: {
                UserName: "Username",
                PassWord: "New Password",
                RepeatPassWord: "Confirm Password",
                Email: "Email"
            },
            isBtnRegis: true,
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
            isAgree: false,
        };
    };
    getValueFromCheckbox(input) {
        this.setState({ isAgree: input.checked }, this.handleDisableRegis);
    }
    getValueFromGroup(input) {
        let nextState = { ...this.state[input.name] };
        nextState.value = input.value;
        nextState.isValid = input.isValid;
        this.setState({ [input.name]: nextState }, this.handleDisableRegis);
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
    handleDisableRegis() {
        if (this.state.user_name.isValid === true && this.state.pass_word.isValid === true && this.state.rp_pass_word.isValid === true && this.state.email.isValid === true && this.state.isAgree === true) {
            this.setState({ isBtnRegis: false });
        } else {
            this.setState({ isBtnRegis: true });
        }
    };
    render() {
        const { isSignUp, ContentAlert, isAlert } = this.props;
        const { isBtnRegis, ContentLabel } = this.state;
        return (
            <SignUpWrapper onSubmit={this.handleClickRegis} isSignUp={isSignUp}>
                <H3>Welcome to <Span colorT={props => props.theme.Color.Red}>F-i</Span></H3>
                <P style={styleFontP} colorT={props => isAlert ? props.theme.Color.Alert : props.theme.Color.Gray}>{ContentAlert}</P>
                <InputGroup
                    isAlert={0}
                    ContentLabel={ContentLabel.UserName}
                    TypeInput={"text"}
                    PlaceHolder={"example123"}
                    NameInput={"user_name"}
                    handleGetValue={this.getValueFromGroup}
                    regex={/^(?!.*__.*)(?!.*\.\..*)[a-z0-9_.]+$/}
                    ContentAlert="Không chứa dấu, không chứa kí tự (khoảng trắng, kí tự đặc biệt ngoại trừ '_')"
                ></InputGroup>
                <InputGroup
                    isAlert={0}
                    ContentLabel={ContentLabel.PassWord}
                    TypeInput={"password"}
                    PlaceHolder={"example123@"}
                    NameInput={"pass_word"}
                    handleGetValue={this.getValueFromGroup}
                    regex={/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/}
                    ContentAlert="Gồm 8 kí tự trở lên, không chứa kí tự đặc biệt, ít nhất 1 chữ hoa"
                ></InputGroup>
                <InputGroup
                    isAlert={0}
                    ContentLabel={ContentLabel.RepeatPassWord}
                    TypeInput={"password"}
                    PlaceHolder={"example123@"}
                    NameInput={"rp_pass_word"}
                    handleGetValue={this.getValueFromGroup}
                    regex={/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/}
                    ContentAlert="Gồm 8 kí tự trở lên, không chứa kí tự đặc biệt, ít nhất 1 chữ hoa"
                ></InputGroup>
                <InputGroup
                    isAlert={0}
                    ContentLabel={ContentLabel.Email}
                    TypeInput={"text"}
                    PlaceHolder={"example123@gmail.com"}
                    NameInput={"email"}
                    handleGetValue={this.getValueFromGroup}
                    regex={/^[a-z][a-z0-9_.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/}
                    ContentAlert="Không đúng định dạng email"
                ></InputGroup>
                <CheckBox value="isAgree" handleGetValue={this.getValueFromCheckbox} label="Agree to terms"></CheckBox>
                <ButtonWrapper>
                    <ButtonLogin type="submit" disabled={isBtnRegis}>Register</ButtonLogin>
                </ButtonWrapper>
                <P colorT={props => props.theme.Color.Gray}>By signing in, you agree to F-i's</P>
                <P>Terms and Conditions</P>
                <P colorT={props => props.theme.Color.Gray}>&</P>
                <P>Privacy Policy</P>
            </SignUpWrapper>
        )
    }
}
