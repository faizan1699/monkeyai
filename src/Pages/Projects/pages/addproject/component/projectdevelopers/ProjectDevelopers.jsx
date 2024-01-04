import React from 'react';

import { employeeimg } from '../../../../../../Services/Services';

export default function ProjectDevelopers() {

    const handleAddManager = () => {
        alert('ALERT');
    }

    return (
        <div className='row'>
            <div className="row">

                <div className='col-md-6'>

                    <div className="d-flex">
                        <p className='card-text pe-2 small'>Project Manager</p>
                        <p className='card-text pe-2 small'>Project Lead</p>
                        <p className='card-text pe-2 small'>Account Manager</p>
                    </div>

                </div>
            </div>

            {
                employeeimg.map((data, Index) => (
                    <div className='row' key={Index}>
                        <div className="col-md-6">
                            <img src={data.img} className='rounded-pill projects_Imgs' alt="Not Found" />
                            <button className='rounded-pill btn btn-secondary opacity-75' onClick={handleAddManager} style={{ padding: "10px 15px" }}><i className='fa-solid fa-add border-0'></i></button>
                        </div>

                        <div className="col-md-6">
                           
                            <img src={data.img} className='rounded-pill mb-2 projects_Imgs' alt="Not Found" />
                            <img src={data.img} className='rounded-pill mb-2 projects_Imgs' alt="Not Found" />
                            <img src={data.img} className='rounded-pill mb-2 projects_Imgs' alt="Not Found" />
                            <img src={data.img} className='rounded-pill mb-2 projects_Imgs' alt="Not Found" />
                            <img src={data.img} className='rounded-pill mb-2 projects_Imgs' alt="Not Found" />
                            <img src={data.img} className='rounded-pill mb-2 projects_Imgs' alt="Not Found" />

                            <button className='rounded-pill btn btn-secondary opacity-75' onClick={handleAddManager} style={{ padding: "10px 15px" }}>
                                <i className='fa-solid fa-add border-0'></i>
                            </button>
 
                        </div>
                    </div>
                ))
            }
        </div >
    )
}
