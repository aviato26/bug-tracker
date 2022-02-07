
import React from 'react';

const AssignRole = (props) =>
{
  //const listOfProjectNames = [...new Set(props.projects.map(c => c.ProjectsName))];
  return(
    <div>
      <p>Select project to assign user</p>
      <input list="Projects" name="projects" />
      <datalist id="Projects">
        {
          props.projects.map((projects, index) => {
            return <option value={projects.ProjectsName} key={index} />
          })
        }
      </datalist>
    </div>
  )
}

export default AssignRole;
