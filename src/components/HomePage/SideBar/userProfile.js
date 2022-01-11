
import React from 'react';

const UserProfile = (props) =>
{
  return(
    <div>
      <button onClick={props.switchDashboardComponents.bind(this, 'User-Profile')} >User Profile</button>
    </div>
  )
}

export default UserProfile;
