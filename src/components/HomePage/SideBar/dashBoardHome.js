
import React from 'react';

const DashboardHome = (props) =>
{
  return(
      /* bind props function to be able to pass 'Dashboard-Home' parameter back to the parent class */    
    <div>
      <button onClick={props.switchDashboardComponents.bind(this, 'Dashboard-Home')}>Dashboard Home</button>
    </div>
  )
}

export default DashboardHome;
