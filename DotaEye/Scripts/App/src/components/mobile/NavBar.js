import React ,{PropTypes}from 'react';

var NavBar = React.createClass({

    propTypes:{

    },

    render(){
        return (
            <div class="navbar">
                <div class="navbar-box">
                    <div class="navbar-left back">
                        <a></a>
                    </div>
                    <div class="navbar-center">��¼</div>
                    <div class="navbar-right"><a href="/register/index" title="���ע��">ע��</a></div>
                </div>
            </div>
        )
    }

});

export default  NavBar;