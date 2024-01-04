import React from 'react';

import ProjectMercyCards from './ProjectMercyCards';

export default function ProjectMercyIdpTopCard() {

  const ProjectDetails = [
    { title: "Total Employes", description: 34, Icon: "fa-solid fa-people-group", bg: "purple", },
    { title: "Project Manager", description: "Husnain Kiyani", Icon: "fa-solid fa-user", bg: "#E4CD05", },
    { title: "End Date", description: "31/12/2024", Icon: "fa-solid fa-calendar", bg: "red", }
  ];

  return (
    <div className="row g-2">

      {
        ProjectDetails.map((data, Index) => (
          <div className="col-md-4" key={Index}>
            <ProjectMercyCards data={data} />
          </div>
        ))
      }
    </div>

  )
}
