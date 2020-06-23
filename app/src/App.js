import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignUpForm from './Components/LoginForms/SignUpForm'
import Login from './Components/LoginForms/Login';
import Nav from "./nav"
import {

  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  return (

<Router>
      <div>
        <Nav/> {/*NAV BAR*/}

        
   

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
         
          </Route>
          <Route path="/login">
   
            <Login/>
          </Route>
          <Route exact path="/">
           
            <SignUpForm/>
          </Route>
        </Switch>
      </div>
    </Router>
  );

}




function Dashboard() {
  return <h2>Dashboard</h2>;
}


export default App;
