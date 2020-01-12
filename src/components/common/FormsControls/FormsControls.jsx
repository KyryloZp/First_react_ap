import React from "react";
import styles from "./FormsControls.css";

export const renderInput = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div>
            <div >
                <input {...props} {...input} className={'formValidate' + " "  + (hasError ? 'error' : "")} />
            </div>
            <div>
                {hasError && <span className='validateDescription'>{meta.error}</span>}
            </div>

        </div>
        )
};

export const renderTextarea = ({ input, meta, ...props }, typeInput) => {
    const hasError = meta.touched && meta.error;
    return (
        <div>
            <div >
                <textarea {...props} {...input} className={'formValidate' + " "  + (hasError ? 'error' : "")} />
            </div>
            <div>
                {hasError && <span className='validateDescription'>{meta.error}</span>}
            </div>
        </div>
    )
}