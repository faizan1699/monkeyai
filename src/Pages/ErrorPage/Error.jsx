import React from 'react';

import errorimg from './error.png'

const Error = () => {

    return (
        <div className="row g-0 ">
            <div className="col">
                <div className="d-flex justify-content-center mt-5">
                    <img src={errorimg} className='img-fluid' style={{ maxWidth: "40%" }} alt="" />
                </div>
            </div>
        </div>
    );
};
export default Error;