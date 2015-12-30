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
                    <div class="navbar-center">µÇÂ¼</div>
                    <div class="navbar-right"><a href="/register/index" title="Ãâ·Ñ×¢²á">×¢²á</a></div>
                </div>
            </div>
        )
    }

});

export default  NavBar;