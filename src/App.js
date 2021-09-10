import React from "react";
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Form from './components/Form';
import PlanetComponent from "./components/PlanetComponent";
import PeopleComponent from "./components/PeopleComponent";


function App() {
  return (
    <BrowserRouter>
      <h1>Luke API</h1>
      <Form />
      <Switch>
        <Route path="/people/:id">
        <PeopleComponent />
        </Route>
        <Route path="/planets/:id">
          <PlanetComponent />
        </Route>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
