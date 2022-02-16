
import { React, useState } from 'react';
import './Styles/myProjectsComponent.css';
import MyProjectsList from './myProjectsList.js';
import CreateProjectMain from './CreateProject/createProjectMain.js';

const MyProjectsMain = (props) => {
  const [currentProjectsPage, changeProjectsPage] = useState('My-Projects-List');
  //console.log(props.projects)
  return(
    <div id="My-Projects-Component">
      { currentProjectsPage === 'My-Projects-List' && <MyProjectsList projects={props.projects} switchDashboardComponents={props.switchDashboardComponents} switchToCreatePage={changeProjectsPage}/> }
      { currentProjectsPage === 'My-Projects-Create-Page' && <CreateProjectMain switchToCreatePage={changeProjectsPage} updateProjectsList={props.updateProjectsList} projects={props.projects} /> }
    </div>
  )
}

export default MyProjectsMain;
