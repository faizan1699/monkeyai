import React, { useState } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const ResourcesTitle = () => {

  // const [countemployee , setCountEmployees] = useState('');
  // useEffect(() => {
  //   const getEmployes = localStorage.getItem(`Employes`)
  //   const parseEmployee = JSON.parse(getEmployes);
  //   setCountEmployees(parseEmployee)
  // }, [])

  const [dataPoints] = useState([
    // { name: countemployee.department  , y: 12 }
    { name: "Senior data Scientist", y: 3 },
    { name: "Junior Data Scientist", y: 4 },
    { name: "Senior Data Scientist", y: 7, exploded: true },
    { name: "Data Engineer", y: 7 },
    { name: "Associate Data Engine", y: 2 },
    { name: "Principal Software Engineer", y: 7 },
  ]);

  const [totalY] = useState(
    dataPoints.reduce((sum, dataPoint) => sum + dataPoint.y, 0)
  );

  const options = {
    animationEnabled: true,
    subtitles: [
      {
        text: `Total: ${totalY}`,
        verticalAlign: "center",
        fontSize: 20,
        dockInsidePlotArea: true,
      },
    ],
    data: [
      {
        type: "doughnut",
        showInLegend: true,
        indexLabel: "{name} {y}",
        dataPoints: dataPoints,
      },
    ],
    toolTip: {
      enabled: false,
    },
  };

  return (
    <div className='card'>
      <h5 className='card-header'>Resources Titles</h5>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default ResourcesTitle;
