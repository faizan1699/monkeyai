import React, { useState } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const App = () => {
  const [dataPoints] = useState([
    { name: "Principal Data Scientist", y: 5 },
    { name: "Senior data Scientist", y: 32 },
    { name: "Junior Data Scientist", y: 40 },
    { name: "Senior Data Scientist", y: 17 , exploded: true},
    { name: "Data Engineer", y: 7 },
    { name: "Associate Data Engine", y: 21 },
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

export default App;
