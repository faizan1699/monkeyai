import React, { useEffect, useState } from 'react';

import Pagination from '../../../Components/PaginationComponent/Pagination';
import Card from '../../../Components/card/Card';
import { Link } from 'react-router-dom';

export default function DepartmentList(props) {

    const [isdeprt, setIsDeprt] = useState({});
    const [departments, setDepartments] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10; // Assume you have 10 pages

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    useEffect(() => {
        const getDepartments = localStorage.getItem('department');
        const departmentstring = JSON.parse(getDepartments);
        setDepartments(departmentstring);
    }, [])

    useEffect(() => {

        const getDepartments = localStorage.getItem('department');
        const departmentstring = JSON.parse(getDepartments);
        setIsDeprt(departmentstring.length);

    }, [])
    
    const handledepartmentDelete = (index) => {

        const updateDepart = [...departments];
        updateDepart.splice(index, 1);
        setDepartments(updateDepart);
        localStorage.setItem(`department`, JSON.stringify(updateDepart))

    }

    return (
        <>
            {
                isdeprt  ?
                    <Card
                        classes='table-responsive-sm '
                        carddata={
                            <>

                                <table className="table table-responsive-sm table-hover Employ_table" >
                                    <thead className=''>
                                        <tr>
                                            <th scope="col">No.</th>
                                            <th scope="col">Department</th>
                                            <th scope="col">Manager</th>
                                            <th scope="col">Active Project</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>

                                        {
                                            departments.map((data, index) => (
                                                <tr key={index}>

                                                    <td>{index + 1}</td>
                                                    <td className='d-flex flex-column'>
                                                        <span className='text-nowrap'>
                                                            {data.department}
                                                        </span>
                                                        <span className='small text-nowrap'>
                                                            Total resources : 10
                                                        </span>
                                                    </td>

                                                    <td className=''>
                                                        <div className='d-flex flex-column'>

                                                            <span className='text-nowrap'>
                                                                {data.manager}
                                                            </span>
                                                            <span className='small text-nowrap'>
                                                                {data.mail}
                                                            </span>

                                                        </div>
                                                    </td>

                                                    <td >N/A</td>

                                                    <td className='ps-4' onClick={() => handledepartmentDelete(index)}>
                                                        <i className=' fas fa-info-circle text-secondary '></i>
                                                    </td>

                                                </tr>
                                            ))
                                        }
                                    </tbody>

                                </table>


                                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />

                            </>
                        } />
                    : 

                    <Card carddata={
                        <div className='d-flex justify-content-center align-items-center flex-column'>
                        
                        <h3 className='fw-bold'>There is nothing to Show</h3>
                       
                       
                       <div>
                        <Link to='adddepartment'>Click Here To Add Projects</Link>
                       </div>

                        
                        </div>
                    } />
            }

        </>
    );
}
