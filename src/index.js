import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import './index.css';
import Authenticate from './components/authenticate';
import WelcomePage from './components/welcomPage';
import LoginPage from './components/loginPage';
import SignupPage from './components/signupPage';
import App from './App';
import Navbar from './components/navbar';
import PointDetail from './components/pointDetail';
import UpdatePointPage from './components/updatePointPage'
import * as serviceWorker from './serviceWorker';
import api from "./dataStore/stubApi";
import categoryData from "./dataStore/categoryData";
import Logout from './components/logout';

class Router extends Component {

  constructor() {
    super();
    this.state = {
      user: undefined
    }
    this.auth = this.auth.bind(this);
    this.logout = this.logout.bind(this);
    this.addPoint = this.addPoint.bind(this);
    this.addPointLocal = this.addPointLocal.bind(this);
  }

  auth(data) {
    this.setState({
      user: data
    });
  }

  logout() {
    localStorage.removeItem('poi-jwt');
    this.setState({
      user: null
    })
  }

  async addPoint(name, descripton, categoryid) {
    await api.addPoint(name, descripton, categoryid);
    this.setState({});
  }


  addPointLocal(name, description, category) {
    api.addPointLocal(name, description, category);
    this.setState({})
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
        <Navbar user={this.state.user} handleLogout={this.logout}/>
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route path="/login" render={() => <LoginPage handleLogin={this.login}/>} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/logout" component={Logout} />
          <Authenticate handleAuth={this.auth}>
            <Route path="/poi/:id" render={() => <PointDetail handleDeletePoint={this.deletePoint} />} />
            <Route path="/dashboard" render={() => <App handleAddPointLocal={this.addPointLocal}options={categories} />} />
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
