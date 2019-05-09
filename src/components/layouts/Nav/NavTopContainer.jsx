import React, { Component } from 'react';
import NavTop from './NavTop';
import { connect } from "react-redux";
import { actLoginUser } from "./../../../redux/actions/login";

export class NavTopContainer extends Component {
    constructor(props) {
        super(props);
        this.getUserLogin = this.getUserLogin.bind(this);
        this.state = {
            stateLogin: false
        }
    }

    getUserLogin() {
        const userLoginSess = sessionStorage.getItem('userLogin');
        const userLoginLocal = sessionStorage.getItem('userLogin');
        if (userLoginLocal !== null) {
            console.log(userLoginLocal);
            this.props.onLoginUser(userLoginLocal);
        } else {
            if (userLoginSess !== null) {
                console.log(userLoginSess);
            }
        }
    }
    componentWillMount() {
        this.getUserLogin();
    }
    render() {
        let UserLogin = this.props.UserLogin;
        let StatusLogin = this.state.stateLogin
        return (
            <NavTop stateLogin={StatusLogin} userLogin={UserLogin}>
            </NavTop>
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
const mapStateToProps = (state) => {
    return {
        UserLogin: state.UserLogin
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavTopContainer);
