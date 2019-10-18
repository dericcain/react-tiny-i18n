import '@testing-library/jest-dom/extend-expect';
import * as React from 'react';
import { render } from '@testing-library/react';

import { get } from '../src/get';
import { Languages, Switcher, T } from '../src';

describe('i18n', () => {
  describe('Translator', () => {
    const languages = {
      en: {
        home: {
          foo: 'bar',
          baz: 'foo {{name}}',
        },
      },
      fr: {
        home: {
          foo: 'bah',
          baz: 'fot {{name}}',
        },
      },
    };

    it('should render the correct text', async () => {
      const name = 'lksdlfkjsdflkj';
      const { findByText } = render(
        <Languages languages={languages} defaultLanguage="en">
          <>
            <div>
              <T>home.foo</T>
              <T replacements={{ name }}>home.baz</T>
            </div>
            <Switcher />
          </>
        </Languages>
      );

      await findByText(/bar/i);
      expect(await findByText(/foo/i)).toHaveTextContent(new RegExp(name, 'i'));

      // fireEvent.click(await findByText(/fr/i), { target: { value: 'fr' } });
      // expect(await findByText(/fot/i)).toHaveTextContent(new RegExp(name, 'i'));
    });
  });

  describe('get', () => {
    it('should get a nested property from an object', () => {
      const baz = 'foobar';
      const obj = {
        foo: {
          bar: {
            baz,
          },
        },
      };

      expect(get(obj, 'foo.bar.baz')).toBe(baz);
    });

    it('should return the default value or the path', () => {
      const obj = {};
      const defaultValue = 'foo';
      const path = 'one.two.three';
      expect(get(obj, path, defaultValue)).toBe(defaultValue);
      expect(get(obj, path)).toBe(path);
    });
  });
});
