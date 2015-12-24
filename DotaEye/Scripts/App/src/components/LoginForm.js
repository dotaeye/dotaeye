import React ,{PropTypes}from 'react';
import {reduxForm} from 'redux-form';

const fields = ['username', 'password'];

const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)) {
        errors.username = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = 'Required';
    }

    return errors;
};

var LoginForm = React.createClass({

    propTypes: {
        fields: PropTypes.object.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        submitting: PropTypes.bool.isRequired
    },

    render(){

        const {fields: {username, password}, handleSubmit, submitting} = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <div className='form-group'>

                    <label>Username</label>

                    <input type="text" className='form-control' placeholder="Username" {...username}/>

                    {username.touched && username.error && <div>{username.error}</div>}
                </div>
                <div className='form-group'>
                    <label>Password</label>

                        <input type="password" className='form-control' placeholder="Password" {...password}/>

                    {password.touched && password.error && <div>{password.error}</div>}
                </div>

                <div className='form-group'>
                    <button disabled={submitting} onClick={handleSubmit} type='submit' className='btn btn-default'>
                        {submitting ? <i/> : <i/>} Submit
                    </button>
                </div>

            </form>
        );
    }
});

export default reduxForm({
    form: 'loginForm',
    fields,
    validate
})(LoginForm);

