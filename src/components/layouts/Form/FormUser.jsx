import React, { Component } from 'react';
import FormSignIn from './FormSignIn';
import styled from 'styled-components';

const FormUserContaner = styled.div`
    width : 100%;
    height : 100%;
    position : relative;
    overflow: hidden;
`;

export default class FormUser extends Component {
    render() {
        return (
            <FormUserContaner>
                <FormSignIn></FormSignIn>
            </FormUserContaner>
        )
    }
}
