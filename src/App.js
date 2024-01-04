import React, { useEffect } from 'react';

import Dashboard from './Pages/Dashboard/Dashboard';

import Department from './Pages/Department/Department';
import DepartmentEmployes from './Pages/Department/departmentemloylist/DepartmentEmployeList';
import DepartmentList from './Pages/Department/departmentlist/DepartmentList';

import AddSource from './Pages/Employes/AddSource/AddSource';
import AssignProject from './Pages/Employes/AssignProject/AssignProject';
import EmployeDetails from './Pages/Employes/EmployeDetails/EmployeDetails';
import Employes from './Pages/Employes/Employes';
import EmployesBasePage from './Pages/Employes/EmployesBasePage';

import SideBar from './Pages/Navigation/SideBar/SideBar';
import Navbar from './Pages/Navigation/TopBar/Navbar';

import ProjectsIndex from './Pages/Projects/ProjectIndex';
import Projects from './Pages/Projects/Projects';
import AddProject from './Pages/Projects/pages/addproject/AddProject';
import EditResource from './Pages/Projects/pages/editresource/EditResource';
import ProjectList from './Pages/Projects/pages/projectlist/ProjectList';

import Error from './Pages/ErrorPage/Error';
import Sample from './Pages/Sample';

import { Route, Routes } from 'react-router-dom';

function App() {

  useEffect(() => {
    const pageTitleFromUrl = window.location.pathname.replace('/', '');
    document.title = pageTitleFromUrl || 'AI_AI';
  }, []);

  return (

    <div className='container-fluid p-0'>

      <Navbar />
      <Sample />
      <div className='row g-0'>

        <div className=" col-md-2 mt-1" style={{ background: "white" }}>
          <SideBar />
        </div>

        <div className="col-md-10 px-2">

          <Routes>

            <Route exact path='/' element={<Dashboard />} />
            <Route path='/dashboard' element={<Dashboard />} />

            <Route path='/employees' element={<EmployesBasePage />} >

              <Route index element={<Employes />} />
              <Route path='addresource' element={<AddSource />} />
              <Route path="employdetails" element={<EmployeDetails />} />
              <Route path="assignproject" element={<AssignProject />} />
            </Route>

            <Route path='/projects' element={<Projects />} >
              <Route index element={<ProjectsIndex />} />
              <Route path='editresource' element={<EditResource />} />
              <Route path="projectlist" element={<ProjectList />} />
              <Route path="addproject" element={<AddProject />} />
            </Route>

            <Route path='/department' element={<Department />} >

              <Route index element={<DepartmentList />} />
              <Route path='departmentemployees' element={<DepartmentEmployes />} />

            </Route>

            <Route path='*' element={<Error />} />

          </Routes>

        </div>
      </div >
    </div>
  );
}

export default App;
