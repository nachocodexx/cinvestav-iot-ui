import React from 'react';
import './App.scss';
import logo from './logo.svg';
import Flex from '@react-css/flex'
import { IndexPage } from './pages/Index.page'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { NoMatch } from './components/NoMatch/NoMatch'
import { DashboardPage } from './pages/Dashboard.page'


function App() {



  return (
    <Router>
      <div className="App">
        <header className="iot-header bg-color-primary">
          <Flex justifyCenter alignItemsCenter className="full-height">
            <img src={logo} alt="logo" />
          </Flex>
        </header>
        <Switch>
          <Route exact path="/">
            <IndexPage />
          </Route>
          <Route path="/dashboard">
            <DashboardPage />
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
