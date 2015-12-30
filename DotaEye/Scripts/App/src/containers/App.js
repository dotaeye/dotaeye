import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { History } from 'react-router'
import { IndexLink } from 'react-router';
import DocumentMeta from 'react-document-meta';
import configs from '../configs';
import * as authActions from '../actions/auth'

var App = React.createClass({

    mixins: [History],

    componentWillReceiveProps(nextProps) {
        if (!this.props.auth.token && nextProps.auth.token) {
            // login
            this.history.pushState(null, '/list');
        } else if (this.props.auth.token && !nextProps.auth.token) {
            // logout
            this.history.pushState(null, '/login');
        }
    },

    handleLogout(){
        this.props.actions.logout();
    },

    render() {
        const {auth:{token}} = this.props;
        return (
            <div id="app">
                <DocumentMeta {...configs.app}/>
                {this.props.children}
            </div>
        );
    }
});

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authActions, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)