
import React from 'react';

const AssignRole = (props) =>
{
  return(
    <div>
      <p>Select project to assign user</p>
      <select id="Projects" onChange={(e) => props.updateCurrentProject(e.target.value)}>
        {
          props.projects.map((projects, index) => <option value={projects.ProjectsName} key={index}>{projects.ProjectsName}</option>)
        }
      </select>
    </div>
  )
}

export default AssignRole;
