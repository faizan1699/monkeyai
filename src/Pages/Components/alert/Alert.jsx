import React from 'react';

const Alert = (props) => {

    const capitalize = (word) => {
        if (word != null) {
            const lower = props.alert.type;
            return lower.charAt(0).toUpperCase() + lower.slice(1);
        } else {
            return '';
        }
    }

    return (
        <>
            {props.alert && (
                <div className={`alert d-flex alert-danger`} role="alert">
                    <div className='fw-bold me-2'>{capitalize(props.alert.type)} : </div>{props.alert.msg}
                </div>
            )}
        </>
    )
}

export default Alert;