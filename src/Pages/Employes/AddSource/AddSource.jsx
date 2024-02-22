import React, { useRef, useState } from 'react';

import EducationalInformation from './Components/EducationalInformation';
import PersonalInformation from './Components/PersonalInformation';
import ProffesionalInformation from './Components/ProffesionalInformation';
import SkillsSet from './Components/SkillsSet';
import DeveloperImg from '../../../Common/EmployImage/Ali.jpeg';

import { Link, useNavigate } from 'react-router-dom';

const AddSource = () => {

  const fileInputRef = useRef(null);

  const [addemploye, setAddEmploye] = useState({});
  const [fileUrl, setFileUrl] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
  
    if (file) {
      reader.onload = function () {
        const url = reader.result; 
        setFileUrl(url);
        setAddEmploye((prevData) => ({ ...prevData, employeimg: url }));
      };
      reader.readAsDataURL(file); 
    }
  };
  
  const handleimgUpload = () => {
    fileInputRef.current.click();
  };

  const HandleAddResource = (e) => {
    e.preventDefault();

    const existingEmplye = JSON.parse(localStorage.getItem(`Employes`)) || [];
    existingEmplye.push(addemploye);
    localStorage.setItem(`Employes`, JSON.stringify(existingEmplye));
    navigate('/employees')
  };

  return (

    <div className=''>

      <h3 className='d-flex my-4 fw-bold' id='Employe_Filter_TitleSet'>
        <Link className="nav-link" to='/employees' >
          <i className="fa-solid small me-2 fa-arrow-left"></i>
        </Link>
        Add Resource
      </h3>

      <div className="card">
        <div className="card-body">
          <div className="UploadImg" id='addResourceImg'>

            {
              fileUrl ? (
                <img className='img-fluid rounded-pill' onClick={handleimgUpload} id='add_source_Uploaded_img' src={fileUrl} alt="Developer_Img" />
              ) : (

                <div className='d-flex align-items-center'>

                  <div className='position-relative'>

                    <img className='img-fluid rounded-pill' id='developer_Dummy' onClick={handleimgUpload} src={DeveloperImg} alt="Developer_Img" />
                    <span className='position-absolute'>
                      <i className='fa-solid fa-camera p-1  small rounded-pill border border-2' onClick={handleimgUpload} style={{ marginLeft: "-20px" }}></i>
                    </span>

                  </div>
                </div>

              )}

          </div>

          <input className='d-none' onChange={handleFileChange} ref={fileInputRef} type="file" />

          <form onSubmit={HandleAddResource}>

            <PersonalInformation setAddEmploye={setAddEmploye} />
            <EducationalInformation setAddEmploye={setAddEmploye} />   {/* handle the add education of employe */}
            <ProffesionalInformation setAddEmploye={setAddEmploye} />
            <SkillsSet /> {/* Handle the Skills */}

            <div className='d-flex justify-content-end'>
              <button className='btn btn-dark px-5'>Save</button>
            </div>

          </form>

        </div>

      </div>
    </div>
  );
}

export default AddSource;