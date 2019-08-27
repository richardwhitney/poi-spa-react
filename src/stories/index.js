import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import 'semantic-ui-css/semantic.min.css';
import { MemoryRouter, Route } from "react-router";

import WelcomeMenu from '../components/navbar/welcomemenu/';
import MainMenu from '../components/navbar/mainmenu/';
import LoginForm from '../components/loginForm/';
import LoginPage from '../components/loginPage/';
import SignupForm from '../components/signupForm';
import SignupPage from '../components/signupPage';
import WelcomePage from '../components/welcomPage';
import Point from '../components/point';
import PointList from '../components/pointList';
import PointForm from '../components/pointForm';
import Dashboard from '../components/dashboard';
import PointDetail from '../components/pointDetail';

const sample = {
  name: "Test Point",
  description: "This is a test",
  addedBy: "Test User"
}

storiesOf('POI React/Nav Bar', module).addDecorator(story => (
  <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>)).add('default', () =>
  <WelcomeMenu />);

storiesOf('POI React/Nav Bar', module).addDecorator(story => (
  <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>)).add('auth', () =>
  <MainMenu/>);

storiesOf('POI React/Welcome Page', module).add('default', () => <WelcomePage/>);

storiesOf('POI React/Login Form', module).addDecorator(story => (
  <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>)).add('default', () =>
  <LoginForm/>);

storiesOf('POI React/Login Page', module).addDecorator(story => (
  <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>)).add('default', () =>
  <LoginPage/>);

storiesOf('POI React/Signup Form', module).addDecorator(story => (
  <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>)).add('default', () =>
  <SignupForm/>);

storiesOf('POI React/Signup Page', module).addDecorator(story => (
  <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>)).add('default', () =>
  <SignupPage/>);

storiesOf('POI React/Point', module).addDecorator(story => (
  <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>)).add("default", () => (
  <Point point={sample}/>
));

storiesOf('POI React/Point List', module).addDecorator(story => (
  <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>)).add('default', () => {
  const samples = [sample, sample, sample, sample, sample]
  return <PointList points={samples}/>
});

storiesOf('POI React/Point Form', module).add('default', () => (
  <PointForm/>
));

storiesOf('POI React/Dashboard', module).add('default', () => {
  return <Dashboard/>
});

storiesOf('POI React/Point Detail', module).addDecorator(story => (
  <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>)).add('default', () => {
  return <PointDetail point={sample}/>
});

