
import { useState } from 'react';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
//import { Link } from 'react-router-dom';
import Signin from './components/Signin/signin.js';
import MainHomePage from './components/HomePage/mainHomePage.js';
import './App.css';

const App = () => {

  const [ currentUser, changeCurrentUser] = useState('Admin');

  const tickets =
    [
      { project: 'P1', ticketTitle:'test 1', priority: 'High', status: 'Open', type: 'Error', assignedBy: 'me', assignedTo: 'jackson', description: 'some sort of err', created: new Date() },
      { project: 'P1', ticketTitle:'test 2', priority: 'High', status: 'Open', type: 'Error', assignedBy: 'ted', assignedTo: 'me', description: 'another sort of err', created: new Date() },
      { project: 'P2', ticketTitle:'test 3', priority: 'High', status: 'In-Progress', type: 'Task', assignedBy: 'me', assignedTo: 'ted', description: 'a feature to be implemented', created: new Date() },
      { project: 'P3', ticketTitle:'test 4', priority: 'Low', status: 'New', type: 'Other', assignedBy: 'jackson', assignedTo: 'dylan', description: 'request for help navigating project', created: new Date() }
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

  const [ticketList, updateTicketList] = useState(() => tickets);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"
          element=
          {
            <MainHomePage
              ticket={ticketList}
              users={usersList}
              switchDashboardComponents={switchDashboardComponents}
              currentDashboardComponent={currentDashBoardComponent}
              projects={projectsList}
              updateUsersListState={updateUsersListState}
              updateProjectsList={updateProjectsList}
              updateTicketList={updateTicketList}
              currentUser={currentUser}
            />
          }
        />
        <Route path="/" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
