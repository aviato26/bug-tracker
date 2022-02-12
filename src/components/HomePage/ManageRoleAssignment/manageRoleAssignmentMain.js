
import { React, useState, useEffect } from 'react';
import Title from './title.js';
import UserSelection from './userSelection.js';
import AssignRole from './assignRole.js';
import Personnel from './personnel.js';

const ManageRoleAssignmentMain = (props) =>
{
  const [currentUser, updateCurrentUser] = useState(() => '');
  const [currentRole, updateCurrentRole] = useState(() => 'Admin');

  let filteredUsers = (props) => {
    const users = props.users.map(users =>
      {
        if(users.UserName == currentUser)
        {
          users.Role = currentRole;
        }
        return users;
      });

      // update users list state
      props.updateUsersListState(users);
  }

  return(
    <div id='DashboardMain'>
      <div>
        <Title />
        <UserSelection users={props.users} updateCurrentUser={updateCurrentUser} />
        <AssignRole role={props.users} updateCurrentRole={updateCurrentRole} />
        <button onClick={() => filteredUsers(props)}>Update User</button>
      </div>
      <div>
        <Personnel users={props.users} />
      </div>
    </div>
  )
}

export default ManageRoleAssignmentMain;
