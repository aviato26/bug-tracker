
import React from 'react';

const ProjectsTable = (props) =>
{
  //console.log(props)
  return(
    <div>
      <table>
      <tbody>
        <tr>
          <th>Project Name</th>
          <th>Users In Project</th>
        </tr>
        {
          props.projects.map((project, key) =>
            {
              return <tr key={key}>
                      <td key={key}>{ project.ProjectsName }</td>
                      <td key={key + 1}>
                        { // using pre tag to line break with every name
                          project.UserNames.map((names, nameIndex) => <pre key={nameIndex}> {names} </pre>)
                        }
                      </td>
                     </tr>
            }
          )
        }
        </tbody>
      </table>
    </div>
  )
}

export default ProjectsTable;
