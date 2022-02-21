
import React from 'react';

const MainTicketList = (props) => {

  return(
    <div>
      <h2>My Tickets</h2>

      <button onClick={props.switchTicketComponent.bind(this, 'Create-Update-Ticket')} >Create Ticket</button>

      <table>
        <tbody>
        <tr>
          <th>Project Name</th>
          <th>Ticket Name</th>
          <th>Priority</th>
          <th>Status</th>
          <th>Description</th>
          <th>Assigned To</th>
          <th>Assigned By</th>
          <th>Update Ticket</th>
        </tr>
          {
            props.tickets.map((ticket, index, ticketsArr) =>
            {
              return <tr key={ index }>
                      <th key={ index + 1 }>{ ticket.project } </th>
                      <th key={ index + 2 }>{ ticket.ticketTitle }</th>
                      <th key={ index + 3 }>{ ticket.priority }</th>
                      <th key={ index + 4 }>{ ticket.status }</th>
                      <th key={ index + 5 }>{ ticket.description }</th>
                      <th key={ index + 6 }>{ ticket.assignedTo }</th>
                      <th key={ index + 7 }>{ ticket.assignedBy }</th>
                      <th key={ index + 8 }>
                        <ul>
                          <li className="My-Projects-Component-li" onClick={() => {
                            props.updateCurrentTicket(ticketsArr[index]);
                            //props.switchTicketComponent.bind(this, 'Create-Update-Ticket')
                            props.switchTicketComponent('Create-Update-Ticket');
                          }} >Update</li>
                        </ul>
                      </th>
                     </tr>
            })
          }
        </tbody>
      </table>

    </div>
  )
}

export default MainTicketList;
