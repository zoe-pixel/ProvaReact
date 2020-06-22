import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from './Pages/LandingPage';
import NaoEncontrado from './NaoEncontrado';


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/landingpage" component={LandingPage}></Route>
        <Route path="*" component={NaoEncontrado}></Route>
      </Switch>
    </BrowserRouter >

  )
};
export default App;


