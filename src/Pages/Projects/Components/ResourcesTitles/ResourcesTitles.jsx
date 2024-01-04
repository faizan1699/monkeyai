import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

// const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const App = () => {
  const options = {
    animationEnabled: true,
    subtitles: [{
      text: "128 Engineers",
      verticalAlign: "center",
      fontSize: 24,
      dockInsidePlotArea: true
    }],
    data: [{
      type: "doughnut",
      showInLegend: true,
      indexLabel: "{name}: {y}",
      dataPoints: [
        { name: "Principal Data Scientist", y: 5 },
        { name: "Senior data Scientist", y: 31 },
        { name: "Junior Data Scientist", y: 40 },
        { name: "Senior Data Scientist", y: 17 },
        { name: "Data Engineer", y: 7 },
        { name: "Associate Data Engine", y: 21 },
        { name: "Principal Software Engineer", y: 7 },
      ]
    }]
  };

  return (
    <div className='card'>
      <h5 className='card-header'>Resources Titles</h5>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default App;
