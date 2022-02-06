
import React from 'react';
import MainHomePageHeader from './Header/mainHomePageHeader.js';
import MainSideBar from './SideBar/mainSideBar.js';
import DashBoardMain from './DashboardHome/dashBoardMain.js';
import ManageRoleAssignmentMain from './ManageRoleAssignment/manageRoleAssignmentMain.js';

const MainHomePage = (props) =>
{
  return(
    <div className='container'>
      <MainSideBar switchDashboardComponents={props.switchDashboardComponents}/>
      <MainHomePageHeader />

      {props.currentDashboardComponent === 'Dashboard-Home' && <DashBoardMain tickets={props.ticket}/>}
      {props.currentDashboardComponent === 'Manage-Role-Assignment' && <ManageRoleAssignmentMain users={props.users}/>}
    </div>
  );
}

export default MainHomePage;
