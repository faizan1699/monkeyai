import React, { useState } from 'react';

import { FileUploader } from "react-drag-drop-files";

const UploadFile = ({ setAddProjectData }) => {

    const fileTypes = ["JPG", "PNG", "GIF"];

    const [file, setFile] = useState({});

    const handleChange = (file) => {
        setFile(file);

        const reader = new FileReader();

        if (file) {

            reader.onload = function() {
                const url = reader.result;
                
                setFile(url);
                setAddProjectData((prevData) => ({...prevData, imglogo : url,}));
            }
            reader.readAsDataURL(file);
        }
    };


    return (
        <div className="row h-auto">

            <div className='col-md-10  g-0' style={{ cursor: "pointer" }}>

                <FileUploader classes='w-100 ' handleChange={handleChange}
                    children={
                        <div className='d-flex align-items-center flex-column rounded py-3 w-100' style={{ background: "lightgrey" }}>
                            <div className='my-3'>
                                <i className="fa-solid fa-file-arrow-up text-secondary opacity-50" style={{ fontSize: "50px" }}></i>
                            </div>
                            <label className="small">Drag & drop file here or</label>
                            <p className='fw-bold'>Browse File</p>
                            <span className='small card-text '>2mb</span>
                        </div>
                    }
                    name="file" types={fileTypes}
                />
            </div>

            <div className="col-md-2">
                <div className='d-flex justify-content-center flex-column align-items-center my-3'>

                    <div>
                        {
                            file ? (
                                <div className='img-fluid h-100'>
                                    <img className='img-fluid' id='company_Logo' src={file} alt="not Found" />
                                </div>
                            ) : (
                                <i className="fa-solid fa-file-arrow-up text-secondary opacity-50" style={{ fontSize: "90px" }}></i>
                            )
                        }
                    </div>

                    <div className='mt-3 '>
                        <button className='btn btn-dark px-5' >Save</button>
                    </div>

                </div>
            </div>
        </div>
    );
}


export default UploadFile