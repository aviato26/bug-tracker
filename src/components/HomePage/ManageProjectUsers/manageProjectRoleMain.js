
import { React, useState, useEffect } from 'react';
import Title from './title.js';
import UserSelection from './userSelection.js';
import AssignRole from './assignRole.js';
import ProjectsTable from './projectsTable.js';
import './Styles/projectUserComponent.css';

const ManageProjectRoleMain = (props) =>
{

  const [currentUser, updateCurrentUser] = useState(() => ``);
  const [currentProject, updateCurrentProject] = useState(() => 'P1');
  const [listOfProjects, updateListOfProjects] = useState(() => props.projects);

  let filteredProjects = (action) => {

    let projIndex;
    let userIndex;

    let updatedList = listOfProjects.map((project, projectIndex) => {
      // check if any projects match the current project in select list
        if(project.ProjectsName === currentProject){

          // if a project matches, we will check the current user selected against the projects current users
          userIndex = project.UserNames.indexOf(currentUser);

          if(userIndex >= 0 && action === 'Remove From Project'){

            // if a user is found we will remove the user with the splice method
            project.UserNames.splice(userIndex, 1);
          }
          // check if user pushes the add to project button and check if currently selected user is in project users list, if not push user to the project user list
          else if(userIndex < 0 && action === 'Add To Project' && currentUser !== ''){
            project.UserNames.push(currentUser);
          }

        }
          return project;
      })

      updateListOfProjects(updatedList);

  }

  return(
    <div id='DashboardMain'>
      <div id="Project-Roles-Container">
        <Title />
        <UserSelection users={props.users} updateCurrentUser={updateCurrentUser} />
        <AssignRole projects={props.projects} updateCurrentProject={updateCurrentProject} />
        <button onClick={(e) => filteredProjects(e.target.innerHTML)} className="project-roles-component-buttons" >Add To Project</button>
        <button onClick={(e) => filteredProjects(e.target.innerHTML)} className="project-roles-component-buttons">Remove From Project</button>
      </div>
      <div>
        <ProjectsTable projects={listOfProjects}/>
      </div>
    </div>
  )
}

export default ManageProjectRoleMain;
