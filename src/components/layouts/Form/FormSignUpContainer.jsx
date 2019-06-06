import React, { Component } from 'react'
import FormSignUp from './FormSignUp'
import Axios from "axios";


export default class FormSignUpContainer extends Component {
    constructor(props) {
        super(props);
        this.handleRegisterUser = this.handleRegisterUser.bind(this);
        this.state = {
            isAlert: false,
            ContentAlert: 'Welcome to F-i, Please register an account.'
        }
    }
    handleRegisterUser(user) {
        if (user.pass_word === user.rp_pass_word) {
            Axios.post('http://localhost:4000/users/signup', {
                user_name: user.user_name,
                pass_word: user.pass_word,
                email: user.email,
                category_acc: "user"
            })
                .then(res => {
                    this.setState({
                        isAlert: false,
                        ContentAlert: 'Register successfully'
                    });
                })
                .catch(err => {
                    if (err.response !== undefined) {
                        this.setState({
                            isAlert: true,
                            ContentAlert: err.response.data.message
                        });
                    } else {
                        this.setState({
                            isAlert: true,
                            ContentAlert: 'Network error 404. Please comeback later.'
                        });
                    }
                });
        }
        else {
            this.setState({
                isAlert: false,
                ContentAlert: 'Wrong confirm password, please try again'
            });
        }
    }
    render() {
        const { isAlert, ContentAlert } = this.state;
        const { isSignUp } = this.props;
        return (
            <FormSignUp
                isAlert={isAlert}
                ContentAlert={ContentAlert}
                isSignUp={isSignUp}
                handleGetValue={this.handleRegisterUser}
            />
        )
    }
}
