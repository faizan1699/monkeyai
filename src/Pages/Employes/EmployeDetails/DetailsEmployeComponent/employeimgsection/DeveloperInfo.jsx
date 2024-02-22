import React from 'react';

import dummyimg from '../../../../../Common/dummyimg/dummy-img.jpg';

const DeveloperInfo = ({ employedata }) => {

    return (

        <div>

            <div className="d-flex justify-content-center my-2">
                {!employedata ? (
                    <img src={dummyimg} className='img-fluid rounded-pill w-25 border border-1 shadow border-dark' style={{ minWidth: "70px" }} alt="missing" />
                    ) : (
                    <img src={employedata.employeimg} className='img-fluid rounded-pill w-25 border border-1 shadow border-dark ' id='employeImg' alt="missing" />
                )}
            </div>

            <h5 className="card-title text-center fw-bold">{employedata.name ? employedata.name : "John DOE"}</h5>
            <div className='card-text small text-center'>{employedata.email ? employedata.email : "dummymail@mail.com"}</div>

        </div>

    );
}
export default DeveloperInfo;
