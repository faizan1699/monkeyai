import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import Pagination from '../../../Components/PaginationComponent/Pagination';

const DevelopersList = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = 5;

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

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

    return (
        <>
            <div>
                <div className='table-responsive'>
                    {
                        employedata ? (
                            <table className="table table-hover table-responsive-sm table-responsive Employ_table">

                                <thead className='bg-danger'>
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">Employee Name</th>
                                        <th scope='col'>Title</th>
                                        <th scope="col">Assignment</th>
                                        <th scope="col">Comment</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {employedata.map((data, Index) => (
                                        <tr id={data.id} key={Index}>
                                            <td onClick={() => getEmployeData(data)} className='fw-bold text-center'>{Index + 1}</td>
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
                                            <td onClick={() => getEmployeData(data)} className='text-nowrap' >{data.assignment ? data.assignment : 'not found'}</td>
                                            <td onClick={() => getEmployeData(data)} className='text-nowrap' >{data.assignment ? data.assignment : 'not found'}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (<div><h1>Data Not Found</h1></div>)
                    }

                </div>
            </div>

            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </>
    );
}

export default DevelopersList;