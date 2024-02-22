import React from 'react';

const ProjectDevelopers = () => {

    const handleAddManager = () => {
        alert('ALERT');
    }
    
    return (
        <div className='row'>
            <div className="row">

                <div className='col-md-6'>

                    <div className="d-flex justify-content-around">
                        <p className='card-text pe-2 small'>Project Manager</p>
                        <p className='card-text pe-2 small'>Project Lead</p>
                        <p className='card-text pe-2 small'>Account Manager</p>
                    </div>

                </div>
            </div>

            <div className='row'>
                <div className="col-md-6">
                    <img src='' className='rounded-pill projects_Imgs' alt="Not Found" />
                    <button className='rounded-pill btn btn-secondary opacity-75' onClick={handleAddManager} style={{ padding: "10px 15px" }}><i className='fa-solid fa-add border-0'></i></button>
                </div>

                <div className="col-md-6">

                    <img src={``} className='rounded-pill mb-2 projects_Imgs' alt="Not Found" />

                    <button className='rounded-pill btn btn-secondary opacity-75' onClick={handleAddManager} style={{ padding: "10px 15px" }}>
                        <i className='fa-solid fa-add border-0'></i>
                    </button>

                </div>
            </div>
        </div >
    )
}


export default ProjectDevelopers;