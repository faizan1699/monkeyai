import React, { useEffect, useState } from 'react';
import EmptyAssignProject from '../AssignEmpty/EmptyAssignProject';
import { useParams } from 'react-router-dom';

export default function AssigndProject({ employedata }) {
  const { employeeId } = useParams();
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem(`projectsData_${employeeId}`);

    if (storedData) {
  
      const parsedData = JSON.parse(storedData);
      setProjectsData(parsedData);
  
    }
  }, [employeeId]);

  const handleProjectDelete = (index) => {
  
    const updateProjects = [...projectsData];
    updateProjects.splice(index, 1);
    setProjectsData(updateProjects);
    localStorage.setItem(`projectsData_${employeeId}`, JSON.stringify(updateProjects));
  
  };

  return (
    <div className=''>
      {
        projectsData.length > 0 ? <h2 className='fw-bold my-3'>Assignd Projects</h2> : ''
      }

      <div className='row g-0'>
        {
          projectsData.length > 0 ? (

            projectsData.map((data, index) => (

              <div key={index} id={index + 1} className='col-md-4 '>

                <div className='mx-1 py-1 mb-2 px-2 rounded-3  bg-dark text-warning '>

                  <div className='d-flex justify-content-between'>
                    {data.project}
                    <span>
                      <i className='fa-solid fa-remove p-1' onClick={() => handleProjectDelete(index)}></i>
                    </span>

                  </div>
                </div>
              </div>

            ))

          ) : (
            <EmptyAssignProject />
          )}
      </div>
    </div>
  );
}
