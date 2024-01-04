import React, { useState } from 'react';

import FileSave from '../saveuploadedfile/FileSave';
import { FileUploader } from "react-drag-drop-files";


export default function UploadFileComponent() {
  
    const fileTypes = ["JPG", "PNG", "GIF"];

    const [file, setFile] = useState(null);
    
    const handleChange = (file) => {
        setFile(file);
    
        if (file) {
            const url = URL.createObjectURL(file);
            setFile(url); 
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
                <FileSave fileUrl={file} />
            </div>

        </div>
    );
}
