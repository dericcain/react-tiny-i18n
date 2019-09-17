import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Languages } from '../.';
import * as en from './languages/en.json'
import * as fr from './languages/fr.json'
import { Home } from './home';

const languages = { en, fr };

const App = () => {
  return (
    <Languages languages={languages} defaultLanguage="en">
      <Home />
    </Languages>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
