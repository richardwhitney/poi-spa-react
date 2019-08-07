import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import 'semantic-ui-css/semantic.min.css';

import WelcomeMenu from '../components/welcomemenu/';
import LoginForm from '../components/loginForm/';
import LoginPage from '../components/loginPage/'

storiesOf('POI React/Nav Bar', module).add('default', () => <WelcomeMenu />);

storiesOf('POI React/Login Form', module).add('default', () => <LoginForm/>);

storiesOf('POI React/Login Page', module)
  .add('default', () => <LoginPage/>);

