import React, { Component } from 'react';
import styled from 'styled-components';

import FormSignIn from './FormSignIn';
import FormOverLay from './FormOverLay';

const FormUserWrapper = styled.div`
    width : 100%;
    height : 100%;
    position : relative;
    // overflow: hidden;
`;

export default class FormUser extends Component {
    render() {
        return (
            <FormUserWrapper>
                <FormSignIn></FormSignIn>
                <FormOverLay></FormOverLay>
            </FormUserWrapper>
        )
    }
}
