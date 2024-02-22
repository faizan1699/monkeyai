import React from 'react';

export default function DeveloperDataCard(props) {

    return (

        <div className=''>

            <div className='d-flex justify-content-end'>

                <select className="form-select-sm p-1 mb-2 fw-bold developer_status_Update" >
                    <option defaultValue>Secured</option>
                    <option value="Free">Free</option>
                    <option value="Dismiss">Dismiss</option>
                </select>

            </div>

        </div>

    )
}
