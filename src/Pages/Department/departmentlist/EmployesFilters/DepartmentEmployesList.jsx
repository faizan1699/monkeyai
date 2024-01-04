import React, { useState } from 'react';

import Pagination from '../../../Components/PaginationComponent/Pagination';
import { DepartmentEmployeesList } from '../../../../Services/Services';
import { Link } from 'react-router-dom';

export default function DevelopersListCard(props) {

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10; // Assume you have 10 pages

    const handlePageChange = (newPage) => {
        // Add logic to fetch and update data based on the new page
        setCurrentPage(newPage);
    };

    return (
        <div className='card'>
            <div className='card-body'>

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
                            DepartmentEmployeesList.map((data, index) => (
                                <tr key={index}>

                                    <td>{data.id}</td>
                                    <td className='d-flex flex-column'>
                                        <span>
                                            {data.department}
                                        </span>
                                        <span className='small'>
                                            Total resources {data.rosorces}
                                        </span>
                                    </td>

                                    <td className=''>
                                        <div className='d-flex flex-column'>

                                            <span>
                                                {data.manager}
                                            </span>
                                            <span className='small'>
                                                {data.mail}
                                            </span>
                                        
                                        </div>
                                    </td>

                                    <td>{data.active}</td>

                                    <td className='ps-4'>
                                        <Link className='' to='/' >
                                            <i className=' fas fa-info-circle text-secondary '></i>
                                        </Link>
                                    </td>

                                </tr>
                            ))
                        }
                    </tbody>

                </table>

                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />

            </div>
        </div>
    );
}
