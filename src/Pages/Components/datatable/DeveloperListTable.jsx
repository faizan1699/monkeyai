import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

const DeveloperListTable = () => {

    const navigate = useNavigate();
    const [employedata, setEmployeData] = useState([]);

    const getEmployeData = (data) => {
        navigate(`/employees/${data.id}`);
    };


    useEffect(() => {
        const getEmploye = localStorage.getItem(`Employes`);
        const employe = JSON.parse(getEmploye);
        setEmployeData(employe);
    }, [])

    const handleEmplyeAction = (Index) => {
        const updateProjects = [...employedata];
        updateProjects.splice(Index, 1);
        setEmployeData(updateProjects);
        localStorage.setItem(`Employes`, JSON.stringify(updateProjects));
    }

    return (

        <div className='table-responsive'>
            
            {employedata ? (
                <table className="table table-hover table-responsive-sm table-responsive Employ_table">
                    <thead className='bg-danger'>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Employee Name</th>
                            <th scope='col'>Title</th>
                            <th scope="col">Department</th>
                            <th scope="col">Projects</th>
                            <th scope="col">Assignment</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {employedata.map((data, Index, id) => (

                            <tr id={data.id} key={Index}>

                                <td onClick={() => getEmployeData(data)} className='fw-bold text-center'>{data.id}</td>

                                <td onClick={() => getEmployeData(data)} >
                                    <div className='d-flex' >
                                        <img className='img-fluid rounded-pill me-2' id='employetable_img' src={data.employeimg} alt="not found" />

                                        <div className='m-0  d-flex flex-column justify-content-center'>
                                            <p className='small m-0 text-nowrap fw-bold'>
                                                {data.name ? data.name : 'not found'}
                                            </p>
                                            <p className='small m-0'>
                                                {data.email ? data.email : 'not found'}
                                            </p>
                                        </div>
                                    </div>
                                </td>

                                <td onClick={() => getEmployeData(data)} className='text-nowrap' >{data.jobtitle ? data.jobtitle : 'not found'}</td>
                                <td onClick={() => getEmployeData(data)} className='text-nowrap' >{data.department ? data.department : 'not found'}</td>
                                <td onClick={() => getEmployeData(data)} className='text-nowrap' >{data.project ? data.project : 'not found'}</td>
                                <td onClick={() => getEmployeData(data)} className='text-nowrap' >{data.assignment ? data.assignment : 'not found'}</td>

                                <td className='ps-4' onClick={() => handleEmplyeAction(Index)}>
                                    <i className=' fas fa-info-circle text-secondary '></i>
                                </td>

                            </tr>
                        ))}

                    </tbody>
                </table>
            ) : (
                <div>
                    <h1>Data Not Found</h1>
                </div>
            )
            }
        </div>

    );
}

export default DeveloperListTable;