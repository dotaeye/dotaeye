import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Spin } from 'antd';
import connectStatic from '../utils/connectStatic'
import * as authActions from '../actions/auth'
import * as blogTypeActions from '../actions/blogtype';
import { BlogTypeForm } from '../components';

var BlogType = React.createClass({

    displayName: 'Profile',

    onSubmit(data){
        this.props.actions.createBlogType(data)
    },

    render() {
        let {blogType:{loading, error,current,list}} =this.props;
        let pIdSource = list.map((item)=> {
            return {
                text: item.cateName,
                value: item.Id
            }
        });
        return (
            <div id="blogtype" className='container'>
                <h1>BlogType</h1>

                <div id='blogtype-info'>
                    <Spin spining={this.props.blogType.loading}/>
                    <BlogTypeForm onSubmit={this.onSubmit} submitting={loading} formError={error}
                                  formSource={{pID:pIdSource}}
                                  initialValues={current}
                        />
                </div>
            </div>
        );
    }
});

function mapStateToProps(state) {
    return {
        blogType: state.blogType,
        auth: state.auth
    }
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(blogTypeActions, dispatch)}
}

function fetchData(dispatch, getState, params, query) {
    dispatch(authActions.loadAuthToken(getState().auth.token));
    return dispatch(blogTypeActions.loadBlogType());
}


export default connectStatic({fetchData})(connect(mapStateToProps, mapDispatchToProps)(BlogType))

