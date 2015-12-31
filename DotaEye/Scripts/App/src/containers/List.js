import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Spin } from 'antd';
import connectStatic from '../utils/connectStatic'
import * as orderActions from '../actions/order'
import * as authActions from '../actions/auth'

var List = React.createClass({

    displayName: 'List',

    render() {
        return (
            <div id="list" className='container'>
                <h1>List Page Current UserName {this.props.auth.token.userName}</h1>

                <div id='order'>
                    <Spin spining={this.props.order.loading}/>
                    <ul>
                        {this.props.order.list.map((order, index)=> {
                            return (
                                <li key={index}>
                                    <span>{order.id}</span>

                                    <div>{order.customerName}</div>
                                </li>
                            )
                        })}
                    </ul>
                    <h4>Current Order</h4>
                    <Spin spining={this.props.order.singleLoading}/>
                    {this.props.order.current && (
                        <div>
                            {this.props.order.current.customerName}
                        </div>
                    )}
                </div>
            </div>
        );
    }
});

function mapStateToProps(state) {
    return {
        auth: state.auth,
        order: state.order
    }
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(orderActions, dispatch)}
}

function fetchData(dispatch, getState, params, query) {
    dispatch(authActions.loadAuthToken(getState().auth.token));
    return dispatch(orderActions.load()).then(()=> {
        let orderId = getState().order.list[0].orderID;
        dispatch(orderActions.loadOrderById(orderId))
    });
}


export default connectStatic({fetchData: fetchData})(connect(mapStateToProps, mapDispatchToProps)(List))

