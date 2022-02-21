
import React from 'react';
import '../ticketStyles.css'

const MainCreateTicketComponent = (props) => {

  //let currentTicketTitle = (props.tickets.length > 0) ? 'valid' : 'not valid';
  /*
  const { ticketTitle } = props.currentTicket || '';
  const { description } = props.currentTicket || '';
  const { project } = props.currentTicket || '';
  const { assignedTo } = props.currentTicket || '';
  const { priority } = props.currentTicket || '';
  const { status } = props.currentTicket || '';
  const { type } = props.currentTicket || '';
  */
  console.log(props)
  const newTicket = {};
  newTicket['ticketTitle'] = props.currentTicket.ticketTitle || '';
  newTicket['description'] = props.currentTicket.description || '';
  newTicket['project'] = props.currentTicket.project || 'P1';
  newTicket['assignedTo'] = props.currentTicket.assignedTo || '';
  newTicket['priority'] = props.currentTicket.priority || '';
  newTicket['status'] = props.currentTicket.status || 'New';
  newTicket['type'] = props.currentTicket.type || '';
  newTicket['assignedBy'] = props.currentUser;

  const updateTickets = (currentTicket, e) => {
    let updating = false;

    let newTicketList = props.tickets.map((ticket, index, ticketList) => {
          if(ticket.ticketTitle === currentTicket.ticketTitle){
            ticket = currentTicket;
            updating = true;
          }
          return ticket;
        })

      if(!updating && newTicket.ticketTitle && newTicket.description && newTicket.project){
        newTicketList.push(currentTicket)
      };

      //console.log(newTicketList)
      props.updateTicketList(newTicketList)

  }

  //console.log(props)

  return(
    <div>
      <h3>Create/Update Ticket</h3>

      <div>
        <p>Ticket Title</p>
        <input required defaultValue={ newTicket.ticketTitle } onChange={(e) => newTicket.ticketTitle = e.target.value} />
      </div>

      <div>
        <p>Description</p>
        <input defaultValue={ newTicket.description } onChange={(e) => newTicket.description = e.target.value } required/>
      </div>

      <div>
        <p>Project</p>
        <select defaultValue={ newTicket.project } onChange={(e) => newTicket.project = e.target.value}>
          {
            props.projects.map((projects, index) => {
              /*
              if(newTicket.project === projects.ProjectsName){
                return <option key={index}>{ projects.ProjectsName }</option>
              }
              else{
                return <option key={index}>{ projects.ProjectsName }</option>
              }
              */
              return <option key={index}>{ projects.ProjectsName }</option>
            })
          }
        </select>
      </div>

      <div>
        <p>Assign to User</p>
        <select defaultValue={ newTicket.assignedTo } onChange={(e) => newTicket.assignedTo = e.target.value}>
          {
            props.users.map((user, index) => {
              /*
              if(newTicket.assignedTo === user.UserName){
                return <option key={index}>{ user.UserName }</option>
              }
              else{
                return <option key={index}>{ user.UserName }</option>
              }
              */
                return <option key={index}>{ user.UserName }</option>
            })
          }
        </select>
      </div>

      <div>
        <p>Ticket Priority</p>
        <select defaultValue={ newTicket.priority } onChange={(e) => newTicket.priority = e.target.value }>
          <option>None</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>

      <div>
        <p>Ticket Status</p>
        <select defaultValue={ newTicket.status } onChange={(e) => newTicket.status = e.target.value}>
          <option>New</option>
          <option>Open</option>
          <option>In-Progress</option>
          <option>Resolved</option>
        </select>
      </div>

      <div>
        <p>Ticket Type</p>
        <select defaultValue={ newTicket.type } onChange={(e) => newTicket.type = e.target.value}>
          <option>Error</option>
          <option>Task</option>
          <option>Other</option>
        </select>
      </div>

      <button onClick={() => updateTickets(newTicket)} >Submit</button>

    </div>
  )
}

export default MainCreateTicketComponent;
