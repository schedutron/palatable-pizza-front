import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route, Switch, Redirect} from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
