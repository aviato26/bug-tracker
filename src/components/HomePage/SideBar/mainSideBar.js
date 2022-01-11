
import React from 'react';
import DashboardHome from './dashBoardHome.js';
import SideBarGreeting from './sideBarGreeting.js';
import ManageRoleAssignment from './manageRoleAssignment.js';
import ManageProjectUsers from './manageProjectUsers.js';
import MyProjects from './myProjects.js';
import MyTickets from './myTickets.js';
import UserProfile from './userProfile.js';

const MainSideBar = (props) =>
{
  // these are all buttons to switch between these parts on this page
  return(
    <div className='sideBar item-a'>
      <SideBarGreeting />
      <DashboardHome switchDashboardComponents={props.switchDashboardComponents} />
      <ManageRoleAssignment switchDashboardComponents={props.switchDashboardComponents} />
      <ManageProjectUsers switchDashboardComponents={props.switchDashboardComponents} />
      <MyProjects switchDashboardComponents={props.switchDashboardComponents} />
      <MyTickets switchDashboardComponents={props.switchDashboardComponents} />
      <UserProfile switchDashboardComponents={props.switchDashboardComponents} />
    </div>
  )
}

export default MainSideBar;
