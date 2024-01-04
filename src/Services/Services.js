
import coke from '../Common/CompaniesLogo/Coke.png';
import bmw from '../Common/CompaniesLogo/BMW.png';
import huawei from '../Common/CompaniesLogo/Huawei.png';
import telenor from '../Common/CompaniesLogo/telenor.png';

import employeImg from '../Common/EmployImage/Ali.jpeg';

export const employeeimg = [
    { img: employeImg }

];

export const EmploySkills = [
    { skill: "NODE JS" },
    { skill: "JavaScript" },
    { skill: "React JS" },
    { skill: "Mern Stack" },
    { skill: "MongoDB" },
    { skill: "Rest API's " },
    { skill: "NEXT JS" },
    { skill: "MongoDB" },
    { skill: "Laravell" },
];

export const DeveloperData = [
    { Name: "Ali Ahmed", Gmail: "aliahmed0000@gmail.com", Img: employeImg, Status: "Active", Status2: "Free", Status3: "Dismiss" }
];

export const sideBarLinks = [
    { linkName: 'Dashboard', linkto: '/dashboard', icon: "fa-table" },
    { linkName: 'Employees', linkto: '/employees', icon: "fa-user" },
    { linkName: 'Projects', linkto: '/projects', icon: "fa-file-lines" },
    { linkName: 'Department', linkto: '/department', icon: "fa-network-wired" },
];

export const lastMonthDetails = [
    { title: "Total Employes", Counts: "1,200", SincelastMont: "18+", Icon: "fa-solid fa-people-group", bg: "purple", textColor: "#02eff7" },
    { title: "Total Projects", Counts: "20", SincelastMont: "53+", Icon: "fa-solid fa-file-invoice", bg: "#02eff7", textColor: "Red" },
    { title: "Total Clients", Counts: "30", SincelastMont: "-1", Icon: "fa-solid fa-hand-holding-dollar", bg: "warning", textColor: "#02eff7" }
];

export const ProjectData = [
    { title: "BMW ( England )", resourcesnum: "45", logo: bmw, projectcomplete: 50, progresscolor: "purple" },
    { title: "Huawaei", resourcesnum: "12", logo: huawei, projectcomplete: 24, progresscolor: "#ef5399" },
    { title: "Haider Foods", resourcesnum: "4", logo: coke, projectcomplete: 33, progresscolor: "green" },
    { title: "Telenor", resourcesnum: "32", logo: telenor, projectcomplete: 56, progresscolor: "#dbdb1e" },
    { title: "Coke", resourcesnum: "12", logo: coke, projectcomplete: 45, progresscolor: "#7aacdb" },
    { title: "Huawaei", resourcesnum: "12", logo: huawei, projectcomplete: 74, progresscolor: "#525659" }
];

export const DepartmentEmployees = [
    { Name: "Muhammad Azhar", mail: "muhammadazhar1122@gmail.com", desigination: "PMO", department: "Data Science", Project: "CDG - Driveronboarding", assignment: "Fix Ui Issues", employimg: employeImg, id: 1 },
    { Name: "Fawwaz Naeem", mail: "fawwaznaeem@gmail.com", desigination: "PMO", department: "Data Science", Project: "CDG - PlateForm", assignment: "Buisiness Analytics", employimg: employeImg, id: 2 },
    { Name: "Abeer Saeed", mail: "abeersaeed@gmail.com", desigination: "Buisin ess Analytic", department: "PMO", Project: "CDG - DataForm", assignment: "Closure of CDG Project", employimg: employeImg, id: 3 },
    { Name: "Abu Baker", mail: "abubaker131@gmail.com", desigination: "PMO", department: "Technical Project Manager", Project: "CDG - DataForm", assignment: "Hirer intensive Usecase", employimg: employeImg, id: 4 },
    { Name: "Khizar Sultan", mail: "khizarsultan@gmail.com", desigination: "Front End Developer", department: "Cloud Engineer", Project: "CDG - DataForm", assignment: "Handle server Issues", employimg: employeImg, id: 5 },
    { Name: "Fawwaz Naeem", mail: "khizarsultan@gmail.com", desigination: "PMO", department: "PMO", Project: "CDG - DataForm", assignment: "Cloud Management", employimg: employeImg, id: 6 },
];


// export function DevelopersListData() {

//     return response;

// }

export const DepartmentEmployeesList = [
    { id: "01", rosorces: 12, department: "Software Engineering", manager: "Muhammad Azhar", mail: "muhammadazhar1122@gmail.com", active: 23, action: "as" },
    { id: "02", rosorces: 12, department: "Data Science", manager: "Fawwaz Naeem", mail: "fawwaznaeem@gmail.com", active: 12, action: "as" },
    { id: "03", rosorces: 12, department: "Data Science", manager: "Abeer Saeed", mail: "abeersaeed@gmail.com", active: 14, action: "as" },
    { id: "04", rosorces: 12, department: "Sales", manager: "Abu Baker", mail: "abubaker131@gmail.com", active: 11, action: "as" },
    { id: "05", rosorces: 12, department: "MERN Development", manager: "Khizar Sultan", mail: "khizarsultan@gmail.com", active: "06", action: "as" },
    { id: "06", rosorces: 12, department: "MEAN development", manager: "Muhammad Umer", mail: "muhammadumer@gmail.com", active: 12, action: "as" },
    { id: "07", rosorces: 12, department: "Consultant", manager: "Muhammad Usama", mail: "usmakhusk@gmail.com", active: 19, action: "as" },
    { id: "08", rosorces: 12, department: "Devsecops", manager: "Muhammad Zubair", mail: "zubairali@gmail.com", active: 12, action: "as" },
    { id: "09", rosorces: 12, department: "Devsecops", manager: "Ali Akber", mail: "akberali@gmail.com", active: 12, action: "as" },
    { id: "10", rosorces: 12, department: "Devsecops", manager: "Nawab Ahmed", mail: "nawabahmed@gmail.com", active: 12, action: "as" },
];

export const DepartmentsEmployes = [
    { title: "DataEngineering", resourceNum: 17 },
    { title: "Data Science", resourceNum: 18 },
    { title: "DevSecOps", resourceNum: 14 },
    { title: "Software Engineering", resourceNum: 58, active: "active" },
    { title: "Sales", resourceNum: 12 }
];

export const TotalProjectList = [
    { icon: telenor, title: "Telenor", periority: "High", resources: "9", clientname: "Wo sheng XI", manager: "Nasir Iqbal", startdate: "2/12/2023", enddate: "4/5/2024", status: "In Progress" },
    { icon: huawei, title: "Pak Aid", periority: "Medium", resources: "9", clientname: "Michael Nelson", manager: "Moeez Ahmad", startdate: "1/3/2021", enddate: "2/6/2024", status: "In Progress" },
    { icon: coke, title: "Ali Welfare", periority: "High", resources: "9", clientname: "Nawaz Sharif", manager: "Asif Cheema", startdate: "5/12/2022", enddate: "4/3/2024", status: "In Progress" },
    { icon: bmw, title: "P&G", periority: "Medium", resources: "9", clientname: "Roben Davis", manager: "Rana Ahmed", startdate: "2/1/2023", enddate: "1/12/2023", status: "Completed" },
    { icon: bmw, title: "NeeubhourHood", periority: "Medium", resources: "9", clientname: "Loes Petter", manager: "Akber Bugti", startdate: "7/2/2020", enddate: "4/06/2025", status: "Completed" },
];


