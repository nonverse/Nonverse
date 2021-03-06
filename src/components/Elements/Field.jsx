import React from "react";
import {Field as FormikField} from "formik";

const Field = ({password, name, title, placeholder, error, validate}) => {

    let validator
    if (validate) {
        validator = validate
    } else {
        validator = ''
    }

    return (
        <div className="field-wrapper">
            <span className="default" id="field-title">{title}</span>
            <FormikField type={password ? 'password' : 'text'} className={error ? 'field-error' : ''} id={name}
                         name={name} placeholder={placeholder}
                         validate={validator}/>
            {error ? <span className="error">{error}</span> : ''}
        </div>
    )

}
export default Field
