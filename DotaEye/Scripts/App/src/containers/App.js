import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { History } from 'react-router'
import { IndexLink } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
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
                <Navbar fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <IndexLink to="/" activeStyle={{color: '#33e0ff'}}>
                                <span>{configs.app.title}</span>
                            </IndexLink>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Navbar.Collapse eventKey={0}>
                        <Nav navbar>
                            {!token &&
                            <LinkContainer to="/login">
                                <NavItem eventKey={1}>Login</NavItem>
                            </LinkContainer>}
                            {!token &&
                            <LinkContainer to="/register">
                                <NavItem eventKey={2}>register</NavItem>
                            </LinkContainer>}

                            {token &&
                            <LinkContainer to="/list">
                                <NavItem eventKey={3}>List</NavItem>
                            </LinkContainer>}
                        </Nav>
                        <Nav pullRight>
                            {token && (<NavItem eventKey={4} className="logout-link" onClick={this.handleLogout}>
                                Logout
                            </NavItem>)}
                            {token && (
                                <LinkContainer to="/profile">
                                    <NavItem eventKey={5} className="profile-link">
                                        Profile
                                    </NavItem>
                                </LinkContainer>)}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
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