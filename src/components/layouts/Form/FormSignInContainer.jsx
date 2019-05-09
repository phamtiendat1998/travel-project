import React, { Component } from 'react'
import FormSignIn from "./FormSignIn";
import Axios from "axios";

export class FormSignInContainer extends Component {
    constructor(props) {
        super(props);
        this.handleLoginUser = this.handleLoginUser.bind(this);
        this.state = {
            alertStatus: false,
            alertData: 'Welcome Back, Please login to your account.'
        }
    }
    handleLoginUser(user, ckbRemember) {
        console.log(ckbRemember);
        Axios.post('http://localhost:4000/users/signin', {
            user_name: user.user_name,
            pass_word: user.pass_word
        })
            .then(res => {
                const user = res.data.data[0];
                if (ckbRemember) {
                    localStorage.setItem('userLogin', user);
                } else {
                    sessionStorage.setItem('userLogin', user);
                }
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
    render() {
        return (
            <FormSignIn
                alertStatus={this.state.alertStatus}
                alertData={this.state.alertData}
                statusSignIn={this.props.statusSignIn}
                handleLogin={this.handleLoginUser}
            />
        )
    }
}

export default FormSignInContainer;
