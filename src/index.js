import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import MainMenu from './components/mainmenu/';
import PointDetail from './components/pointDetail';
import UpdatePointPage from './components/updatePointPage'
import * as serviceWorker from './serviceWorker';
import api from "./dataStore/stubApi";
import categoryData from "./dataStore/categoryData";

class Router extends Component {
  updatePoint = (id, name, description, category) => {
    api.updatePoint(id, name, description, category);
    this.setState({});
  };

  render() {
    const categories = categoryData.map(category => {
      console.log(category.name.toLocaleLowerCase());
      return {key: category._id, text: category.name, value: category.name.toLocaleLowerCase()};
    });
    return (
      <BrowserRouter>
        <MainMenu/>
        <Switch>
          <Route path="/poi/:id" component={PointDetail} />
          <Route path="/updatepoint/:id" render={() => <UpdatePointPage handleUpdatePoint={this.updatePoint} options={categories} />} />
          <Route exact path="/" render={() => <App options={categories} />} />
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
