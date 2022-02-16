
import { React, useState } from 'react';
import CreateProjectName from './createProjectName.js';
import CreateProjectDescription from './createProjectDescription.js';
import UpdateProjectsList from './updateProjectsList.js';

const CreateProjectMain = (props) => {
  const [ projectName, updateProjectName ] = useState(() => '');
  const [ projectDescription, updateProjectDescrition ] = useState(() => '');

  return(
    <div>
      <h2>Create Project</h2>
      <button onClick={props.switchToCreatePage.bind(this, 'My-Projects-List')} >Back to My Projects</button>
      <CreateProjectName updateProjectName={updateProjectName} />
      <CreateProjectDescription updateProjectDescrition={updateProjectDescrition} />
      <UpdateProjectsList updateProjectsList={props.updateProjectsList} projectName={projectName} projectDescription={projectDescription} projects={props.projects}/>
    </div>
  )
}

export default CreateProjectMain;
