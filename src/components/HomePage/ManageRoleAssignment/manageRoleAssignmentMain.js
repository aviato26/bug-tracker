
import React from 'react';
import Title from './title.js';
import UserSelection from './userSelection.js';
import AssignRole from './assignRole.js';
import Personnel from './personnel.js';

const ManageRoleAssignmentMain = (props) =>
{
  return(
    <div id='DashboardMain'>
      <div>
        <Title />
        <UserSelection users={props.users}/>
        <AssignRole role={props.users}/>
      </div>
      <div>
        <Personnel users={props.users}/>
      </div>
    </div>
  )
}

export default ManageRoleAssignmentMain;
