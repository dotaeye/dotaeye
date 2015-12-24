import React ,{PropTypes}from 'react';
import {reduxForm} from 'redux-form';

import {createValidator, required, maxLength, email} from '../../utils/validation';

const fields = ['email', 'password', 'confirmPassword'];

const validate = createValidator({
    email: [required, email],
    password: [required, maxLength(10)],
    confirmPassword: [required, maxLength(10)]
});


var RegisterForm = React.createClass({

    propTypes: {
        fields: PropTypes.object.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        submitting: PropTypes.bool.isRequired
    },

    render(){

        const {fields: {email, password,confirmPassword}, handleSubmit, submitting} = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <div className='form-group'>

                    <label>Email</label>

                    <input type="text" className='form-control' placeholder="Email" {...email}/>

                    {email.touched && email.error && <div>{email.error}</div>}
                </div>

                <div className='form-group'>
                    <label>Password</label>

                    <input type="password" className='form-control' placeholder="Password" {...password}/>

                    {password.touched && password.error && <div>{password.error}</div>}
                </div>

                <div className='form-group'>
                    <label>confirmPassword</label>

                    <input type="password" className='form-control' placeholder="confirmPassword" {...confirmPassword}/>

                    {confirmPassword.touched && confirmPassword.error && <div>{confirmPassword.error}</div>}
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
    form: 'registerForm',
    fields,
    validate
})(RegisterForm);

