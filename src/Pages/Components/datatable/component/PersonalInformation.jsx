import React, { useEffect, useRef, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMobile, faCalendar, faAddressCard, faGlobe, faIdCard } from '@fortawesome/free-solid-svg-icons';

export default function PersonalInformation({ employedata }) {

    const iconUser = <FontAwesomeIcon icon={faUser} />;
    const iconMobile = <FontAwesomeIcon icon={faMobile} />;
    const iconCalender = <FontAwesomeIcon icon={faCalendar} />;
    const iconAddress = <FontAwesomeIcon icon={faAddressCard} />;
    const iconGlobe = <FontAwesomeIcon icon={faGlobe} />;
    const iconId = <FontAwesomeIcon icon={faIdCard} />;

    const [name, setName] = useState('');
    const [cnic, setCnic] = useState('');
    const [contact, setContact] = useState('');
    const [dobs, setDOB] = useState('');
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState('');
    const [selectedFileName, setSelectedFileName] = useState('');

    const uploadCnicRef = useRef(null);
    const fileInputRef = useRef(null);

    useEffect(() => {

        setName(employedata.name);
        setCnic(employedata.cnic);
        setContact(employedata.contact);
        setDOB(employedata.dob);
        setAddress(employedata.address);
        setCountry(employedata.country);

    }, [employedata])

    const handleFileChange = () => {

        const fileInput = fileInputRef.current;
        if (fileInput.files.length > 0) {
            setSelectedFileName(fileInput.files[0].name);
        } else {
            setSelectedFileName('');
        }
    };

    return (
        <div className='row'>

            <h5 className=''>PersonalInformation</h5>

            <div className="col-md-6">
                <div className="">
                    <label htmlFor="exampleFormControlInput1" className="form-label small">Full Name</label>

                    <div className="input-group">
                        <span className="input-group-text set_icon_bg">{iconUser}</span>
                        <input onChange={(e) => setName(e.target.value)} type="text" value={name || ''} className='form-control' placeholder="Muhammad Ali" />
                    </div>

                </div>
            </div>

            <div className="col-md-6">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label small">Mobile Number</label>

                    <div className="input-group">
                        <span className="input-group-text set_icon_bg">{iconMobile}</span>
                        <input onChange={(e) => setContact(e.target.value)} value={contact || ''} type="number" className='form-control ' placeholder='+00 000-00000-000' />
                    </div>

                </div>
            </div>

            <div className="col-md-6">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label small">Date of Birth</label>

                    <div className="input-group">
                        <span className="input-group-text set_icon_bg">{iconCalender}</span>
                        <input onChange={(e) => setDOB(e.target.value)} value={dobs || ''} type='date' className='form-control' placeholder='08/05/2002' />
                    </div>

                </div>
            </div>

            <div className="col-md-6">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label small">Address</label>

                    <div className="input-group">
                        <span className="input-group-text set_icon_bg">{iconAddress}</span>
                        <input onChange={(e) => setAddress(e.target.value)} value={address || ''} type="text" className='form-control ' placeholder='Gulshan Iqbal Street No # 3 Lahore punjab' />
                    </div>

                </div>
            </div>

            <div className="col-md-6">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label small">Country</label>

                    <div className="input-group">
                        <span className="input-group-text set_icon_bg">{iconGlobe}</span>
                        <input onChange={(e) => setCountry(e.target.value)} value={country || ''} type="text" className='form-control ' placeholder='Pakistan' />
                    </div>

                </div>
            </div>

            <div className="col-md-6">

                <div className="mb-3 w-100">
                    <div className="d-flex justify-content-between pe-2">
                        <label htmlFor="exampleFormControlInput1" className="form-label small">Cnic Number</label>
                        <label htmlFor="exampleFormControlInput1" className="form-label small text-danger">{selectedFileName}</label>
                    </div>

                    <div className="input-group ">

                        <span className="input-group-text set_icon_bg">{iconId}</span>
                        <input onChange={(e) => setCnic(e.target.value)} value={cnic || ''} type="number" className='form-control  rounded-0' placeholder='00000-0000000-0' />

                        <button className='btn btn-secondary btn-sm py-0 ms-md-3' ref={uploadCnicRef} type='button' onClick={() => fileInputRef.current.click()}>
                            <i className="fa-solid fa-thin me-1 fa-paperclip" typeof=''></i>Upload CNIC
                        </button>

                        <input type="file" ref={fileInputRef} className='form-control w-25 d-none' id='adduserCnicInput' onChange={handleFileChange} />
                    </div>
                </div>

            </div>
        </div>

    );
}
