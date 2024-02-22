import React from 'react';

import AddBtn from '../../../Components/AddBtn/AddBtn';
import FilterProject from './components/filterproject/FilterProject';
import TotalProjects from './components/totalproject/TotalProjects';

const ProjectList = () => {

    return (
        <>
            <div className="" >
                <div className="d-flex justify-content-between">

                    <h3 className=' my-4 fw-bold' id='Employe_Filter_TitleSet'>
                        Project List
                    </h3>

                    <div className="d-flex align-items-center">
                        <AddBtn btnclass={`btn-dark`} fwicon='fa-solid fa-add px-1 text-dark ' btntitle='Add Project' routlink='/projects/addproject' />
                    </div>

                </div>
            </div>

            <div>
                <FilterProject />
            </div>

            <div className='mt-2'>
                <TotalProjects />
            </div>

        </>
    )
}

export default ProjectList;