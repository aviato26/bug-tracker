
import React from 'react';

const MyTickets = (props) =>
{
  return(
    <div>
      <button onClick={props.switchDashboardComponents.bind(this, 'My-Tickets')} >My Tickets</button>
    </div>
  )
}

export default MyTickets;
