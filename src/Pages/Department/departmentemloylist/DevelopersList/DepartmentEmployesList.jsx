import React, { useState } from 'react';

import Pagination from '../../../Components/PaginationComponent/Pagination';
import { DepartmentEmployees } from '../../../../Services/Services';

export default function DevelopersListCard(props) {

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10; // Assume you have 10 pages

    const handlePageChange = (newPage) => {
        // Add logic to fetch and update data based on the new page
        setCurrentPage(newPage);
    };

    return (
        <div className='card' style={{ overflow: "scroll" }}>
            <div className='card-body'>

                <table className="table table-responsive-sm table-hover Employ_table" >
                    <thead className=''>
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Employee Name</th>
                            <th scope="col">Title</th>
                            <th scope="col">Department</th>
                            <th scope="col">Projects</th>
                            <th scope="col">Assignment</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            DepartmentEmployees.map((data) => (
                                <tr key={data.id}>
                                    <td className='fw-bold text-center' >{data.id}</td>
                                    <td className='d-flex'>
                                        <img className='img-fluid rounded-pill me-2' src={data.employimg} style={{ maxWidth: "50px", maxHeight: "55px" }} alt="Not Found" />

                                        <div>
                                            <span className='d-flex flex-column'>{data.Name}</span>
                                            <span className='small text-lowercase'>{data.mail}</span>
                                        </div>
                                    </td>
                                    <td>{data.desigination}</td>
                                    <td>{data.department}</td>
                                    <td>{data.Project}</td>
                                    <td>{data.assignment}</td>
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
