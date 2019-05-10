import React, { Component } from 'react'
import FormSignUp from './FormSignUp'

export default class FormSignUpContainer extends Component {
    constructor(props){
        super(props);
        this.getValueFromForm = this.getValueFromForm.bind(this);
    }
    getValueFromForm(value){
        console.log(value)
    }
    render() {
        return (
            <FormSignUp
                statusSignUp={this.props.statusSignUp}
                handleGetValue={this.getValueFromForm}
            />
        )
    }
}
