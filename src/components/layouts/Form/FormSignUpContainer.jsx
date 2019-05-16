import React, { Component } from 'react'
import FormSignUp from './FormSignUp'
import Axios from "axios";


export default class FormSignUpContainer extends Component {
    constructor(props) {
        super(props);
        this.getValueFromForm = this.getValueFromForm.bind(this);
        this.handleRegisterUser = this.handleRegisterUser.bind(this);
        this.state = {
            alertStatus: false,
            alertData: 'Welcome to F-i, Please register an account.'
        }
    }
    getValueFromForm(value) {
        console.log(value)
    }
    handleRegisterUser(user) {
        console.log(user);
        if (user.pass_word === user.rp_pass_word) {
            Axios.post('http://localhost:4000/users/signup', {
                user_name: user.user_name,
                pass_word: user.pass_word,
                email: user.email,
                category_acc: "user"
            })
                .then(res => {
                    this.setState({
                        alertStatus: false,
                        alertData: 'Register successfully'
                    });
                })
                .catch(err => {
                    if (err.response !== undefined) {
                        this.setState({
                            alertStatus: true,
                            alertData: err.response.data.message
                        });
                    } else {
                        this.setState({
                            alertStatus: true,
                            alertData: 'Network error 404. Please comeback later.'
                        });
                    }
                });
        }
        else {
            this.setState({
                alertStatus: false,
                alertData: 'Wrong confirm password, please try again'
            });
        }
    }
    render() {
        return (
            <FormSignUp
                alertStatus={this.state.alertStatus}
                alertData={this.state.alertData}
                statusSignUp={this.props.statusSignUp}
                handleGetValue={this.handleRegisterUser}
            />
        )
    }
}
