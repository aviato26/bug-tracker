
import React from 'react';

const ManageRoleAssignment = (props) =>
{
  return(
    <div>
      <button onClick={props.switchDashboardComponents.bind(this, 'Manage-Role-Assignment')} >Manage Role Assignment</button>
    </div>
  )
}

export default ManageRoleAssignment;
