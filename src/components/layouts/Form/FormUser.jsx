import React, { Component } from 'react';
import styled from 'styled-components';

import FormSignIn from './FormSignIn';
import FormSignUp from './FormSignUp';
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
            statusSignUp: false,
            statusSignIn: true
        }
    }

    getStatusFromOverLay(status) {
        this.setState({
            statusSignUp: !status.statusSignUp,
            statusSignIn: !status.statusSignIn
        });
    }
    render() {
        return (
            <FormUserWrapper>
                <FormSignIn statusSignIn={this.state.statusSignIn}></FormSignIn>
                <FormSignUp statusSignUp={this.state.statusSignUp}></FormSignUp>
                <FormOverLay getStatusFromOverLay={this.getStatusFromOverLay}></FormOverLay>
            </FormUserWrapper>
        )
    }
}
