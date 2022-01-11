
import { Component } from 'react';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
//import { Link } from 'react-router-dom';
import Signin from './components/Signin/signin.js';
import MainHomePage from './components/HomePage/mainHomePage.js';
import './App.css';

class App extends Component{
  constructor()
  {
    super();
    this.state = {
      tickets:
      [
        {priority: 'High', status: 'Open', type: 'Error', AssignedBy: 'Stan'},
        {priority: 'High', status: 'Open', type: 'Error', AssignedBy: 'Stan'},
        {priority: 'High', status: 'In-Progress', type: 'Task', AssignedBy: 'Stan'},
        {priority: 'Low', status: 'New', type: 'Sub-Task', AssignedBy: 'Mick'}
      ],

      users:
      [
        { UserName: 'me', Email: 'm@e.com', Role: 'Admin' },
        { UserName: 'ted', Email: 'ted@tex.com', Role: 'Admin' },
        { UserName: 'franklin', Email: 'f@franklin.com', Role: 'Developer' },
        { UserName: 'jackson', Email: 'jack@jack.com', Role: 'Developer' },
        { UserName: 'jed', Email: 'jed@jeddy.com', Role: 'Developer' },
        { UserName: 'dylan', Email: 'dylie@dylie.com', Role: 'Demo' },
        { UserName: 'bruce', Email: 'brucey@b.com', Role: 'Demo' },
        { UserName: 'jasper', Email: 'j@j.com', Role: 'Developer' }
      ],

      currentDashBoardComponent: 'Dashboard-Home'
    }

    this.switchDashboardComponents = this.switchDashboardComponents.bind(this);
  }

  switchDashboardComponents(currentComponent)
  {
    //console.log(`we b clickin dis button ${button}`, e.target)
    this.setState({ currentDashBoardComponent: currentComponent })
  }

  render()
  {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHomePage ticket={this.state.tickets} users={this.state.users} switchDashboardComponents={this.switchDashboardComponents} currentDashboardComponent={this.state.currentDashBoardComponent}/>} />
          <Route path="/" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
