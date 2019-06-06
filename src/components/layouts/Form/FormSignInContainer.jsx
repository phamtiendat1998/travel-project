import React, { Component } from 'react'
import FormSignIn from "./FormSignIn";
import Axios from "axios";
import { connect } from "react-redux";
import { actLoginUser } from "./../../../redux/actions/login";

export class FormSignInContainer extends Component {
    constructor(props) {
        super(props);
        this.handleLoginUser = this.handleLoginUser.bind(this);
        this.state = {
            isAlert: false,
            ContentAlert: 'Welcome Back, Please login to your account.'
        }
    }
    handleLoginUser(user, isRemember) {
        Axios.post('http://localhost:4000/users/signin', {
            user_name: user.user_name,
            pass_word: user.pass_word
        })
            .then(res => {
                const user = res.data.data[0];
                const userJson = JSON.stringify(user);
                if (isRemember) {
                    localStorage.setItem('userLogin', userJson);
                } else {
                    sessionStorage.setItem('userLogin', userJson);
                }
                this.props.onLoginUser(user);
                this.setState({
                    isAlert: false,
                    ContentAlert: 'Login successfully'
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
    render() {
        const { isAlert, ContentAlert } = this.state;
        const { isSignIn } = this.props;
        return (
            <FormSignIn
                isAlert={isAlert}
                ContentAlert={ContentAlert}
                isSignIn={isSignIn}
                handleLogin={this.handleLoginUser}
            />
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onLoginUser: (user) => {
            dispatch(actLoginUser(user));
        }
    }
}
export default connect(null, mapDispatchToProps)(FormSignInContainer);
