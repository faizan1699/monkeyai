import React from 'react';

import { ProjectData } from '../../../Services/Services';
import ProjectDataRender from './ProjectDataRender';

export default function Projects() {
    return (
        <div className='card'>
            <h5 className="card-header">Projects</h5>

            <div className="card-body me-1">

                {
                    ProjectData.map((data, Index) => (
                        <div className="my-2" key={Index}>
                            <ProjectDataRender data={data} Index={Index} />
                        </div>
                    ))
                }

            </div>

        </div>
    )
}
