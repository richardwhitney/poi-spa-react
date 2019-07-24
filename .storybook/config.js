import { configure, addDecorator } from '@storybook/react';

function loadStories() {
  require('../src/stories/index.js');
}

configure(loadStories, module);
