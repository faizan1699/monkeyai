import React, { useEffect, useState } from 'react';

import Card from '../../../../../Components/card/Card';
import Pagination from '../../../../../Components/PaginationComponent/Pagination';
import NotFound from '../../../../../Components/notfound/NotFound';

const TotalProjects = (props) => {

    const [project, setProject] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    useEffect(() => {

        const getProjectslist = localStorage.getItem('addnewproject');
        const parsData = JSON.parse(getProjectslist);
        setProject(parsData);

    }, [])

    const capiTalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <Card carddata={

            <div style={{ overflow: 'scroll' }}>

                {
                    project ? (
                        <>
                            <div className="" style={{ overflow: "scroll" }}></div>
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
                                        project.map((data, Index) => {

                                            let priorityBg = "";
                                            let prtext = '';
                                            switch (data.priority) {
                                                case "Medium":
                                                    priorityBg = "#e3f5f";
                                                    prtext = "info"
                                                    break;
                                                case "High":
                                                    priorityBg = "#ffc1cc";
                                                    prtext = "danger";
                                                    break;
                                                case "Low":
                                                    priorityBg = "#7fffd4";
                                                    prtext = "dark";
                                                    break;


                                                default:
                                                    prtext = 'dark';
                                                    priorityBg = "yellow";
                                            }

                                            let statusBG = "";
                                            let textColor = "";
                                            switch (data.status) {
                                                case "in process":
                                                    statusBG = '#fcfca4';
                                                    textColor = 'warning';
                                                    break;

                                                case "completed":
                                                    statusBG = "#80e292";
                                                    textColor = "success";
                                                    break;

                                                default: statusBG = "";
                                            }

                                            return (
                                                <tr id={Index + 1} key={Index} >
                                                    <td className='fw-bold text-center'>{Index + 1}</td>
                                                    <td className='d-flex'>

                                                        <span className='rounded-pill pe-2 d-flex align-items-center'>
                                                            <img className='img-fluid rounded-pill projects_Imgs ' src={data.logo} alt="Something Wrong" />
                                                        </span>

                                                        <div className=''>
                                                            <div className='d-flex align-items-center'>

                                                                <div className='fw-bold'>
                                                                    {data.project}
                                                                </div>

                                                                <span className={`px-1 ms-2 small rounded-2 fw-bold text-${prtext}`} style={{ fontSize: "11px", background: `${priorityBg}` }}>
                                                                    {data.priority ? data.priority : "missing"}
                                                                </span>

                                                            </div>

                                                            <span className='small text-lowercase p-0 m-0'>Resources in Project: {data.resources}</span>
                                                        </div>

                                                    </td>

                                                    <td>{data.client}</td>
                                                    <td>{data.manager ? data.manager : "Not Assigned"}</td>
                                                    <td>{data.startdate}</td>
                                                    <td>{data.enddate}</td>

                                                    <td>
                                                        <span className={`text-${textColor} px-2 p-1 small`} style={{ background: `${statusBG}` }}>{capiTalize(data.status ? data.status : "not found")}</span>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>
                            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                        </>
                    ) : (
                        <div><NotFound /></div>)
                }

            </div>
        } />
    );
}

export default TotalProjects