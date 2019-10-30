import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Languages } from '../src';
import * as en from './languages/en.json'
import * as fr from './languages/fr.json'
import { Home } from './home';
import { Code } from './code';

const languages = { en, fr };

const App = () => {
  return (
    <div className="columns">
      <div className="column">
        <Languages languages={languages} defaultLanguage="en">
          <Home />
        </Languages>
      </div>
      <div className="column">
        <Code />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
