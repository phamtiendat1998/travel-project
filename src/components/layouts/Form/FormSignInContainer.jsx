import React, { Component } from 'react'
import FormSignIn from "./FormSignIn";

export default class FormSignInContainer extends Component {
    render() {
        return (
            <FormSignIn
                statusSignIn={this.props.statusSignIn}
            />
        )
    }
}
