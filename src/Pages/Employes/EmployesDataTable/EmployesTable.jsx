import React from 'react';

export default function EmployesTable(props) {
    const getEmployeData = (data) => {
        // setEmployeData(data);
        console.log(data);
    };

    return (
        <div style={{ overflow: "scroll" }}>

            <table className="table table-hover table-responsive-sm Employ_table">
                <thead className='bg-danger'>
                  
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Employee Name</th>
                        <th scope="col">Title</th>
                        <th scope="col">Department</th>
                        <th scope="col">Projects</th>
                        <th scope="col">Assignment</th>
                    </tr>

                </thead>

                <tbody>
                    {
                    props.DevelopersListData && props.DevelopersListData.map((data, Index) => (
                       
                       <tr onClick={() => getEmployeData(data)} key={Index}>

                            <td className='fw-bold text-center'>{Index + 1}</td>

                            <td className='d-flex'>
                                <img className='img-fluid rounded-pill me-2' src={data.employimg} style={{ maxWidth: "50px", maxHeight: "55px" }} alt="Not Found" />

                                <div className='m-0  d-flex flex-column'>
                                    <p className='small m-0 fw-bold '>
                                        {data.Name}
                                    </p>

                                    <p className='small m-0'>
                                        {data.mail}
                                    </p>
                                </div>
                            </td>

                            <td className='small'>{data.desigination}</td>
                            <td className='small'>{data.department}</td>
                            <td className='small'>{data.project}</td>
                            <td className='small'>{data.assignment}</td>

                        </tr>
                    ))
                    }
                </tbody>

            </table>

        </div>
    );
}
