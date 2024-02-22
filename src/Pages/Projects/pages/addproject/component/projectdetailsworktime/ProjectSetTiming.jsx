import React from 'react';

const ProjectSetTiming = () => {
    return (
        
        <div className='row justify-content-between align-items-center'>

            <div className='col-md-2 mb-2 mt-1'>
                <label htmlFor="label" className="d-flex flex-column">
                    <span className='small text-secondary'>Estimated Time</span>
                    <input className='form-control py-2' type="text" placeholder='Software Engineering' />
                </label>
            </div>

            <div className='col-md-2 mb-2 mt-md-4'>
                <input className='form-control py-2' type="text" placeholder='50' />
            </div>

            <div className='col-md-2 mb-2 mt-md-4'>
                <input className='form-control py-2' type="text" placeholder='PMO' />
            </div>

            <div className='col-md-2 mb-2 mt-md-4'>
                <input className='form-control py-2' type="text" placeholder='20' />
            </div>

            <div className='col-md-4 '>
                <div className="row">
                   
                    <div className="col-md-2 d-none d-md-block"></div>
                    
                    <div className="d-flex flex-column col-md-10 ">
                        <label htmlFor="label" className='small text-secondary'>Total Planned Man Days</label>
                        <input className='form-control py-2' type="text" placeholder='50' />
                    </div>

                </div>
            </div>
        </div>

    )
}


export default ProjectSetTiming