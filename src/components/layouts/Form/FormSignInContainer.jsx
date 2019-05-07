import React, { Component } from 'react'
import FormSignIn from "./FormSignIn";
import Axios from "axios";

export default class FormSignInContainer extends Component {
    constructor(props) {
        super(props);
        this.handleLoginUser = this.handleLoginUser.bind(this);
        this.state = {
            alertStatus: false,
            alertData :'Welcome Back, Please login to your account.'
        }
    }
    handleLoginUser(user) {
        Axios.post('http://localhost:4000/users/signin', {
            user_name: user.user_name,
            pass_word: user.pass_word
        })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                this.setState({
                    alertStatus: true,
                    alertData : err.response.data.message
                });
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
