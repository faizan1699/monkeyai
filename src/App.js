import React, { Suspense, createContext, useEffect, useState } from 'react';

import { Route, Routes, useLocation } from 'react-router-dom';

import urlImg from './link_img.jpeg';

const Error = React.lazy(() => import('./pages/ErrorPage/Error'));
const Login = React.lazy(() => import('./pages/loginsignup/login/Login'));
const Signup = React.lazy(() => import('./pages/loginsignup/signup/Signup'));
const Alert = React.lazy(() => import('./pages/Components/alert/Alert'));
const Protected = React.lazy(() => import('./pages/protectedroute/Protected'));

const Dashboard = React.lazy(() => import('./pages/Dashboard/Dashboard'));

const Department = React.lazy(() => import('./pages/Department/Department'));
const DepartmentEmployes = React.lazy(() => import('./pages/Department/departmentemloylist/DepartmentEmployeList'));
const DepartmentList = React.lazy(() => import('./pages/Department/departmentlist/DepartmentList'));
const AddDepartment = React.lazy(() => import('./pages/Department/adddepartment/AddDepartment'));

const AddSource = React.lazy(() => import('./pages/Employes/AddSource/AddSource'));
const AssignProject = React.lazy(() => import('./pages/Employes/AssignProject/AssignProject'));
const EmployeDetails = React.lazy(() => import('./pages/Employes/EmployeDetails/EmployeDetails'));
const Employes = React.lazy(() => import('./pages/Employes/Employes'));
const EmployeBase = React.lazy(() => import('./pages/Employes/EmployeBase'));
const EditSource = React.lazy(() => import('./pages/Employes/editsource/EditSource'));

const SideBar = React.lazy(() => import('./pages/Navigation/SideBar/SideBar'));
const Navbar = React.lazy(() => import('./pages/Navigation/TopBar/Navbar'));

const ProjectsIndex = React.lazy(() => import('./pages/Projects/ProjectIndex'));
const Projects = React.lazy(() => import('./pages/Projects/Projects'));
const AddProject = React.lazy(() => import('./pages/Projects/pages/addproject/AddProject'));
const EditResource = React.lazy(() => import('./pages/Projects/pages/editresource/EditResource'));
const ProjectList = React.lazy(() => import('./pages/Projects/pages/projectlist/ProjectList'));


export const setAlerts = createContext(null);

function App() {

    const [alert, setAlert] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        const pathname = path.slice(1);
        document.title = pathname || 'Monkey_Ai';
    }, [location]);

    const getpathname = window.location.pathname;

    const capitalize = (word) => {
        const lower = word.slice(1); 
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    
    document.title = 'Monkey_Ai';
    document.querySelector('meta[property="og:url"]').setAttribute('content', `${window.location.href}`);
    document.querySelector('meta[name="description"]').setAttribute('content', `Monkey_ai ${capitalize(getpathname)} for Projects and Employees details`);
    document.querySelector('meta[property="og:image"]').setAttribute('content', `${urlImg}`);
    document.querySelector('meta[name="twitter:title"]').setAttribute('content', `This is Monkey_Ai ${capitalize(getpathname)} page`);
    document.querySelector('meta[name="twitter:image"]').setAttribute('content', `${urlImg}`);
    document.querySelector('meta[name="twitter:description"]').setAttribute('content', `This is ${capitalize(getpathname)} page description for twitter`);
    
    <meta name="twitter:description" content="Senior Selachimorpha at DigitalOcean" />

    const currentPath = window.location.pathname;
    const isLoginPage = currentPath === '/login'  || currentPath === '/signup';
    const loginPage = isLoginPage ? true : false;

    const showAlert = (type, message) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 4000);
    }

    return (

        <div className='container-fluid p-0'>

            <setAlerts.Provider value={showAlert}>
                <Suspense Suspense fallback={<div className='d-flex align-items-center justify-content-center h-100' style={{ height: "100vh" }}>
                    <h1 className='text-danger fw-bold mt-5'>Loading....</h1>
                </div>}>

                    <div className='row g-0'>

                        {!loginPage && <Navbar />}

                        {!loginPage && <div className="col-md-2 mt-1" style={{ background: "white" }}>
                            <SideBar />
                        </div>}

                        <div className={`col-md-10 col-12 px-2`}>

                            <Alert alert={alert} />

                            <Routes>

                                <Route index path='/login' element={<Login />} />
                                <Route path='/signup' element={<Signup />} />


                                <Route path='/'  element={<Protected Component={Dashboard} />} />
                                <Route path='/dashboard' index exact element={<Protected Component={Dashboard} />} />

                                <Route path='/employees' element={<Protected Component={EmployeBase} />} >
                                    <Route index element={<Protected Component={Employes} />} />
                                    <Route path="new" element={<Protected Component={AddSource} />} />
                                    <Route path=":employeeId" element={<Protected Component={EmployeDetails} />} />
                                    <Route path=":employeeId/edit" element={<Protected Component={EditSource} />} />
                                    <Route path=":employeeId/assignment" element={<Protected Component={AssignProject} />} />
                                </Route>

                                <Route path='/projects' element={<Protected Component={Projects} />} >
                                    <Route index element={<Protected Component={ProjectsIndex} />} />
                                    <Route path='edit' element={<Protected Component={EditResource} />} />
                                    <Route path="projectlist" element={<Protected Component={ProjectList} />} />
                                    <Route path="addproject" element={<Protected Component={AddProject} />} />
                                </Route>

                                <Route path='/department' element={<Protected Component={Department} />} >
                                    <Route index element={<Protected Component={DepartmentList} />} />
                                    <Route path='adddepartment' element={<Protected Component={AddDepartment} />} />
                                    <Route path='departmentemployees' element={<Protected Component={DepartmentEmployes} />} />
                                </Route>

                                <Route path='*' element={<Error />} />

                            </Routes>

                        </div >
                    </div>

                </Suspense>
            </setAlerts.Provider >

        </div>

    );
}

export default App;
