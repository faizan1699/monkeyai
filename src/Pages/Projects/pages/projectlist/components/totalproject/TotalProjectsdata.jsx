import React, { useState } from 'react';
import Card from '../../../../../Components/card/Card';
import Pagination from '../../../../../Components/PaginationComponent/Pagination';

export default function TotalProjectsdata(props) {


    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;

    const handlePageChange = (newPage) => {
        // Add logic to fetch and update data based on the new page
        setCurrentPage(newPage);
    };

    return (
        <Card carddata={
            <div >
                <table className="table table-responsive-sm table-hover Employ_table" style={{ overflow: "scroll" }}>
                    <thead className='bg-danger'>
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Project Title</th>
                            <th scope="col">Client Name</th>
                            <th scope="col">Manager</th>
                            <th scope="col">Start Date</th>
                            <th scope="col">End Date</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            props.TotalProjectList.map((data, Index) => {

                                let priorityBg = "";
                                let text = '';
                                switch (data.periority) {
                                    case "Medium":
                                        priorityBg = "#e3f5fa";
                                        text = "info"
                                        break;
                                    case "High":
                                        priorityBg = "#ffc1cc";
                                        text = "danger";
                                        break;
                                    default:
                                        priorityBg = "";
                                }

                                let statusBG = "";
                                let textColor = "";
                                switch (data.status) {
                                    case "In Progress":
                                        statusBG = '#fcfca4';
                                        textColor = 'warning';
                                        break;

                                    case "Completed":
                                        statusBG = "#80e292";
                                        textColor = "success";
                                        break;

                                    default: statusBG = "";
                                }

                                return (
                                    <tr key={Index} >
                                        <td className='fw-bold text-center'>{Index + 1}</td>
                                        <td className='d-flex'>
                                            <span className='rounded-pill pe-2 d-flex align-items-center'>
                                                <img className='img-fluid rounded-pill projects_Imgs ' src={data.icon} alt="Something Wrong" />
                                            </span>

                                            <div className=''>
                                                <div className='d-flex align-items-center'>
                                                    {data.title}

                                                    <span className={`px-1 ms-2 small rounded-2 fw-bold text-${text}`} style={{ fontSize: "12px" , background : `${priorityBg}` }}>
                                                        {data.periority}
                                                    </span>

                                                </div>

                                                <span className='small text-lowercase p-0 m-0'>Resources in Project: {data.resources}</span>
                                            </div>

                                        </td>

                                        <td>{data.clientname}</td>
                                        <td>{data.manager}</td>
                                        <td>{data.startdate}</td>
                                        <td>{data.enddate}</td>
                                        <td>
                                            <span className={`text-${textColor} px-2 p-1 small`} style={{ background: `${statusBG}` }}>{data.status}</span>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
        } />
    );
}
