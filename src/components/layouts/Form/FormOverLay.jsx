import React, { Component } from 'react'
import styled from 'styled-components';

import ButtonLogin from './../../common/Button/ButtonLogin';
import Para from './../../common/Paragraph/Para';

const OverLayWrapper = styled.div`
    width: 50%;
    height: 100%;
    position : absolute;
    top: 0;
    right: 0;
    // background-color: #0000ff29;
    transition: all 0.6s ease-in-out;
    transform: ${props => props.statusSignUp ? "translateX(-100%)" : "translateX(0)"};
    overflow: hidden; 
    background-image: url('./images/plane-login.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: ${props => props.statusSignUp ? "left top" : "right top"};
`;
const OverLay = styled.div`
    position : absolute;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 5% 20%;
    transition: transform 0.6s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const OverLaySignUp = styled(OverLay)`
    right: 0;
    transform: ${props => props.statusSignUp ? "translateX(150%)" : "translateX(0)"};
`;
const OverLaySignIn = styled(OverLay)`
    left: 0;
    transform: ${props => props.statusSignIn ? "translateX(-150%)" : "translateX(0)"};
`;
const styleP = {
    textAlign: 'center',
    marginBottom: '10%'
}
export default class FormOverLay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusSignIn: '',
            statusSignUp: ''         
        };
        this.handleSignUpOL = this.handleSignUpOL.bind(this);
    }
    componentWillMount() {
        this.setState({
            statusSignIn: this.props.statusSignIn,
            statusSignUp: this.props.statusSignUp,
        });
    }
    nextState;
    handleSignUpOL() {
        this.state.statusSignUp ? this.nextState = {
            statusSignIn: true,
            statusSignUp: false
        } : this.nextState = {
            statusSignIn: false,
            statusSignUp: true
        };
        this.props.getStatusFromOverLay(this.nextState);
        this.setState(this.nextState);
    }
    render() {
        return (
            <OverLayWrapper statusSignUp={this.state.statusSignUp}>
                <OverLaySignIn statusSignIn={this.state.statusSignIn}>
                    <Para.FontTitle>Already have an account?</Para.FontTitle>
                    <Para.FontP style={styleP}>Sign in to get personalized story recommendations, follow authors and topics you love, and interact with stories.</Para.FontP>
                    <ButtonLogin type="button" onClick={this.handleSignUpOL}>Sign In</ButtonLogin>
                </OverLaySignIn>
                <OverLaySignUp statusSignUp={this.state.statusSignUp}>
                    <Para.FontTitle>No account?</Para.FontTitle>
                    <Para.FontP style={styleP}>Create an account to receive great stories in your inbox, personalize your homepage, and follow authors and topics that you love.</Para.FontP>
                    <ButtonLogin type="button" onClick={this.handleSignUpOL}>Create One</ButtonLogin>
                </OverLaySignUp>
            </OverLayWrapper>
        )
    }
}
