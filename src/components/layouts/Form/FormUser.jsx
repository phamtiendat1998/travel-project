import React, { Component } from 'react';
import styled from 'styled-components';

import FormSignInContainer from './FormSignInContainer';
import FormSignUpContainer from './FormSignUpContainer'
import FormOverLay from './FormOverLay';

const FormUserWrapper = styled.div`
    width : 100%;
    height : 100%;
    position : relative;
    overflow: hidden;
`;

export default class FormUser extends Component {
    constructor(props) {
        super(props);
        this.getStatusFromOverLay = this.getStatusFromOverLay.bind(this);
        this.state = {
            isSignIn: true,
            isSignUp: false
        }
    }

    getStatusFromOverLay(status) {
        this.setState({
            isSignIn: status.isSignIn,
            isSignUp: status.isSignUp
        });
    }
    render() {
        const { isSignIn, isSignUp } = this.state;
        return (
            <FormUserWrapper>
                <FormSignInContainer isSignIn={isSignIn}></FormSignInContainer>
                <FormSignUpContainer isSignUp={isSignUp}></FormSignUpContainer>
                <FormOverLay isSignIn={isSignIn} isSignUp={isSignUp} getStatusFromOverLay={this.getStatusFromOverLay}></FormOverLay>
            </FormUserWrapper>
        )
    }
}
