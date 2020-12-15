import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import './App.css';
import Homee from './Homee';
import About from './About';
import Error from './error';
import FormClass from './FormClass';
import FormClassdetails from './FormClassdetails';
import EffectClass from './effect';
import ContextClass from './contextclass';
import Assign from './Assign';
import ReducerClass from './reducerclass';
import ReducerAss from './reducerass';

import ReduxClass from './ReduxClass';

// import APIClass from './apiclass';
import Apiass from './apiass';
import Dashboard from './dashboard';
import Guardroute from './guardroute';


function App() {

  let [age, setAge] = useState(18);

  // let age = 18;
  return (
    <>
        {/* <Apiass/><Router><Switch> <Route path="/reducerass"><ReducerAss /></Route></Switch></Router> */}
        {/* <APIClass/> */}
        {/* <ReduxClass/> */}
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"> <Homee /> </Route>
          <Route path="/FormClass"> <FormClass /> </Route>
          <Route path="/FormClassdetails"> <FormClassdetails /> </Route>
          <Route path="/FormClass/:name" children={<FormClassdetails />}> </Route>
          <Route path="/about"> <About /> </Route>
          <Guardroute path="/dashboard" component={Dashboard} condition={age >= 18} />
          <Route path="/effect-class"><EffectClass /></Route>
          <Route path="/apiass"><Apiass/></Route>
          <Route path="/contextclass"><ContextClass /></Route>
          <Route path="/reducerclass"><ReducerClass /></Route>
          <Route path="/Assign"><Assign /></Route>
          <Route path="/reducerass"><ReducerAss /></Route>
          <Route path="*"> <Error /></Route>
        </Switch>
      </Router>
    </>
  );
}



export default App;
