
import React from 'react';

const UpdateProjectsList = (props) => {

const updateProjects = () => {
  const newProjectName = props.projectName;
  const newProjectDescription = props.projectDescription;
  const currentProjectsList = props.projects;

  const searchForDuplicateProjectNames = currentProjectsList.filter(c => c.ProjectsName === newProjectName);

  if(newProjectName !== '' && newProjectDescription !== '' && searchForDuplicateProjectNames.length < 1){

    const newProject = {
      ProjectsName: newProjectName,
      UserNames: [],
      tickets: [],
      projectDescription: newProjectDescription
    }

    const newProjectsList = [...currentProjectsList, newProject];

    props.updateProjectsList(newProjectsList);

  }

}

  return(
    <button onClick={() => updateProjects() }>Submit New Project</button>
  )
}

export default UpdateProjectsList;
