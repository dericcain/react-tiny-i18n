import * as React from 'react';
import Prism from 'prismjs';

import './prism.css';

Prism.highlightAll();

export const Code = () => (
  <pre>
    <code className="language-javascript">
      {`
// The en.json language file  
{
  "login": {
    "email": "What is your email address?",
    "password": "What is your password?"
  },
  "register": {
    "firstName": "What is your first name?",
    "lastName": "What is your last name?",
    "welcome": "Welcome, {{firstName}}"
  },
  "help": {
    "test": "Hey {{firstName}}, you can reach us at {{phoneNumber}}."
  }
}

// The fr.json language file 
{
  "login": {
    "email": "Quelle est ton adresse email?",
    "password": "Quel est votre mot de passe?"
  },
  "register": {
    "firstName": "Quel est votre prénom?",
    "lastName": "Quel est ton nom de famille?",
    "welcome": "Bienvenue, {{firstName}}"
  },
  "help": {
    "test": "Hé {{firstName}}, vous pouvez nous joindre à {{phoneNumber}}."
  }
}

// The component
import * as React from 'react';

import { t, T, Switcher } from '..';

const Foo = () => {
  // We can use this as a function and not just a React Component
  const text = t('help.test', {
    firstName: 'Debo',
    phoneNumber: '205.555.1234',
  });
  return (
    <div>
      <h4>{text}</h4>
    </div>
  );
};

export function Home() {
  return (
    <div>
      <div>
        <label>Choose your languge:</label>
        <Switcher />
      </div>
      <Foo />
      <p>
        <T>login.email</T>
      </p>
      <p>
        <T>login.password</T>
      </p>
      <p>
        <T replacements={{ firstName: 'Deric' }}>register.welcome</T>
      </p>
      <p>
        <T>register.firstName</T>
      </p>
      <p>
        <T>register.lastName</T>
      </p>
      <p>
        <T replacements={{ firstName: 'Debo', phoneNumber: '205.555.1234' }}>
          help.test
        </T>
      </p>
      <p>
        <T>this.key.does.not.exit</T>
      </p>
    </div>
  );
}
    `}
    </code>
  </pre>
);
