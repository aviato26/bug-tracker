
import { useState } from 'react';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
//import { Link } from 'react-router-dom';
import Signin from './components/Signin/signin.js';
import MainHomePage from './components/HomePage/mainHomePage.js';
import './App.css';

const App = () => {

  const tickets =
    [
      { project: 'P1', projectTitle:'test 1', priority: 'High', status: 'Open', type: 'Error', AssignedBy: 'me', AssignedTo: 'Stan', Description: 'some sort of err', created: new Date() },
      { project: 'P1', projectTitle:'test 2', priority: 'High', status: 'Open', type: 'Error', AssignedBy: 'ted', AssignedTo: 'Stan', Description: 'another sort of err', created: new Date() },
      { project: 'P2', projectTitle:'test 3', priority: 'High', status: 'In-Progress', type: 'Task', AssignedBy: 'me', AssignedTo: 'Stan', Description: 'a feature to be implemented', created: new Date() },
      { project: 'P3', projectTitle:'test 4', priority: 'Low', status: 'New', type: 'Other', AssignedBy: 'jackson', AssignedTo: 'Mick', Description: 'request for help navigating project', created: new Date() }
    ];

  const users =
    [
      { UserName: 'me', Email: 'm@e.com', Role: 'Admin' },
      { UserName: 'ted', Email: 'ted@tex.com', Role: 'Admin' },
      { UserName: 'franklin', Email: 'f@franklin.com', Role: 'Developer' },
      { UserName: 'jackson', Email: 'jack@jack.com', Role: 'Developer' },
      { UserName: 'jed', Email: 'jed@jeddy.com', Role: 'Developer' },
      { UserName: 'dylan', Email: 'dylie@dylie.com', Role: 'Demo' },
      { UserName: 'bruce', Email: 'brucey@b.com', Role: 'Demo' },
      { UserName: 'jasper', Email: 'j@j.com', Role: 'Developer' }
    ];

  const projects =
    [
      { ProjectsName: 'P1', UserNames: ['me', 'ted', 'franklin', 'jackson'], tickets: tickets.filter(ticket => ticket.project === 'P1'), projectDescription: 'Intial test project' },
      { ProjectsName: 'P2', UserNames: ['me', 'ted', 'jackson', 'jed'], tickets: tickets.filter(ticket => ticket.project === 'P2'), projectDescription: 'Second test project' },
      { ProjectsName: 'P3', UserNames: ['dylan', 'bruce', 'jasper'], tickets: tickets.filter(ticket => ticket.project === 'P3'), projectDescription: 'Third test project' },
    ]

  // state and function to switch the home page components in the side bar
  const [currentDashBoardComponent, switchDashboardComponents] = useState('Dashboard-Home');

  const [usersList, updateUsersListState] = useState(users);

  const [projectsList, updateProjectsList] = useState(() => projects);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"
          element=
          {
            <MainHomePage
              ticket={tickets}
              users={usersList}
              switchDashboardComponents={switchDashboardComponents}
              currentDashboardComponent={currentDashBoardComponent}
              projects={projectsList}
              updateUsersListState={updateUsersListState}
              updateProjectsList={updateProjectsList}
            />
          }
        />
        <Route path="/" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
