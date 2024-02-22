import React, { useEffect, useRef, useState } from 'react';

import EducationalInformation from '../datatable/component/EducationalInformation';
import PersonalInformation from '../datatable/component/PersonalInformation';
import ProffesionalInformation from '../datatable/component/ProffesionalInformation';
import SkillsSet from '../datatable/component/SkillsSet';

import Card from '../card/Card';

import dummyImg from '../../../Common/dummyimg/dummy-img.jpg';

import { useParams } from 'react-router-dom';

const EditSourceForm = () => {

  const fileInputRef = useRef(null);

  const [imge, setImge] = useState('');
  const [employ, setEmploy] = useState([]);
  const [fileUrl, setFileUrl] = useState('');

  const { employeeId } = useParams();

  useEffect(() => {

    const getemploye = localStorage.getItem('Employes');
    const parseEmploye = JSON.parse(getemploye);
    const findEmploye = parseEmploye.find((emp) => emp.id === employeeId);
    setEmploy(findEmploye)

    setFileUrl(dummyImg)

  }, [employeeId]);

  const HandleEditResource = (e) => {

    e.preventDefault();
    const getEmployee = localStorage.getItem('Employes');
    const parseEmploy = JSON.parse(getEmployee);
    const findEmploye = parseEmploy.find((employ) => employ.id === employeeId);
    console.log(findEmploye);
  };

  useEffect(() => {
    setImge(employ.employeimg);
  }, [employ])

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    if (file) {

      reader.onload = function () {

        const url = reader.result;
        setFileUrl(url);

      }
      reader.readAsDataURL(file)
    }

  };

  const handleimgUpload = () => {
    fileInputRef.current.click();
  };

  return (

    <Card classes='border-0 ' carddata={

      <>

        <div className="UploadImg" id='addResourceImg'>

          {
            !fileUrl ? (
              <img className='img-fluid rounded-pill' id='add_source_Uploaded_img' src={fileUrl} alt="Developer_Img" />

            ) : (

              <div className='d-flex align-items-center'>

                <div className='position-relative'>

                  <img className='img-fluid rounded-pill' id='developer_Dummy' onClick={handleimgUpload} src={imge} alt="Developer_Img" />
                  <span className='position-absolute'>
                    <i className='fa-solid fa-camera p-1  small rounded-pill border border-2' style={{ marginLeft: "-20px" }}></i>
                  </span>

                </div>
              </div>

            )}

        </div>

        <input className='d-none' onChange={handleFileChange} ref={fileInputRef} type="file" />

        <form onSubmit={HandleEditResource}>

          <PersonalInformation  employedata={employ} />
          <EducationalInformation employedata={employ} />
          <ProffesionalInformation employedata={employ} />
          <SkillsSet employedata={employ} />

          <div className='d-flex justify-content-end'>
            <button className='btn btn-dark px-5'>Save</button>
          </div>

        </form>

      </>
    }
    />
  );
}

export default EditSourceForm;