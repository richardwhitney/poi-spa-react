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
import Logout from './components/logout';

class Router extends Component {

  constructor() {
    super();
    this.state = {
      user: undefined,
      currentPoint: [],
      points: [],
      categories: []
    }
    this.auth = this.auth.bind(this);
    this.logout = this.logout.bind(this);
    this.addPoint = this.addPoint.bind(this);
    this.addPointLocal = this.addPointLocal.bind(this);
    this.getPoint = this.getPoint.bind(this);
    this.updatePoint = this.updatePoint.bind(this);
    this.deletePoint = this.deletePoint.bind(this);
  }

  async componentDidMount() {
    const points = await api.getPoints();
    const categories = await api.getCategories();
    this.setState({
      points: points,
      categories: categories
    });
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

  async getPoint(id) {
    const point = await api.getPoint(id);
    this.setState({
      currentPoint: point
    });
    console.log(`Get point ${id}`);
  }
  async addPoint(name, descripton, categoryid) {
    await api.addPoint(name, descripton, categoryid);
    this.setState({});
  }

  addPointLocal(name, description, category) {
    api.addPointLocal(name, description, category);
    this.setState({})
  }

  async updatePoint(id, name, description, category)  {
    await api.updatePoint(id, name, description, category);
    this.setState({});
  }

  async deletePoint(id) {
    await api.deletePoint(id);
    this.setState({});
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar user={this.state.user} handleLogout={this.logout}/>
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route path="/login" render={() => <LoginPage handleLogin={this.login}/>} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/logout" component={Logout} />
          <Authenticate handleAuth={this.auth}>
            <Route path="/poi/:id" render={() => <PointDetail handleDeletePoint={this.deletePoint} handleGetPoint={this.getPoint} point={this.state.currentPoint}/>} />
            <Route path="/dashboard" render={() => <App handleAddPoint={this.addPoint} options={this.state.categories} points={this.state.points}/>} />
            <Route path="/updatepoint/:id" render={() => <UpdatePointPage handleUpdatePoint={this.updatePoint} handleGetPoint={this.getPoint} options={this.state.categories} point={this.state.currentPoint}/>} />
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
