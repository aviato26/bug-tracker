
import React from 'react';
//import TicketsByPriority from './ticketsByPriority.js';
import TicketsByPriority from './ticketsByPriority.js';
import TicketsByType from './ticketsByType.js';
import TicketStatus from './ticketStatus.js';
import TicketsByUser from './ticketsByUser.js';

const DashBoardMain = (props) =>
{

  return(
    <div id='DashboardMain'>
      <div className='graph-container'>
        <TicketsByPriority tickets={props.tickets}/>
        <TicketsByType tickets={props.tickets}/>
      </div>
      <div className='graph-container'>
        <TicketStatus tickets={props.tickets}/>
        <TicketsByUser tickets={props.tickets}/>
      </div>
    </div>
  )
}

export default DashBoardMain;
