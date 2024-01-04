import React, { useRef, useState } from 'react';

import EducationalInformation from './components/EducationalInformation';
import PersonalInformation from './components/PersonalInformation';
import ProffesionalInformation from './components/ProffesionalInformation';
import SkillsSet from './components/SkillsSet';

import Card from '../../../../Components/card/Card';
import DeveloperImg from '../../../../../Common/EmployImage/Ali.jpeg';

import AddBtn from '../../../../Components/AddBtn/AddBtn';

export default function AddSource() {
  const fileInputRef = useRef(null);
  const [fileUrl, setFileUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFileUrl(url);
    }
  };

  const handleimgUpload = () => {
    fileInputRef.current.click();
  };

  const HandleAddResource = () => {
    alert("Resources Add Successfully");
  };

  return (
    <Card classes='border-0 ' carddata={
      <>
        <div className="UploadImg" id='addResourceImg'>

          {fileUrl ? (
            <img className='img-fluid rounded-pill' id='add_source_Uploaded_img' src={fileUrl} alt="Developer_Img" />
          ) : (

            <div className='d-flex align-items-center'>

              <div className='position-relative'>

                <img className='img-fluid rounded-pill' id='developer_Dummy' onClick={handleimgUpload} src={DeveloperImg} alt="Developer_Img" />
                <span className='position-absolute'>
                  <i className='fa-solid fa-camera p-1  small rounded-pill border border-2' style={{ marginLeft: "-20px" }}></i>
                </span>

              </div>
            </div>

          )}

        </div>

        <input className='d-none' onChange={handleFileChange} ref={fileInputRef} type="file" />

        <form onSubmit={HandleAddResource}>

          <PersonalInformation />
          <EducationalInformation />
          <ProffesionalInformation />
          <SkillsSet />

          <div className='d-flex justify-content-end'>
            <AddBtn btntitle='Save' iconClass='d-none' btnclass='px-4 btn-dark' routlink='' />
          </div>

        </form>

      </>
    }
    />
  );
}
