
import { useState } from 'react';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
//import { Link } from 'react-router-dom';
import Signin from './components/Signin/signin.js';
import MainHomePage from './components/HomePage/mainHomePage.js';
import './App.css';

const App = () => {

  const tickets =
    [
      { project: 'P1', priority: 'High', status: 'Open', type: 'Error', AssignedBy: 'Stan' },
      { project: 'P1', priority: 'High', status: 'Open', type: 'Error', AssignedBy: 'Stan' },
      { project: 'P2', priority: 'High', status: 'In-Progress', type: 'Task', AssignedBy: 'Stan' },
      { project: 'P3', priority: 'Low', status: 'New', type: 'Sub-Task', AssignedBy: 'Mick' }
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
      { ProjectsName: 'P1', UserNames: ['me', 'ted', 'franklin', 'jackson'] },
      { ProjectsName: 'P2', UserNames: ['me', 'ted', 'jackson', 'jed']},
      { ProjectsName: 'P3', UserNames: ['dylan', 'bruce', 'jasper']},
    ]

  // state and function to switch the home page components in the side bar
  const [currentDashBoardComponent, switchDashboardComponents] = useState('Dashboard-Home');

  const [usersList, updateUsersListState] = useState(users);

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
              projects={projects}
              updateUsersListState={updateUsersListState}
            />
          }
        />
        <Route path="/" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
