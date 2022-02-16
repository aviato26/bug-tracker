
import React from 'react';

const MyProjectsList = (props) => {
  //switchDashboardComponents function is being passed in to redirect user to the manage project users component

  return(
    <div>
      <h2>My Projects</h2>
      <button onClick={props.switchToCreatePage.bind(this, 'My-Projects-Create-Page')} >Create Project</button>

      <table>
        <tbody>
          {
            props.projects.map((project, index) =>
            {
              return <tr key={ index }>
                      <th key={ index + 1}>{ project.ProjectsName }</th>
                      <th key={ index + 2 }>{ project.projectDescription }</th>
                      <th key={ index + 3 }>
                        <ul>
                          <li className="My-Projects-Component-li" onClick={props.switchDashboardComponents.bind(this, 'Manage-Project-Users')} >Manage Users</li>
                          <li className="My-Projects-Component-li" >Details</li>
                        </ul>
                      </th>
                     </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default MyProjectsList;
