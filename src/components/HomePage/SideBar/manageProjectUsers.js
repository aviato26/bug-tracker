
import React from 'react';

const ManageProjectUsers = (props) =>
{
  return(
    <div>
      <button onClick={props.switchDashboardComponents.bind(this, 'Manage-Project-Users')} >Manage Project Users</button>
    </div>
  )
}

export default ManageProjectUsers;
