
import React from 'react';

const MyProjects = (props) =>
{
  return(
    <div>
      <button onClick={props.switchDashboardComponents.bind(this, 'My-Projects')} >My Projects</button>
    </div>
  )
}

export default MyProjects;
