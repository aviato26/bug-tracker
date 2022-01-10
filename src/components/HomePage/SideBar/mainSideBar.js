
import React from 'react';
import DashboardHome from './dashBoardHome.js';
import SideBarGreeting from './sideBarGreeting.js';
import ManageRoleAssignment from './manageRoleAssignment.js';
import ManageProjectUsers from './manageProjectUsers.js';
import MyProjects from './myProjects.js';
import MyTickets from './myTickets.js';
import UserProfile from './userProfile.js';

const MainSideBar = () =>
{
  // these are all buttons to switch between these parts on this page
  return(
    <div className='sideBar item-a'>
      <SideBarGreeting />
      <DashboardHome />
      <ManageRoleAssignment />
      <ManageProjectUsers />
      <MyProjects />
      <MyTickets />
      <UserProfile />
    </div>
  )
}

export default MainSideBar;
