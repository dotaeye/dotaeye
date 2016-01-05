import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Route, Link} from 'react-router';
import { connect } from 'react-redux'
import { Spin } from 'antd';
import * as actionCreators from '../actions/auth'
import { LoginForm } from '../components';
import connectStatic from '../utils/connectStatic'


const Login = React.createClass({

    static:{
        animate:'example1'
    },

    onSubmit(data){
        data.grant_type = 'password';
        this.props.actions.login(data);
    },

    render() {

        let {auth:{loggingIn, loginError}} =this.props;

        return (
            <div id="login" className='container'>
                <h1>Login Page</h1>
                <LoginForm onSubmit={this.onSubmit} submitting={loggingIn} ref='loginForm'/>
            </div>
        );
    }
});

function mapStateToProps(state) {
    return {
        auth: state.auth,
        form: state.form
    }
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actionCreators, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

