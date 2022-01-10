
import React from 'react';
import MainHomePageHeader from './Header/mainHomePageHeader.js';
import MainSideBar from './SideBar/mainSideBar.js';
/* import DashBoardMain from './DashboardHome/dashBoardMain.js'; */
import ManageRoleAssignmentMain from './ManageRoleAssignment/manageRoleAssignmentMain.js';

const MainHomePage = (props) =>
{
  /* <DashBoardMain tickets={props.ticket}/> */
  return(
    <div className='container'>
      <MainSideBar />
      <MainHomePageHeader />
      <ManageRoleAssignmentMain users={props.users}/>
    </div>
  );
}

export default MainHomePage;
