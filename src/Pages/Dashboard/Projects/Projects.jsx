import React, { useEffect, useState } from 'react';

import { ProjectData } from '../../../Services/Services';
import ProjectDataRender from './ProjectDataRender';

const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {

        const getProjectslist = localStorage.getItem(`addnewproject`);
        const refineProject = JSON.parse(getProjectslist);
        setProjects(refineProject);

    }, [])

    return (
        <div className='card h-100'>
            <h5 className="card-header" > Projects</h5>

            <div className="card-body ">
                {projects.length > 0 ?
                    <div className="d-flex">

                        {
                            ProjectData && projects.map((data, Index) => (
                                <div className="mt-1" key={Index}>
                                    <ProjectDataRender data={data} Index={Index} />
                                </div>
                            ))
                        }

                    </div>
                    :
                    <div className='card'>
                        <div className="card-body">

                            <div className="d-flex justify-content-center align-items-center flex-column">
                                <i className="fa-solid fa-person-circle-question text-secondary" style={{ fontSize: "100px" }}></i>

                                <div className="small mt-4 text-secondary">Data not Available</div>
                            </div>

                        </div>
                    </div>
                }
            </div>
        </div>


    )
}

export default Projects