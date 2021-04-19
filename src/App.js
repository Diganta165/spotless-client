
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddComment from './components/Dashboard/AddComment/AddComment';
import AllOrders from './components/Appointment/AllOrders/AllOrders';

export const UserContext = createContext();


function App() {
  const [loggedInUser , setLoggedInUser] = useState({});
  
  return (
    <UserContext.Provider value ={[loggedInUser,setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path = "/">
          <Home></Home>
        </Route>
        <Route  path = "/home">
          <Home></Home>
        </Route>
        <Route  path = "/about-us">
          <Home></Home>
        </Route>
        <Route  path = "/projects">
          <Home></Home>
        </Route>
        <Route  path = "/contact">
          <Home></Home>
        </Route>
        <PrivateRoute  path = "/comments">
          <AddComment></AddComment>
        </PrivateRoute>
        <PrivateRoute  path = "/allOrders">
          <AllOrders></AllOrders>
        </PrivateRoute>
        <PrivateRoute  path = "/admin">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <Route  path = "/login">
          <Login></Login>
        </Route>
        <PrivateRoute  path = "/appointment/dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <PrivateRoute path = "/appointment">
          <Appointment></Appointment>
        </PrivateRoute>
        {/* <PrivateRoute path = "/appointment/:id">
          <Appointment></Appointment>
        </PrivateRoute> */}
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
