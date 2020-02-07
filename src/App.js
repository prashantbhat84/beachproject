import React, { Fragment } from "react";
// import logo from './logo.svg';
import "./App.css";
import Home from "./components/Home";
import Rooms from "./components/Rooms";
import SingleRoom from "./components/SingleRoom";
import Error from "./components/Error";
import NavBar from "./components/NavBar/NavBar";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/BeachResort" component={Home} />
        <Route exact path="/BeachResort/rooms" component={Rooms} />
        <Route exact path="/BeachResort/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </Fragment>
  );
}

export default App;
