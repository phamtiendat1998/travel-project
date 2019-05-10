import React, { Component } from 'react';
import NavTop from './NavTop';
import { connect } from "react-redux";
import { actLoginUser } from "./../../../redux/actions/login";

export class NavTopContainer extends Component {
    constructor(props) {
        super(props);
        this.getUserLogin = this.getUserLogin.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogOut = this.handleLogOut.bind(this);
        this.state = {
            stateLogin: false
        }
    }
    handleLogin() {
        this.setState({ stateLogin: true });
    }
    handleLogOut() {
        this.setState({ stateLogin: false });
        sessionStorage.removeItem('userLogin');
        localStorage.removeItem('userLogin');
        const UserNull = {};
        this.props.onLoginUser(UserNull);
    }
    componentWillReceiveProps(nextProps) {
        this.getUserLogin();
    }
    getUserLogin() {
        const userLoginSess = sessionStorage.getItem('userLogin');
        const userLoginLocal = localStorage.getItem('userLogin');
        if (userLoginLocal !== null) {
            this.handleLogin();
            this.props.onLoginUser(userLoginLocal);
        } else {
            if (userLoginSess !== null) {
                this.handleLogin();
            } else {
                this.setState({ stateLogin: false });
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
            <NavTop handleLogOut={this.handleLogOut} stateLogin={StatusLogin} userLogin={UserLogin}>
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
