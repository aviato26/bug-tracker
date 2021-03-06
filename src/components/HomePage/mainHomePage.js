
import React from 'react';
import MainHomePageHeader from './Header/mainHomePageHeader.js';
import MainSideBar from './SideBar/mainSideBar.js';
import DashBoardMain from './DashboardHome/dashBoardMain.js';
import ManageRoleAssignmentMain from './ManageRoleAssignment/manageRoleAssignmentMain.js';
import ManageProjectRoleMain from './ManageProjectUsers/manageProjectRoleMain.js';
import MyProjectsMain from './MyProjectsComponent/myProjectsMain.js';

const MainHomePage = (props) =>
{
  return(
    <div className='container'>
      <MainSideBar switchDashboardComponents={props.switchDashboardComponents}/>
      <MainHomePageHeader />
      { props.currentDashboardComponent === 'Dashboard-Home' && <DashBoardMain tickets={props.ticket}/> }
      { props.currentDashboardComponent === 'Manage-Role-Assignment' && <ManageRoleAssignmentMain users={props.users} updateUsersListState={props.updateUsersListState}/> }
      { props.currentDashboardComponent === 'Manage-Project-Users' && <ManageProjectRoleMain projects={props.projects} users={props.users} /> }
      { props.currentDashboardComponent === 'My-Projects' && <MyProjectsMain projects={props.projects} switchDashboardComponents={props.switchDashboardComponents} updateProjectsList={props.updateProjectsList} /> }
    </div>
  );
}

export default MainHomePage;
