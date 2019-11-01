# React Tiny i18n
📝 A tiny (~500B) i18n implementation for handling translations in React

## Features
- It's tiny (~500B) so, you know... not a lot on the perf or bandwidth
- Cache's translations so they only translate once (even with dynamic content)
- Written in TypeScript for nice autocompletion
- Allows for multiple language files
- Includes customizable language switcher
- Has the ability to translate outside of React components

## Installation
`npm i react-tiny-i18n` or `yarn add react-tiny-i18n`

## Demo
See a demo here: [https://dericgw.github.io/react-tiny-i18n/](https://dericgw.github.io/react-tiny-i18n/)

## Usage
First, you need some translations that take the shape of an object. This could be from an API or a 
JSON file or even a plain ole' JavaScript object. You can also go as many levels deep as you want.
For instance, you may want to have a key for each page and then under that, you can have a key for
each section within that page, and so on and so forth... 

### `<Languages />`
Once you have your translations, you need to make them available to your application. In order to 
do that, use the `Languages` component which takes two props: `langauges` and `defaultLanguage`:

```js
const languages = {
  en: {
    home: { 
      intro: 'Hi, {{firstName}}!'
    }
  },
  fr: {
    home: { 
      intro: 'Salut, {{firstName}}!'
    }
  }
};

<Languages languages={languages} defaultLanguage="en">
  <Home />
</Languages>
```

### Translator
Once you make the translations available, you want to display them. In order to do that, you can
use dot notation in order to represent the path of the translation inside of the `<T>` component 
or the `t()` function:

Using the `<T>` component:
```js
const Home = () => (
  <div>
    <h4><T replacements={{ firstName: 'Debo' }}>home.intro</T></h4>
  </div>
);
```

> The child of the `<T>` component is the dot notated path. Also, the interpolated text is not wrapped in 
> an element - only the text is returned.

Using the `t()` function
```js
const Home = () => {
  // We can use this as a function and not just a React Component
  const text = t('home.intro', {
    firstName: 'Debo'
  });
  return (
    <div>
      <h4>{text}</h4>
    </div>
  );
};
```

> The `t()` function can be used anywhere in your application.

### `<Switcher />`
The last thing you will need is a way to switch between languages. For this, you can use the 
`<Switcher />` component. This is a select component that has all of the languages listed as options. 
Whenever the select component changes, all of the text within the app is updated to the new language.

> The `<Switcher />` component takes an number of props and passes those props to the `select` 
> component. This allows for things such as styling, etc.
