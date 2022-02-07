
import React from 'react';
import Title from './title.js';
import UserSelection from './userSelection.js';
import AssignRole from './assignRole.js';
import ProjectsTable from './projectsTable.js';
import './Styles/projectUserComponent.css';

const ManageProjectRoleMain = (props) =>
{
  console.log(props)
  return(
    <div id='DashboardMain'>
      <div id="Project-Roles-Container">
        <Title />      
        <UserSelection users={props.users}/>
        <AssignRole projects={props.projects}/>
        <button>Add To Project</button>
        <button>Remove From Project</button>
      </div>
      <div>
        <ProjectsTable projects={props.projects}/>
      </div>
    </div>
  )
}

export default ManageProjectRoleMain;
