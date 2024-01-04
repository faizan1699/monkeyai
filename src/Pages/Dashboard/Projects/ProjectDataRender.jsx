import React, { useEffect, useState } from 'react';

const ProjectDataRender = ({ data, Index }) => {
    const [progressEndValue, setProgressEndValue] = useState(data.projectcomplete);

    useEffect(() => {
        const circularProgress = document.querySelector(`.circular-progress-${Index}`);
        const progressValue = document.querySelector(`.progress-value-${Index}`);

        progressValue.textContent = `${progressEndValue}%`;
        circularProgress.style.background = `conic-gradient( ${data.progresscolor} ${progressEndValue * 3.6}deg, #E9ECEF 0deg)`;
        setProgressEndValue(progressEndValue);

    }, [progressEndValue, Index , data.progresscolor]);

    return (
        <div className='row'>

            <div className="col-3 py-1">
                <img className='img-fluid projects_Imgs' src={data.logo} alt="Logo Not Found" />
            </div>

            <div className="col-7 p-0">
                <div className='card-text fw-bold small'>{data.title}</div>
                <p className='small'><span>Resources in Projects :</span> {data.resourcesnum}</p>
            </div>

            <div className="col-1 py-1 small">
                <div className="fw-bold small">

                    <div className={`circular-progress border-danger circular-progress-${Index}`}>
                        <span className={`progress-value progress-value-${Index}`}>{data.projectcomplete}</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProjectDataRender;
