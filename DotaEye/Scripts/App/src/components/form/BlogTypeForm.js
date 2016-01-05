import React ,{PropTypes}from 'react';
import {reduxForm} from 'redux-form';
import {Form, Input, Select } from 'antd';
const fields = ['cateName', 'code', 'pID'];
import {createValidator, required, integer } from '../../utils/validation';

const validate = createValidator({
    cateName: [required],
    code: [required],
    pID: [integer]
});

var BlogTypeForm = React.createClass({

    propTypes: {
        fields: PropTypes.object.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        submitting: PropTypes.bool.isRequired,
        formSource: PropTypes.object,
    },

    render(){

        const {fields: {cateName, code, pID}, handleSubmit, submitting,formSource} = this.props;
        const pIdSource = formSource.pID;
        return (
            <form onSubmit={handleSubmit}>
                <div className='form-group'>

                    <label>CateName</label>

                    <input type="text" className='form-control' placeholder="CateName" {...cateName}/>

                    {cateName.touched && cateName.error && <div>{cateName.error}</div>}
                </div>

                <div className='form-group'>
                    <label>Code</label>

                    <input type="text" className='form-control' placeholder="Code" {...code}/>

                    {code.touched && code.error && <div>{code.error}</div>}
                </div>

                <div className='form-group'>
                    <label>Parent Cate</label>
                    <Select {...pID}>
                        {pIdSource.map((item, index)=> {
                            return <Select.Option value={item.value} key={index}>{item.text}</Select.Option>
                        })}
                    </Select>
                    {pID.touched && pID.error && <div>{pID.error}</div>}
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
    form: 'blogTypeForm',
    fields,
    validate
})(BlogTypeForm);

