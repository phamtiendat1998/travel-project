import React, { Component } from 'react'
import styled from 'styled-components';

import ButtonHoverRed from './../../common/Button/ButtonHoverRed';
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
    transform: ${props => props.statusSignUp ? "translateX(0)" : "translateX(-150%)"};
`;
const styleP = {
    textAlign: 'center',
    marginBottom: '10%'
}
export default class FormOverLay extends Component {
    constructor(props) {
        super(props);
        this.handleSignUpOL = this.handleSignUpOL.bind(this);
    }
    state = {
        statusSignUp: false
    }
    handleSignUpOL() {
        this.state.statusSignUp ? this.setState({
            statusSignUp: false
        }) : this.setState({
            statusSignUp: true
        });
    }
    render() {
        return (
            <OverLayWrapper statusSignUp={this.state.statusSignUp}>
                <OverLaySignIn statusSignUp={this.state.statusSignUp}>
                    <Para.FontTitle>Already have an account?</Para.FontTitle>
                    <Para.FontP style={styleP}>Sign in to get personalized story recommendations, follow authors and topics you love, and interact with stories.</Para.FontP>
                    <ButtonHoverRed type="button" onClick={this.handleSignUpOL}>Sign In</ButtonHoverRed>
                </OverLaySignIn>
                <OverLaySignUp statusSignUp={this.state.statusSignUp}>
                    <Para.FontTitle>No account?</Para.FontTitle>
                    <Para.FontP style={styleP}>Create an account to receive great stories in your inbox, personalize your homepage, and follow authors and topics that you love.</Para.FontP>
                    <ButtonHoverRed type="button" onClick={this.handleSignUpOL}>Create One</ButtonHoverRed>
                </OverLaySignUp>
            </OverLayWrapper>
        )
    }
}
