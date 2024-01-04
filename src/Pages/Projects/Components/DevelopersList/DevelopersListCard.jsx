import React, { useState, useEffect } from 'react';
import Pagination from '../../../Components/PaginationComponent/Pagination';

export default function DevelopersListCard(props) {

    const [userdata, setUserData] = useState();
    const [currentPage, setCurrentPage] = useState(1);
   
    const totalPages = 5;

    useEffect(() => {
        console.log(userdata);
    }, [userdata]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const getEmployeeData = (clickedData) => {
        setUserData(JSON.stringify(clickedData));
    };

    return (
        <>
            <table className="table table-responsive-sm table-hover Employ_table" style={{ overflow: "scroll" }}>
                <thead className='bg-danger'>
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
                    {props.DevelopersListData.map((data, Index) => (
                        <tr onClick={() => getEmployeeData(data)} key={Index}>
                            <td className='fw-bold text-center'>{Index + 1}</td>
                            <td className='d-flex'>
                                <span className='rounded-pill pe-2'><img className='img-fluid rounded-pill projects_Imgs ' src={data.employimg} alt="Something Wrong" /></span>
                                <div>
                                    <span className='d-flex flex-column'>{data.Name}</span>
                                    <span className='small text-lowercase'>{data.mail}</span>
                                </div>
                            </td>
                            <td>{data.desigination}</td>
                            <td>{data.department}</td>
                            <td>{data.Project ? "Nothing" : "das"}</td>
                            <td>{data.assignment}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </>
    );
}
