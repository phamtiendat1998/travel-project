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
            statusSignIn: true,
            statusSignUp: false
        }
    }

    getStatusFromOverLay(status) {
        this.setState({
            statusSignIn: status.statusSignIn,
            statusSignUp: status.statusSignUp
        });
    }
    render() {
        return (
            <FormUserWrapper>
                <FormSignInContainer statusSignIn={this.state.statusSignIn}></FormSignInContainer>
                <FormSignUpContainer statusSignUp={this.state.statusSignUp}></FormSignUpContainer>
                <FormOverLay statusSignIn={this.state.statusSignIn} statusSignUp={this.state.statusSignUp} getStatusFromOverLay={this.getStatusFromOverLay}></FormOverLay>
            </FormUserWrapper>
        )
    }
}
