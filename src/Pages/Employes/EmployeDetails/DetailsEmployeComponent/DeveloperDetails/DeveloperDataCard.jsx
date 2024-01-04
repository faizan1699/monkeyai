import React from 'react';

export default function DeveloperDataCard(props) {

    return (

        <div className=''>

            <div className='d-flex justify-content-end'>
                <select className="form-select-sm p-0 me-1 mb-2 developer_status_Update" >
                    <option defaultValue>{props.data.Status}</option>
                    <option value="1">{props.data.Status2}</option>
                    <option value="2">{props.data.Status3}</option>
                </select>
            </div>

            <div className="d-flex justify-content-center my-2">
                <img src={props.data.Img} className='img-fluid rounded-pill w-25 border border-2 border-danger' style={{ minWidth: "70px" }} alt="Img-Not_Found" />
            </div>

            <h5 className="card-title text-center">{props.data.Name}</h5>
            <div className='card-text small text-center'>{props.data.Gmail}</div>
       
        </div>

    )
}
