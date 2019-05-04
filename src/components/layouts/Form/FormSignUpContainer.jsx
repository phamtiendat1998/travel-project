import React, { Component } from 'react'
import FormSignUp from './FormSignUp'

export default class FormSignUpContainer extends Component {
    render() {
        return (
            <FormSignUp
                statusSignUp={this.props.statusSignUp}
            />
        )
    }
}
