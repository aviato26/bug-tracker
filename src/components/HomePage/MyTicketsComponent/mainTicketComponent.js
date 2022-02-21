
import { React, useState } from 'react';
import MainCreateTicketComponent from './CreateTicket/mainCreateTicketComponent.js';
import MainTicketList from './MainTicketList/mainTicketList.js';

const MainTicketComponent = (props) => {

  const [ currentComponent, switchTicketComponent ] = useState(() => 'All-Tickets');
  const [ currentTicket, updateCurrentTicket] = useState({});

  return(
    <div id="Main-Ticket-Component">
      { currentComponent === 'All-Tickets' && <MainTicketList tickets={props.tickets} switchTicketComponent={switchTicketComponent} updateCurrentTicket={updateCurrentTicket} /> }
      { currentComponent === 'Create-Update-Ticket' && <MainCreateTicketComponent currentTicket={currentTicket} users={props.users} projects={props.projects} tickets={props.tickets} updateTicketList={props.updateTicketList} currentUser={props.currentUser}/> }
    </div>
  )
}

export default MainTicketComponent;
