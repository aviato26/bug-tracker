
import { React, useState } from 'react';
import Title from './title.js';
import UserSelection from './userSelection.js';
import AssignRole from './assignRole.js';
import ProjectsTable from './projectsTable.js';
import './Styles/projectUserComponent.css';

const ManageProjectRoleMain = (props) =>
{
  const [currentUser, updateCurrentUser] = useState(() => '');
  const [currentProject, updateCurrentProject] = useState(() => 'P1');
  //console.log(props)
  let filteredProjects = (props, action) => {

    let projIndex;
    let userIndex;
    //props.updateUsersInProjects(props.projects[2])
    //console.log(props)
    return props.projects.map((project, projectIndex) => {
        if(project.ProjectsName === currentProject){
          // saving current projects index
          userIndex = project.UserNames.filter(user => user !== currentUser);
          project.UserNames = userIndex;
          //console.log(project)
        }
        return project
      })

      /*.UserNames.map((users, userIndex) => {
        if(users === currentUser){
          props.projects[projIndex].UserNames.splice(userIndex, 1);
          //users.splice(userIndex, 0);
          //props.projects[projIndex].UserNames);
          //console.log(props)
          return props.projects[projIndex];
        }
          return props.projects[projIndex];
      });
      */
    //console.log(props.projects[projIndex].UserNames)
  }

  return(
    <div id='DashboardMain'>
      <div id="Project-Roles-Container">
        <Title />
        <UserSelection users={props.users} updateCurrentUser={updateCurrentUser} />
        <AssignRole projects={props.projects} updateCurrentProject={updateCurrentProject} />
        <button className="project-roles-component-buttons" >Add To Project</button>
        <button onClick={() => props.updateUsersInProjects(filteredProjects(props, 'Remove-User'))} className="project-roles-component-buttons">Remove From Project</button>
      </div>
      <div>
        <ProjectsTable projects={props.projects}/>
      </div>
    </div>
  )
}

export default ManageProjectRoleMain;
