import React, { Component } from 'react';
import NavTop from './NavTop';
import { connect } from "react-redux";
import { actLoginUser } from "./../../../redux/actions/login";

export class NavTopContainer extends Component {
    constructor(props) {
        super(props);
        this.getUserLogin = this.getUserLogin.bind(this);
        this.handleLogIn = this.handleLogIn.bind(this);
        this.handleLogOut = this.handleLogOut.bind(this);
        this.state = {
            isLogin: false
        }
    }
    handleLogIn() {
        this.setState({ isLogin: true });
    }
    handleLogOut() {
        this.setState({ isLogin: false });
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
            this.handleLogIn();
            this.props.onLoginUser(JSON.parse(userLoginLocal));
        } else {
            if (userLoginSess !== null) {
                this.handleLogIn();
                this.props.onLoginUser(JSON.parse(userLoginSess));
            } else {
                this.setState({ isLogin: false });
            }
        }
    }
    componentWillMount() {
        this.getUserLogin();
    }
    render() {
        const { isLogin } = this.state;
        const { UserLogin } = this.props;
        return (
            <NavTop handleLogOut={this.handleLogOut} isLogin={isLogin} UserLogin={UserLogin}>
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
