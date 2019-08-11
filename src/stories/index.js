import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import 'semantic-ui-css/semantic.min.css';

import WelcomeMenu from '../components/welcomemenu/';
import MainMenu from '../components/mainmenu/';
import LoginForm from '../components/loginForm/';
import LoginPage from '../components/loginPage/';
import SignupForm from '../components/signupForm';
import SignupPage from '../components/signupPage';
import WelcomePage from '../components/welcomPage';

storiesOf('POI React/Nav Bar', module).add('default', () => <WelcomeMenu />);
storiesOf('POI React/Nav Bar', module).add('auth', () => <MainMenu/>);

storiesOf('POI React/Welcome Page', module).add('default', () => <WelcomePage/>);

storiesOf('POI React/Login Form', module).add('default', () => <LoginForm/>);

storiesOf('POI React/Login Page', module)
  .add('default', () => <LoginPage/>);

storiesOf('POI React/Signup Form', module).add('default', () => <SignupForm/>);

storiesOf('POI React/Signup Page', module).add('default', () => <SignupPage/>);

