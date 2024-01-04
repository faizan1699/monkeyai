import React from 'react';

import InformationData from './ProfessionalInformationData';

export default function ProfessionalDetail() {

    const EmployeProfessionaldata = [
        { employeId: 44883, EmployType: "Full Time", jobtitle: "Frontend Engineer", location: "Pakistan", department: "Software Engineering", Joindata: "January 01,2023" },
    ]

    return (
        <div className='small'>
            <h5 className='card-title'>Professional Information</h5>
            <>
                {
                    EmployeProfessionaldata.map((data, Index) => (
                        <div className="" key={Index}>
                            <InformationData data={data} />
                        </div>
                    ))
                }
            </>
        </div>
    )
}
