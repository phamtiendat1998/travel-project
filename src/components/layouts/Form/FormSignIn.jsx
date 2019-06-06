import React, { Component } from 'react';
import styled from 'styled-components';
import InputGroup from './../../common/Input/InputGroup';
import CheckBox from '../../common/Input/CheckBox';
import H2 from './../../common/Paragraph/H2';
import P from './../../common/Paragraph/P';
import Span from './../../common/Paragraph/Span';
import ButtonLogin from '../../common/Button/ButtonLogin';

const SignInWrapper = styled.form`
    width: 50%;
    height: 100%;
    position : absolute;
    top: 0;
    left: 0;
    padding: 5% 5%;
    transition: transform 0.6s ease-in-out;
    transform: ${props => props.isSignIn ? "translateX(0)" : "translateX(-150%)"};
`;
const styleFontP = {
    marginBottom: '10%'
};
const ButtonWrapper = styled.div`
    margin-bottom: 5%;
`;
export default class FormSignIn extends Component {
    constructor(props) {
        super(props);
        this.getValueFromCheckBox = this.getValueFromCheckBox.bind(this);
        this.getValueFromGroup = this.getValueFromGroup.bind(this);
        this.handleClickSignIn = this.handleClickSignIn.bind(this);
        this.handleDisableLogin = this.handleDisableLogin.bind(this);
        this.state = {
            ContentLabel: {
                UserName: "Username",
                PassWord: "Password"
            },
            isBtnLogin: true,
            user_name: {
                value: '',
                isValid: false
            },
            pass_word: {
                value: '',
                isValid: false
            },
            isRemember: false
        };
    }
    getValueFromCheckBox(input) {
        this.setState({ isRemember: input.checked });
    }
    getValueFromGroup(input) {
        let nextState = { ...this.state[input.name] };
        nextState.value = input.value;
        nextState.isValid = input.isValid;
        this.setState({ [input.name]: nextState }, this.handleDisableLogin);
    }
    handleDisableLogin() {
        if (this.state.user_name.isValid === true && this.state.pass_word.isValid === true) {
            this.setState({ isBtnLogin: false });
        } else {
            this.setState({ isBtnLogin: true });
        }
    }
    handleClickSignIn(event) {
        event.preventDefault();
        let user = {
            user_name: this.state.user_name.value,
            pass_word: this.state.pass_word.value
        }
        this.props.handleLogin(user, this.state.isRemember);
    }
    render() {
        const { isSignIn, ContentAlert } = this.props;
        const { ContentLabel, isBtnLogin } = this.state;
        return (
            <SignInWrapper onSubmit={this.handleClickSignIn} isSignIn={isSignIn}>
                <H2>We are <Span colorT={props => props.theme.Color.Red}>F-i</Span></H2>
                <P style={styleFontP} colorT={props => this.props.isAlert ? props.theme.Color.Alert : props.theme.Color.Gray}>{ContentAlert}</P>
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
                <CheckBox handleGetValue={this.getValueFromCheckBox} value="isRemember" label="Remember me"></CheckBox>
                <ButtonWrapper>
                    <ButtonLogin type="submit" disabled={isBtnLogin}>
                        Login
                    </ButtonLogin>
                </ButtonWrapper>
                <P colorT={props => props.theme.Color.Gray}>By signing in, you agree to F-i's</P>
                <P>Terms and Conditions</P>
                <P colorT={props => props.theme.Color.Gray}>&</P>
                <P>Privacy Policy</P>
            </SignInWrapper>
        )
    }
}
