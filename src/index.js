import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import './index.css';
import Authenticate from './components/authenticate';
import WelcomePage from './components/welcomPage';
import LoginPage from './components/loginPage';
import SignupPage from './components/signupPage';
import App from './App';
import MainMenu from './components/navbar/mainmenu/';
import PointDetail from './components/pointDetail';
import UpdatePointPage from './components/updatePointPage'
import * as serviceWorker from './serviceWorker';
import api from "./dataStore/stubApi";
import categoryData from "./dataStore/categoryData";
import WelcomeMenu from "./components/navbar/welcomemenu";

class Router extends Component {

  login(email, password) {
    api.login(email, password);
    //this.setState({});
  }

  updatePoint = (id, name, description, category) => {
    api.updatePoint(id, name, description, category);
    this.setState({});
  };

  deletePoint = (id) => {
    api.deletePoint(id);
    this.setState({});
  };

  render() {
    const categories = categoryData.map(category => {
      console.log(category.name.toLocaleLowerCase());
      return {key: category._id, text: category.name, value: category.name.toLocaleLowerCase()};
    });
    return (
      <BrowserRouter>
        <WelcomeMenu/>
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route path="/login" render={() => <LoginPage handleLogin={this.login}/>} />
          <Route path="/signup" component={SignupPage} />
          <Authenticate>
            <Route path="/poi/:id" render={() => <PointDetail handleDeletePoint={this.deletePoint} />} />
            <Route path="/dashboard" render={() => <App options={categories} />} />
            <Route path="/updatepoint/:id" render={() => <UpdatePointPage handleUpdatePoint={this.updatePoint} options={categories} />} />
          </Authenticate>

          <Redirect from="*" to="/"/>
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
